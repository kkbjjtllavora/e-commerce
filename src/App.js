import { Fragment, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Grid, { GRID_ROW, COL_1_OF_4 } from "./components/layout/Grid";
import { GREY_B } from "./constants/colors";
import ShadowBox from "./components/layout/ShadowBox";
import ThumbnailMain from "./components/presentations/ThumbnailMain";
import { usePromise } from "./utils/promise";
import mockData from './constants/mockData';

const useStyles = createUseStyles({
    mainContainer: {
        backgroundColor: GREY_B,
        minHeight: "100vh",
        width: "100%",
        padding: "10rem 0",
    },
});

function App() {
    const classes = useStyles();

    const getAsciiFaces = () => {
        return new Promise((resolve, reject) => {
            if (!mockData) {
                return setTimeout(
                    () => reject(new Error("Ascii faces not found!")),
                    2000
                );
            }

            setTimeout(() => resolve(mockData), 2000);
        });
    };

    const asciiFaceRequest = usePromise({
        promiseFunction: async () => {
            const result = await getAsciiFaces();
            return result;
        },
    });

    useEffect(() => {
        asciiFaceRequest.call();
    }, []);

    const asciiFaceList =
        asciiFaceRequest.fulfilled &&
        asciiFaceRequest.value.map((item) => (
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
                {asciiFaceRequest.pending ? (
                    <Fragment>loading...</Fragment>
                ) : (
                    asciiFaceList
                )}
            </Grid>
        </div>
    );
}

export default App;
