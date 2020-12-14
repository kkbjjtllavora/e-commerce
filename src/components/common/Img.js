import React from 'react';
import PropTypes from 'prop-types';
import { createUseCSS } from '../../utils/CSS';

const useCSS = createUseCSS({
    img: {
        display: 'block',
        margin: '.5rem auto',
    },
});

const Img = ({ alt, width = '100%', ...rest }) => {
    const classes = useCSS();
    return <img className={classes.img} {...rest} alt={alt} width={width} />;
};

export default Img;

const strNumTypes = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

Img.propTypes = {
    align: PropTypes.oneOf(['top', 'bottom', 'middle', 'left', 'right']),
    alt: PropTypes.string.isRequired,
    border: strNumTypes,
    height: strNumTypes,
    hspace: strNumTypes,
    src: PropTypes.string.isRequired,
    vspace: strNumTypes,
    width: PropTypes.string,
};
