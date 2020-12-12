import { PURE_BLACK_RGB } from "./colors";

export const DEFAULT_FONT_SIZE = "1.6rem";

// GRID SIZES
export const MAX_WIDTH = "120rem";
export const GUTTER_VERTICAL = "1.5rem";
export const GUTTER_HORIZONTAL = "1.5rem";

export const U_ALIGN_CENTER = "center";
export const U_MARGIN_BOTTOM_SMALL = "1.5rem";
export const U_MARGIN_BOTTOM_MEDIUM = "4rem";
export const U_MARGIN_BOTTOM_BIG = "8rem";

export const U_MARGIN_TOP_BIG = "8rem";
export const U_MARGIN_TOP_HUGE = "10rem";

export const DEFAULT_SHADOW_STYLE = `rgba(${PURE_BLACK_RGB}, 0.2) 0px 1px 1px`;

// CENTER CONTENT ABSOLUTELY INTO A CONTAINER
export const U_ABSOLUTE_CENTER = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};
