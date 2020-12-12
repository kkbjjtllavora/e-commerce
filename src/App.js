import { Fragment, useEffect, useState } from 'react';
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

const useStyles = createUseStyles({
    mainContainer: {
        backgroundColor: GREY_B,
        minHeight: '110vh',
        width: '100%',
        padding: '7rem 0',
    },
});

function App() {
    const classes = useStyles();

    const [listItems, setListItems] = useState([]);
    const [nextListItems, setNextListItems] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const [sortString, setSortString] = useState('title');
    const [isLoading, setIsLoading] = useState(true);
    const [isShownAll, setIsShownAll] = useState(false);
    const [isDataFinished, setIsDataFinished] = useState(false);
    const pageLimit = 20;

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
					setListItems(data.results);
					setIsLoading(false);
                } else {
                    setNextListItems(data.results);
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

        if (scrolledToBottom && !isLoading && !isShownAll) {
            //first show saved items
            setListItems([...listItems, ...nextListItems]);
            setNextListItems([]);
            setIsLoading(true);

            if (!isDataFinished) {
                //then fetch new items and save it into preItems state
                await getAsciiFacesRequest(false);
                setIsLoading(false);
            } else {
                //show end message & disable on scroll
                setIsLoading(false);
                setIsShownAll(true);
            }

			console.log(listItems, nextListItems);
		}
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        getAsciiFacesRequest(true);
        getAsciiFacesRequest(false);
    }, []);

    useEffect(() => {
        getAsciiFacesRequest(true);
    }, [sortString]);

    // const asciiFaceList =
    //     listItems.length > 0 &&
    //     listItems.map((item) => (
    //         <Grid variety={COL_1_OF_4}>
    //             <ShadowBox isLinked>
    //                 <ThumbnailMain
    //                     asciiFace={item.asciiFace}
    //                     title={item.title}
    //                     description={item.description}
    //                     badgeColor={item.badgeColor}
    //                     badgeIcon="$"
    //                     pillContent={item.pillContent}
    //                     badgeContent={item.badgeContent}
    //                 />
    //             </ShadowBox>
    //         </Grid>
    //     ));

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
                            description={item.description}
                            badgeColor={item.badgeColor}
                            badgeIcon="$"
                            pillContent={item.pillContent}
                            badgeContent={item.badgeContent}
                        />
                    </ShadowBox>
                </Grid>
            );

            //   if (itemCount % 20 === 0) {
            // 	//check add id is exists or not in db
            // 	let adId;
            // 	if (this.adsDB[adsCount] !== undefined) {
            // 	  adId = this.adsDB[adsCount];
            // 	} else {
            // 	  adId = this.getAdId();
            // 	  this.adsDB[adsCount] = adId;
            // 	}
            // 	adId = `/ads/?r=${adId}`;
            // 	renderOutPut.push(
            // 	  <div
            // 		className="AdOuter"
            // 		key={"adfor" + itemCount}
            // 		id={"adfor" + itemCount}
            // 	  >
            // 		<img className="ad" src={adId} />
            // 	  </div>
            // 	);
            // 	adsCount++;
            //   }
        }

        return renderOutPut;
    };

    return (
        <div className={classes.mainContainer}>
            <Grid variety={GRID_ROW}>
                <Grid variety={COL_2_OF_4}>
                    <Select
                        options={sortOptions}
                        onChange={(e) => setSortString(e.target.value)}
                    />
                </Grid>
            </Grid>

            <Grid variety={GRID_ROW}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Fragment>{showItems()}</Fragment>
                )}
                {isLoading && <p>Loading...</p>}
                {isShownAll && <p>~ end of catalogue ~</p>}
            </Grid>
        </div>
    );
}

export default App;
