import { createUseStyles } from 'react-jss';

export const createUseCSS = createUseStyles;

export const minWidthMediaQuery = (width) =>
    `@media screen and (min-width: ${width}px)`;
export const maxWidthMediaQuery = (width) =>
    `@media screen and (max-width: ${width}px)`;

export const betweenMediaQuery = (minWidth, maxWidth) =>
    `@media screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;

export const minWidthMinHeightMediaQuery = (minWidth, minHeight) =>
    `@media (min-height: ${minWidth}px) and (min-height: ${minHeight}px)`;

// This utility function needs enhanement for generating keyframe
// not just for chrome but for other browsers.
export const keyframe = (name) => `@keyframes ${name}`;
