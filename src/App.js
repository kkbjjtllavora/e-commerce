import { createUseStyles } from 'react-jss';
import Grid, { GRID_ROW, COL_1_OF_2, COL_1_OF_3 } from './components/layout/Grid';

const useStyles = createUseStyles({
  
});

function App() {
  const classes = useStyles();

  return (
    <Grid variety={GRID_ROW}>
      <Grid variety={COL_1_OF_2}>Col 1 of 2</Grid>
      <Grid variety={COL_1_OF_2}>Col 1 of 2</Grid>
    </Grid>
  );
}

export default App;
