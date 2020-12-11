import { createUseStyles } from 'react-jss';
import Grid, { GRID_ROW, COL_1_OF_4 } from './components/layout/Grid';
import { GREY_B, BLACK_A, PURE_WHITE, GREY_E, GREEN_A, GREY_C, GREY_D } from './constants/colors';
import { DEFAULT_FONT_SIZE } from './constants/styles';

const useStyles = createUseStyles({
  mainContainer: {
    backgroundColor: GREY_B,
    height: '100vh',
    width: '100%',
    padding: '10rem 0',
  },

  borderBox: {
    backgroundColor: PURE_WHITE,
    borderRadius: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 1px',
  },

  borderBoxLink: {
    width: '100%',
    height: '100%',
    display: 'block',
    textDecoration: 'none',
  },

  thumbnailMain: {
    padding: '0 2rem',
    borderBottom: '2px solid rgb(242, 242, 242)',
  },

  thumbnailSub: {
    padding: '1rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  thumbnailImg: {
    width: '100%',
    display: 'inline-block',
    fontSize: '5rem',
    textAlign: 'center',
    color: BLACK_A,
    margin: '4.5rem 0 4rem',
    fontWeight: '300',
  },

  thumbnailTitle: {
    fontSize: '1.8rem',
    textAlign: 'center',
    color: BLACK_A,
    fontWeight: '500',
    marginBottom: '1rem',
    letterSpacing: '1.4px',
  },

  thumbnailDescription: {
    color: GREY_E,
    fontSize: DEFAULT_FONT_SIZE,
    textAlign: 'center',
    fontWeight: '300',
    display: 'inline-block',
    marginBottom: '1rem',
  },

  priceContainer: {
    color: BLACK_A,
    fontWeight: 600,
    fontSize: '1.2rem',
  },

  dateContainer: {
    color: GREY_E,
    fontWeight: '500',
    backgroundColor: GREY_C,
    padding: '.5rem 1rem',
  },

  badge: {
    fontWeight: '600',
    color: PURE_WHITE,
    backgroundColor: GREEN_A,
    padding: '.3rem .6rem',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Grid variety={GRID_ROW}>
        <Grid variety={COL_1_OF_4}>
          <div className={classes.borderBox}>
            <a href="#" className={classes.borderBoxLink}>
              <article>
                <div className={classes.thumbnailMain}>
                  <div className={classes.thumbnailImg}>
                    ( ͡° ͜ʖ ͡°)
                  </div>
                  <h4 className={classes.thumbnailTitle}>
                    Daily News
                  </h4>
                  <p className={classes.thumbnailDescription}>
                    Improve your communication skills and have better conversations.
                  </p>
                </div>

                <div className={classes.thumbnailSub}>
                  <div className={classes.priceContainer}>
                    <span className={classes.badge}>$</span>{" "}
                    300.00
                  </div>

                  <div className={classes.dateContainer}>
                    5 Days ago
                  </div>
                </div>
              </article>
            </a>
          </div>
        </Grid>
        <Grid variety={COL_1_OF_4}>Col 1 of 4</Grid>
        <Grid variety={COL_1_OF_4}>Col 1 of 4</Grid>
        <Grid variety={COL_1_OF_4}>Col 1 of 4</Grid>
      </Grid>

      <Grid variety={GRID_ROW}>
        <Grid variety={COL_1_OF_4}>Col 1 of 4</Grid>
        <Grid variety={COL_1_OF_4}>Col 1 of 4</Grid>
        <Grid variety={COL_1_OF_4}>Col 1 of 4</Grid>
        <Grid variety={COL_1_OF_4}>Col 1 of 4</Grid>
      </Grid>
    </div>
  );
}

export default App;
