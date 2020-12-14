import { createUseStyles } from 'react-jss';
import {
    BLUE_A,
    RED_A,
    PURE_WHITE,
    ORANGE_A,
    GREEN_A,
    BLACK_A,
} from '../../constants/colors';

export const BADGE_BLUE = 'BADGE_BLUE';
export const BADGE_RED = 'BADGE_RED';
export const BADGE_GREEN = 'BADGE_GREEN';
export const BADGE_ORANGE = 'BADGE_ORANGE';

const BADGE_BASE_STYLE = {
    fontWeight: '600',
    color: PURE_WHITE,
    padding: '.3rem .7rem',
    borderRadius: '1px',
};

const useStyles = createUseStyles({
    badgeContainer: {
        color: BLACK_A,
        fontWeight: 500,
        fontSize: '1.2rem',
        letterSpacing: '1.4px',
    },

    [BADGE_BLUE]: {
        ...BADGE_BASE_STYLE,
        backgroundColor: BLUE_A,
    },

    [BADGE_ORANGE]: {
        ...BADGE_BASE_STYLE,
        backgroundColor: ORANGE_A,
    },

    [BADGE_GREEN]: {
        ...BADGE_BASE_STYLE,
        backgroundColor: GREEN_A,
    },

    [BADGE_RED]: {
        ...BADGE_BASE_STYLE,
        backgroundColor: RED_A,
    },
});

const Badge = ({ variety = GREEN_A, icon, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.badgeContainer}>
            <span className={classes[variety]}>{icon}</span> {children}
        </div>
    );
};

export default Badge;
