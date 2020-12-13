import { Fragment, useEffect, useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import Grid, {
    GRID_ROW,
    COL_1_OF_4,
    COL_2_OF_4,
} from './components/layout/Grid';
import { GREY_B } from './constants/colors';
import ShadowBox from './components/layout/ShadowBox';
import ThumbnailMain from './components/presentations/ThumbnailMain';
import { usePromise } from './utils/promise';
import Select from './components/forms/Select';
import { getAsciiFaces } from './utils/api';
import Spinner from './components/common/Spinner';
import { GetSortOrder } from './utils/array';

const useStyles = createUseStyles({
    mainContainer: {
        backgroundColor: GREY_B,
        minHeight: '110vh',
        width: '100%',
        padding: '7rem 0',
    },
});

const App = () => {
    const classes = useStyles();

    const [listItems, setListItems] = useState([]);
    const [nextListItems, setNextListItems] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const [sortString, setSortString] = useState('title');
    const [isLoading, setIsLoading] = useState(true);
    const [isSortLoading, setIsSortLoading] = useState(false);
    const [isShownAll, setIsShownAll] = useState(false);
    const [isDataFinished, setIsDataFinished] = useState(false);
    const pageLimit = 16;
    const adsDB = [];

    const sortOptions = [
        { value: 'title', displayValue: 'Title' },
        { value: 'badgeContent', displayValue: 'Badge Content / Price' },
        { value: 'id', displayValue: 'ID' },
    ];

    const asciiFaceRequest = usePromise({
        promiseFunction: async () => {
            const result = await getAsciiFaces(sortString, pageLimit, nextPage);
            return result;
        },
    });

    const getAsciiFacesRequest = (initialLoad) => {
        asciiFaceRequest.call().then((data) => {
            if (data.results.length === 0) {
                setIsDataFinished(true);
            } else {
                setNextPage(nextPage + 1);

                if (initialLoad) {
                    setListItems([...data.results]);
                } else {
                    setNextListItems([...data.results]);
                }
            }
        });
    };

    const handleScroll = async () => {
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        const scrollHeight =
            (document.documentElement &&
                document.documentElement.scrollHeight) ||
            document.body.scrollHeight;
        const clientHeight =
            document.documentElement.clientHeight || window.innerHeight;
        const scrolledToBottom =
            Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom && !isShownAll) {
            //first show saved items
            setIsLoading(true);
            setTimeout(async () => {
                await setListItems([...listItems, ...nextListItems]);
                await setIsLoading(false);
                await setNextListItems([]);
            }, 1000);

            if (!isDataFinished) {
                await getAsciiFacesRequest(false);
            } else {
                setIsShownAll(true);
            }
        }
    };

    const getAdId = () => {
        //generating random ad id when add is displayed as the test wanted
        //ads server api has a small bug. Both r=7 and r=8 have same ad banner!
        let id;
        while (true) {
            id = Math.floor(Math.random() * 10) + 0; //based on backend(handle-ad.js), there is no difference between 0-9 and 0-99999999 in ad real id result,
            if (adsDB[adsDB.length - 1] !== id) {
                //prevent same ad in a row
                return id;
            }
        }
    };

    const fetchData = async () => {
        await getAsciiFacesRequest(true);
        await getAsciiFacesRequest(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleSort = (e) => {
        setIsSortLoading(true);
        setIsLoading(false);

        setTimeout(() => {
            const sortedList = listItems.sort(GetSortOrder(e.target.value));
            setListItems(sortedList);

            setIsSortLoading(false);
        }, 1000);
    };

    const showItems = () => {
        var renderOutPut = [];

        let itemCount = 0;
        let adsCount = 0;
        for (const item of listItems) {
            itemCount++;
            renderOutPut.push(
                <Grid variety={COL_1_OF_4}>
                    <ShadowBox isLinked>
                        <ThumbnailMain
                            asciiFace={item.asciiFace}
                            title={item.title}
                            description={item.id}
                            badgeColor={item.badgeColor}
                            badgeIcon="$"
                            pillContent={item.pillContent}
                            badgeContent={item.badgeContent}
                        />
                    </ShadowBox>
                </Grid>
            );

            if (itemCount % 20 === 0) {
                //check add id is exists or not in db
                let adId;
                if (adsDB[adsCount] !== undefined) {
                    adId = adsDB[adsCount];
                } else {
                    adId = getAdId();
                    adsDB[adsCount] = adId;
                }
                adId = `/ads/?r=${adId}`;
                renderOutPut.push(
                    <div
                        className="AdOuter"
                        key={"adfor" + itemCount}
                        id={"adfor" + itemCount}
                    >
                        <img className="ad" src={adId} />
                    </div>
                );
                adsCount++;
            }
        }

        return renderOutPut;
    };

    return (
        <div className={classes.mainContainer}>
            <Grid variety={GRID_ROW}>
                <Grid variety={COL_2_OF_4}>
                    <Select options={sortOptions} onChange={handleSort} />
                </Grid>
            </Grid>

            <Grid variety={GRID_ROW}>
                <Fragment>{isSortLoading ? <Spinner /> : showItems()}</Fragment>
            </Grid>

            <Grid variety={GRID_ROW}>
                {isLoading && !isShownAll && <Spinner />}
                {isShownAll && <p>~ end of catalogue ~</p>}
            </Grid>
        </div>
    );
};

export default App;
