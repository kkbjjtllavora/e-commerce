import React from "react";
import PropTypes from "prop-types";
import { createUseCSS } from "../../utils/CSS";
import {
    MAX_WIDTH,
    GUTTER_HORIZONTAL,
    GUTTER_VERTICAL,
} from "../../constants/styles";

export const GRID_ROW = "grid-row";
export const COL_1_OF_2 = "col-1-of-2";
export const COL_1_OF_3 = "col-1-of-3";
export const COL_2_OF_3 = "col-2-of-3";
export const COL_1_OF_4 = "col-1-of-4";
export const COL_2_OF_4 = "col-2-of-4";
export const COL_3_OF_4 = "col-3-of-4";

const BASE_COLUMN_STYLE = {
    float: "left",

    "&:not(:last-child)": {
        marginRight: GUTTER_HORIZONTAL,
    },
};

const useCSS = createUseCSS({
    [GRID_ROW]: {
        maxWidth: MAX_WIDTH,
        margin: "0 auto",

        "&:not(:last-child)": {
            marginBottom: GUTTER_VERTICAL,
        },

        "&::after": {
            content: '""',
            display: "table",
            clear: "both",
        },
    },

    [COL_1_OF_2]: {
        ...BASE_COLUMN_STYLE,
        width: `calc((100% - ${GUTTER_HORIZONTAL}) / 2)`,
    },

    [COL_1_OF_3]: {
        ...BASE_COLUMN_STYLE,
        width: `calc((100% - 2 * ${GUTTER_HORIZONTAL}) / 3)`,
    },

    [COL_2_OF_3]: {
        ...BASE_COLUMN_STYLE,
        width: `calc(2 * ((100% - 2 * ${GUTTER_HORIZONTAL}) / 3) + ${GUTTER_HORIZONTAL})`,
    },

    [COL_1_OF_4]: {
        ...BASE_COLUMN_STYLE,
        width: `calc((100% - 3 * ${GUTTER_HORIZONTAL}) / 4)`,
    },

    [COL_2_OF_4]: {
        ...BASE_COLUMN_STYLE,
        width: `calc(((100% - 3 * ${GUTTER_HORIZONTAL}) / 2) + ${GUTTER_HORIZONTAL})`,
    },

    [COL_3_OF_4]: {
        ...BASE_COLUMN_STYLE,
        width: `calc(3 * ((100% - 3 * ${GUTTER_HORIZONTAL}) / 4) + ${GUTTER_HORIZONTAL} * 2)`,
    },
});

const Grid = ({ variety = GRID_ROW, children }) => {
    const classes = useCSS();

    return <div className={classes[variety]}>{children}</div>;
};

export default Grid;

Grid.propTypes = {
    variety: PropTypes.oneOf([
        GRID_ROW,
        COL_1_OF_2,
        COL_1_OF_3,
        COL_2_OF_3,
        COL_1_OF_4,
        COL_2_OF_4,
        COL_3_OF_4,
    ]),
    children: PropTypes.node,
};
