import React, { useState } from 'react';
// import leftBg from '/assets/img/left-bg.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Login() {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
    </div>
  );
}

export default Login;

{
  /* <div className='container-fluid'>
        <div className='row'>
          <div className='col-5' style={{ background: '#E34234' }}>
            <img src='/assets/img/left-bg.png' alt='left-bg' />
          </div>
          <div className='col-7'>
            <input
              class='form-control'
              type='text'
              placeholder='Email'
              aria-label='default input example'
            />
            <input
              type='password'
              class='form-control'
              id='inputPassword2'
              placeholder='Password'
            />

            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='defaultCheck1'
              />
              <label class='form-check-label' for='defaultCheck1'>
                Default checkbox
              </label>
            </div>
          </div>
        </div>
      </div> */
}
