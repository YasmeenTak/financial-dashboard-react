import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
          <form className={classes.addForm} noValidate autoComplete='off'>
            <Grid container spacing={3}>
              <Grid item lg={6} xs={12} sm={12}>
                <TextField
                  id='standard-basic'
                  label='Name'
                  className={classes.addTextField}
                />
              </Grid>
              <Grid item lg={6} xs={12} sm={12}>
                <TextField
                  id='email'
                  label='Email'
                  className={classes.addTextField}
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item lg={6} xs={12} sm={12}>
                <TextField
                  id='filled-password-input'
                  label='Password'
                  type='password'
                  autoComplete='current-password'
                  className={classes.addTextField}
                />
              </Grid>
              <Grid item lg={6} xs={12} sm={12}>
                <TextField
                  id='outlined-basic'
                  label='Select groups'
                  variant='outlined'
                  className={classes.addTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.AddPersonalBtn}
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
