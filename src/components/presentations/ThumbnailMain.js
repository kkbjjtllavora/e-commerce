import { createUseStyles } from "react-jss";
import { BLACK_A, GREY_E } from "../../constants/colors";
import { DEFAULT_FONT_SIZE } from "../../constants/styles";
import Badge from "../common/Badge";
import Pill from "../common/Pill";

const useStyles = createUseStyles({
    thumbnailLink: {
        width: "100%",
        height: "100%",
        display: "block",
        textDecoration: "none",
    },

    thumbnailMain: {
        padding: "0 2rem",
        borderBottom: "2px solid rgb(242, 242, 242)",
    },

    thumbnailSub: {
        padding: "1rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    asciiFaceContainer: {
        width: "100%",
        display: "inline-block",
        fontSize: "2rem",
        textAlign: "center",
        color: BLACK_A,
        margin: "4.5rem 0 4rem",
        fontWeight: "300",
    },

    thumbnailTitle: {
        fontSize: "1.8rem",
        textAlign: "center",
        color: BLACK_A,
        fontWeight: "500",
        marginBottom: "1rem",
        letterSpacing: "1.4px",
    },

    thumbnailDescription: {
        color: GREY_E,
        fontSize: DEFAULT_FONT_SIZE,
        textAlign: "center",
        fontWeight: "300",
        display: "inline-block",
        marginBottom: "1rem",
    },
});

const ThumbnailMain = ({
    asciiFace,
    title,
    description,
    badgeColor,
    badgeIcon,
    badgeContent,
    pillContent,
}) => {
    const classes = useStyles();

    return (
        <a href="/#" className={classes.thumbnailLink}>
            <article>
                <div className={classes.thumbnailMain}>
                    <div className={classes.asciiFaceContainer}>{asciiFace}</div>
                    <h4 className={classes.thumbnailTitle}>{title}</h4>
                    <p className={classes.thumbnailDescription}>
                        {description}
                    </p>
                </div>

                <div className={classes.thumbnailSub}>
                    <Badge variety={badgeColor} icon={badgeIcon}>
                        {badgeContent}
                    </Badge>

                    <Pill>{pillContent}</Pill>
                </div>
            </article>
        </a>
    );
};

export default ThumbnailMain;
