import React from 'react';
import clsx from 'clsx';

import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
  addTextField: {},
}));

const currencies = [
  {
    value: 'CP',
    label: 'CP',
  },
  {
    value: 'SA',
    label: 'SA',
  },
];

export default function AddDebater() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('CP');
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid item className='addDebater'>
      <Paper className={classes.paper}>
        <p className='addTitle'>
          <ArrowBackIcon className={classes.backArrow} />
          Add
        </p>
        <form className={classes.addForm} noValidate autoComplete='off'>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                id='standard-basic'
                label='Name'
                className={classes.addTextField}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id='standard-basic' label='Email' />
            </Grid>

            <Grid item xs={6}>
              <TextField id='standard-basic' label='Estate Number' />
            </Grid>
            <Grid item xs={6}>
              <TextField id='standard-basic' label='Phone' />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-select-currency'
                select
                value={currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField id='standard-basic' label='Address' />
            </Grid>

            <Grid item xs={6}>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor='standard-adornment-password'>
                  Password
                </InputLabel>
                <Input
                  id='standard-adornment-password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>{' '}
            </Grid>
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
