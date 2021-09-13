import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

export default function AddInstruction2() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <p className={classes.addTitle}>
            <ArrowBackIcon className={classes.backArrow} />
            Add
          </p>
          <form className={classes.rootForm} noValidate autoComplete='off'>
            <Grid item lg={12} xs={12}>
              <TextField
                id='standard-basic'
                label='Title'
                className={classes.addTextField}
              />
            </Grid>
            <Grid item lg={12} xs={12}>
              <TextField
                id='outlined-basic'
                label='Content'
                variant='outlined'
                className={clsx(classes.addTextField, classes.contentTextFiled)}
              />
            </Grid>
            <Grid item lg={12} xs={12}>
              <Button
                variant='contained'
                component='label'
                className={classes.uploadImg}
              >
                Upload Image
                <input type='file' hidden />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                color='secondary'
                type='submit'
                className={classes.AddDebaterBtn}
              >
                Add
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
