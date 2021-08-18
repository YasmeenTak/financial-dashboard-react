import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    height: '400px',
  },
  backArrow: {
    fontSize: 'small',
    marginRight: '10px',
    marginBottom: '-2px',
  },
  AddDebaterBtn: {
    color: 'white',
    backgroundColor: '#FD5353',
    borderRadius: '15px',
    width: '15%',
    float: 'right',
  },
  addForm: {
    paddingLeft: '100px',
    paddingTop: '20px',
    paddingBottom: '50px',
  },
}));

export default function AddDebater() {
  const classes = useStyles();

  return (
    <Grid item className='addDebater'>
      <Paper className={classes.paper}>
        <p className='addTitle'>
          <ArrowBackIcon className={classes.backArrow} />
          Add
        </p>
        <form className={classes.addForm} noValidate autoComplete='off'>
          <Grid>
            <TextField id='standard-basic' label='Standard' />
            <TextField id='standard-basic' label='Standard' />
          </Grid>
          <Grid>
            <TextField id='standard-basic' label='Standard' />
            <TextField id='standard-basic' label='Standard' />
          </Grid>
          <Grid>
            <TextField id='standard-basic' label='Standard' />
            <TextField id='standard-basic' label='Standard' />
          </Grid>
          <Grid>
            <TextField id='standard-basic' label='Standard' />
          </Grid>
        </form>

        <Button
          variant='contained'
          color='secondary'
          className={classes.AddDebaterBtn}
        >
          Add
        </Button>
      </Paper>
    </Grid>
  );
}
