import { createUseStyles } from "react-jss";
import Grid, { GRID_ROW, COL_1_OF_4 } from "./components/layout/Grid";
import { GREY_B } from "./constants/colors";
import ShadowBox from "./components/layout/ShadowBox";
import {
    BADGE_GREEN,
    BADGE_BLUE,
    BADGE_ORANGE,
    BADGE_RED,
} from "./components/common/Badge";
import ThumbnailMain from "./components/presentations/ThumbnailMain";

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

    return (
        <div className={classes.mainContainer}>
            <Grid variety={GRID_ROW}>
                <Grid variety={COL_1_OF_4}>
                    <ShadowBox isLinked>
                        <ThumbnailMain
                            fontFace="(づ｡◕‿‿◕｡)づ"
                            title="Daily News"
                            description="
                                    Improve your communication skills and have
                                    better conversations."
                            badgeColor={BADGE_GREEN}
                            badgeIcon="$"
                            pillContent="5 Days ago"
                            badgeContent="300.00"
                        />
                    </ShadowBox>
                </Grid>
                <Grid variety={COL_1_OF_4}>
                    <ShadowBox isLinked>
                        <ThumbnailMain
                            fontFace=" ̿ ̿'̿'\̵͇̿̿\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿"
                            title="Conversation"
                            description="
                            Our most popular material. New lessons
                            added every day based on current events."
                            badgeColor={BADGE_BLUE}
                            badgeIcon="$"
                            pillContent="3 Days ago"
                            badgeContent="500.00"
                        />
                    </ShadowBox>
                </Grid>
                <Grid variety={COL_1_OF_4}>
                    <ShadowBox isLinked>
                        <ThumbnailMain
                            fontFace="̿̿̿（╯°□°）╯︵( .o.)"
                            title="Describing Pictures"
                            description="
                            Increase your vocabulary and speaking
                                        skills by describing pictures."
                            badgeColor={BADGE_ORANGE}
                            badgeIcon="$"
                            pillContent="3 Days ago"
                            badgeContent="400.00"
                        />
                    </ShadowBox>
                </Grid>
                <Grid variety={COL_1_OF_4}>
                    <ShadowBox isLinked>
                        <ThumbnailMain
                            fontFace="(▀̿Ĺ̯▀̿ ̿)"
                            title="Health & Lifestyle"
                            description="
                            Learn health-related vocabulary and expressions health-related issues"
                            badgeColor={BADGE_RED}
                            badgeIcon="$"
                            pillContent="3 Days ago"
                            badgeContent="400.00"
                        />
                    </ShadowBox>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
