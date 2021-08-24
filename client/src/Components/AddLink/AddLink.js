import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function AddLink() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <p className={classes.addTitle}>
            <ArrowBackIcon className={classes.backArrow} />
            Add Link
          </p>
          <form className={classes.addForm} noValidate autoComplete='off'>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-basic'
                  label='Title'
                  className={classes.addTextField}
                  required
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='url'
                  label='URL'
                  className={classes.addTextField}
                  name='url'
                  autoComplete='url'
                  type='url'
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
