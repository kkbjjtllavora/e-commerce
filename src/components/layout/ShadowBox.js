import { createUseStyles } from "react-jss";
import { PURE_WHITE, PURE_BLACK_RGB } from "../../constants/colors";

const DEFAULT_SHADOW_BOX_STYLE = `rgba(${PURE_BLACK_RGB}, 0.2) 0px 1px 1px`;

const useStyles = createUseStyles({
    shadowBox: {
        backgroundColor: PURE_WHITE,
        borderRadius: "3px",
        boxShadow: DEFAULT_SHADOW_BOX_STYLE,
        transition: 'box-shadow .3s',

        "&:hover": {
            boxShadow: (props) =>
                props.isLinked
                    ? `rgba(${PURE_BLACK_RGB}, 0.1) 0px 5px 5px`
                    : DEFAULT_SHADOW_BOX_STYLE,
        },
    },
});

const ShadowBox = ({ children, ...props }) => {
    const classes = useStyles(props);

    return <div className={classes.shadowBox}>{children}</div>;
};

export default ShadowBox;

ShadowBox.defaultProps = {
    isLinked: false,
};
