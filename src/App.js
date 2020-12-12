import { Fragment, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Grid, {
    GRID_ROW,
    COL_1_OF_4,
    COL_2_OF_4,
} from "./components/layout/Grid";
import { GREY_B } from "./constants/colors";
import ShadowBox from "./components/layout/ShadowBox";
import ThumbnailMain from "./components/presentations/ThumbnailMain";
import { usePromise } from "./utils/promise";
import Select from "./components/forms/Select";
import { getAsciiFaces } from "./utils/api";
import Spinner from "./components/common/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = createUseStyles({
    mainContainer: {
        backgroundColor: GREY_B,
        minHeight: "110vh",
        width: "100%",
        padding: "7rem 0",
    },
});

function App() {
    const classes = useStyles();

    const [listItems, setListItems] = useState([]);
    const [nextListItems, setNextListItems] = useState([]);

    const [sortString, setSortString] = useState("title");
    const sortOptions = [
        { value: "title", displayValue: "Title" },
        { value: "badgeContent", displayValue: "Badge Content / Price" },
        { value: "id", displayValue: "ID" },
    ];
    const pageLimit = 20;

    const asciiFaceRequest = usePromise({
        promiseFunction: async (page) => {
            const result = await getAsciiFaces(sortString, pageLimit, page);
            return result;
        },
    });

    const getAsciiFacesRequest = (initialLoad) => {
        asciiFaceRequest
            .call()
            .then((data) => {
                if (initialLoad) {
                    setListItems([...data.results]);
                }

                return asciiFaceRequest.call(data.nextPage);
            })
            .then((data) => {
                setNextListItems([...data.results]);
            });
    };

    const loadMoreItems = () => {
        listItems.push([...nextListItems]);
        getAsciiFacesRequest(false);
    };

    useEffect(() => {
        getAsciiFacesRequest(true);
    }, []);

    useEffect(() => {
        getAsciiFacesRequest(false);
    }, [sortString]);

    const asciiFaceList =
        listItems.length > 0 &&
        listItems.map((item) => (
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
        ));

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
                {asciiFaceRequest.pending ? (
                    <Spinner />
                ) : (
                    <InfiniteScroll
                        next={loadMoreItems}
                        dataLength={100}
                        hasMore={true}
                        loader={<Spinner />}
                    >
                        {asciiFaceList}{" "}
                    </InfiniteScroll>
                )}
            </Grid>
        </div>
    );
}

export default App;
