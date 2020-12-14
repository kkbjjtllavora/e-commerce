import { Fragment, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Grid, {
    GRID_ROW,
    COL_1_OF_4,
    COL_2_OF_4,
} from './components/layout/Grid';
import Spinner from './components/common/Spinner';
import Img from './components/common/Img';
import ShadowBox from './components/layout/ShadowBox';
import ThumbnailMain from './components/presentations/ThumbnailMain';
import Select from './components/forms/Select';
import { GREY_B } from './constants/colors';
import { usePromise } from './utils/promise';
import { getAsciiFaces, MOCK_LOADING_TIME } from './utils/api';
import { scrolledToBottom } from './utils/window';
import { convertTimeToRelative } from './utils/date';
import adBannerA from './assets/images/banner-ad-a.jpg';
import adBannerB from './assets/images/banner-ad-b.jpg';
import adBannerC from './assets/images/banner-ad-c.jpg';
import adBannerD from './assets/images/banner-ad-d.jpg';
import adBannerE from './assets/images/banner-ad-e.jpg';

const useStyles = createUseStyles({
    mainContainer: {
        backgroundColor: GREY_B,
        minHeight: '110vh',
        width: '100%',
        padding: '7rem 0',
    },

    endText: {
        textAlign: 'center',
        fontSize: '1.6rem',
        margin: '6rem 0 0',
    },
});

const App = () => {
    const classes = useStyles();

    const [listItems, setListItems] = useState([]);
    const [nextListItems, setNextListItems] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const [sortString, setSortString] = useState('title');
    const [isLoading, setIsLoading] = useState(false);
    const [isDataFinished, setIsDataFinished] = useState(false);

    const pageLimit = 16;
    const adBannerList = [
        adBannerA,
        adBannerB,
        adBannerC,
        adBannerD,
        adBannerE,
    ];

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
        setIsLoading(true);
        asciiFaceRequest.call().then((data) => {
            if (data.results.length === 0) {
                setIsDataFinished(true);
            } else {
                setNextPage(data.nextPage);

                initialLoad
                    ? setListItems([...data.results])
                    : setNextListItems([...data.results]);

                setIsLoading(false);
            }
        });
    };

    const handleScroll = async () => {
        if (scrolledToBottom() && !isLoading && !isDataFinished) {
            //first show saved items
            setIsLoading(true);
            setTimeout(async () => {
                await setListItems([...listItems, ...nextListItems]);
                await setIsLoading(false);
                await setNextListItems([]);
            }, MOCK_LOADING_TIME);
        }
    };

    const getAdBannerName = () => {
        let id;
        while (true) {
            id = Math.floor(Math.random() * 10) + 0;
            if (adBannerList[adBannerList.length - 1] !== id) {
                return id;
            }
        }
    };

    const handleSort = (e) => {
        setSortString(e.target.value);
        setListItems([]);
        setNextListItems([]);
        setNextPage(1);
        setIsDataFinished(false);
    };

    const fetchAsciiList = async (isInitial) => {
        await getAsciiFacesRequest(isInitial);
    };

    useEffect(() => {
        fetchAsciiList(true);
    }, []);

    useEffect(() => {
        fetchAsciiList(false);
    }, [listItems]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    useEffect(() => {
        fetchAsciiList(true);
    }, [sortString]);

    const renderAsciiFaces = () => {
        var asciiFacesOutput = [];
        let adsBannerCount = 0;
        let adsBannerTotal = 0;

        listItems.forEach(
            ({ asciiFace, title, id, badgeColor, createdAt, price }) => {
                adsBannerCount++;
                asciiFacesOutput.push(
                    <Grid variety={COL_1_OF_4}>
                        <ShadowBox isLinked>
                            <ThumbnailMain
                                asciiFace={asciiFace}
                                title={title}
                                description={`ID: ${id}`}
                                badgeColor={badgeColor}
                                badgeIcon="$"
                                pillContent={convertTimeToRelative(createdAt)}
                                badgeContent={price}
                            />
                        </ShadowBox>
                    </Grid>
                );

                if (adsBannerCount % 20 === 0) {
                    let adName;
                    if (adBannerList[adsBannerTotal] !== undefined) {
                        adName = adBannerList[adsBannerTotal];
                    } else {
                        adName = getAdBannerName();
                        adBannerList[adsBannerTotal] = adName;
                    }

                    asciiFacesOutput.push(
                        <div key={adsBannerCount}>
                            <Img src={adName} width="90%" />
                        </div>
                    );
                    adsBannerTotal++;
                }
            }
        );

        return asciiFacesOutput;
    };

    return (
        <div className={classes.mainContainer}>
            <Grid variety={GRID_ROW}>
                <Grid variety={COL_2_OF_4}>
                    <Select options={sortOptions} onChange={handleSort} />
                </Grid>
            </Grid>

            <Grid variety={GRID_ROW}>
                <Fragment>{renderAsciiFaces()}</Fragment>
            </Grid>

            <Grid variety={GRID_ROW}>
                {isLoading && !isDataFinished && <Spinner />}
                {isDataFinished && (
                    <p className={classes.endText}>~ end of catalogue ~</p>
                )}
            </Grid>
        </div>
    );
};

export default App;
