import { createUseStyles } from 'react-jss';
import { GREY_E, GREY_C } from '../../constants/colors';

const useStyles = createUseStyles({
    pill: {
        color: GREY_E,
        fontWeight: '500',
        backgroundColor: GREY_C,
        padding: '.5rem 1rem',
    },
});

const Pill = ({ children }) => {
    const classes = useStyles();

    return <div className={classes.pill}>{children}</div>;
};

export default Pill;
