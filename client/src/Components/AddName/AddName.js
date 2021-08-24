import { Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AddName() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <p className={classes.addTitle}>
            <ArrowBackIcon className={classes.backArrow} />
            Add
          </p>
          <form className={classes.addForm} noValidate autoComplete='off'>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-basic'
                  label='Name'
                  className={classes.addTextField}
                  required
                />
              </Grid>

              <Grid item xs={12} className={classes.AddBtnGrid}>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.AddBtn}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
