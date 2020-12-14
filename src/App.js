import { Fragment, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Grid, {
    GRID_ROW,
    COL_1_OF_4,
    COL_2_OF_4,
} from './components/layout/Grid';
import Spinner from './components/common/Spinner';
import ShadowBox from './components/layout/ShadowBox';
import ThumbnailMain from './components/presentations/ThumbnailMain';
import Select from './components/forms/Select';
import { GREY_B } from './constants/colors';
import { usePromise } from './utils/promise';
import { getAsciiFaces } from './utils/api';
import { getSortOrder } from './utils/array';
import { scrolledToBottom } from './utils/window';

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

    console.log(adsDB);

    const sortOptions = [
        { value: 'title', displayValue: 'Title' },
        { value: 'price', displayValue: 'Price' },
        { value: 'id', displayValue: 'ID' },
        { value: 'createdAt', displayValue: 'Date Created' },
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
        if (scrolledToBottom() && !isShownAll) {
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
        let id;
        while (true) {
            id = Math.floor(Math.random() * 10) + 0; 
            if (adsDB[adsDB.length - 1] !== id) {
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
            const sortedList = listItems.sort(getSortOrder(e.target.value));
            setListItems(sortedList);

            setIsSortLoading(false);
        }, 1000);
    };

    const renderItems = () => {
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
                            description={`ID: ${item.id}`}
                            badgeColor={item.badgeColor}
                            badgeIcon="$"
                            pillContent={item.createdAt}
                            badgeContent={item.price}
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
                        key={'adfor' + itemCount}
                        id={'adfor' + itemCount}
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
                <Fragment>
                    {isSortLoading ? <Spinner /> : renderItems()}
                </Fragment>
            </Grid>

            <Grid variety={GRID_ROW}>
                {isLoading && !isShownAll && <Spinner />}
                {isShownAll && <p>~ end of catalogue ~</p>}
            </Grid>
        </div>
    );
};

export default App;
