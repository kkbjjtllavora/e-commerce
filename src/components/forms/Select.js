import React from 'react';
import PropTypes from 'prop-types';
import { createUseCSS } from '../../utils/css';
import {
    GREY_C,
    PURE_WHITE,
    RED_A,
    BLACK_A,
    GREY_E,
} from '../../constants/colors';
import {
    DEFAULT_FONT_SIZE,
    DEFAULT_SHADOW_STYLE,
} from '../../constants/styles';

const useCSS = createUseCSS({
    selectContainer: {
        width: '100%',
        boxSizing: 'border-box',
        marginBottom: '1.5rem',
    },

    label: {
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '4px',
        color: BLACK_A,
        fontSize: '1.4rem',
    },

    selectElement: {
        outline: 'none',
        border: 'none',
        backgroundColor: PURE_WHITE,
        padding: '1.5rem 2rem',
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: DEFAULT_SHADOW_STYLE,
        fontSize: DEFAULT_FONT_SIZE,
        color: GREY_E + ' !important',

        '&:focus': {
            outline: 'none',
            borderColor: GREY_C,
        },

        '&::placeholder': {
            color: BLACK_A,
        },

        '&:hover': {
            cursor: 'pointer',
        },
    },

    invalid: {
        border: '1px solid ' + RED_A,
    },
});

const Select = ({ label, value, onChange, options, ...props }) => {
    const classes = useCSS();

    const selectElement = (
        <select
            className={classes.selectElement}
            value={value}
            onChange={onChange}
            style={{ color: GREY_C }}
            {...props}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.displayValue}
                </option>
            ))}
        </select>
    );

    return (
        <div className={classes.selectContainer}>
            <label className={classes.label}>{label}</label>
            {selectElement}
        </div>
    );
};

export default Select;

Select.propTypes = {
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
};
