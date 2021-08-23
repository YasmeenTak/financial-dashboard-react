import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function AddPerson() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <p className={classes.addTitle}>
            <ArrowBackIcon className={classes.backArrow} />
            Add
          </p>
        </Paper>
      </Grid>
    </div>
  );
}
