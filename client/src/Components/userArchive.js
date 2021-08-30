import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperUser: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paperUser}>
        <Grid container>
          <Grid item xs>
            img
          </Grid>
          <Grid item xs={6}>
            <div>Billy Roy</div>
            <div>Request a decument</div>
          </Grid>
          <Grid item xs>
            Aug 8
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
