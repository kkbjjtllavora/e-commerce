import { createUseStyles } from "react-jss";
import { PURE_WHITE, PURE_BLACK_RGB } from "../../constants/colors";
import { DEFAULT_SHADOW_STYLE } from "../../constants/styles";

const useStyles = createUseStyles({
    shadowBox: {
        backgroundColor: PURE_WHITE,
        borderRadius: "3px",
        boxShadow: DEFAULT_SHADOW_STYLE,
        transition: 'box-shadow .3s',

        "&:hover": {
            boxShadow: (props) =>
                props.isLinked
                    ? `rgba(${PURE_BLACK_RGB}, 0.1) 0px 5px 5px`
                    : DEFAULT_SHADOW_STYLE,
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
