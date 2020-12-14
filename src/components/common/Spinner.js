import React from 'react';
import { createUseCSS, keyframe } from '../../utils/css';
import { generateKeyFrameName } from '../../utils/strings';
import { GREY_E } from '../../constants/colors';

const LOADING = generateKeyFrameName('loading');

const useCSS = createUseCSS({
    [keyframe(LOADING)]: {
        '0%': {
            boxShadow: `0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0`,
        },
        '100%': {
            boxShadow: `0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0`,
        },
        '12.5%': {
            boxShadow:
                '0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em',
        },
        '25%': {
            boxShadow:
                '0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em',
        },
        '37.5%': {
            boxShadow:
                '0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em',
        },
        '50%': {
            boxShadow:
                '0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em',
        },
        '62.5%': {
            boxShadow:
                '0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em',
        },
        '75%': {
            boxShadow:
                '0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0',
        },
        '87.5%': {
            boxShadow:
                '0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em',
        },
    },

    spinner: {
        color: GREY_E,
        fontSize: '10px',
        margin: '50px auto',
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        position: 'relative',
        textIndent: '-9999em',

        animationName: '$' + LOADING,
        animationDuration: '1.3s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        transform: 'translateZ(0)',
    },
});

const Spinner = () => {
    const classes = useCSS();

    return <div className={classes.spinner}>Loading...</div>;
};

export default Spinner;
