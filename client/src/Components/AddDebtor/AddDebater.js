import React from 'react';
import clsx from 'clsx';

import './style.css';
import { useStyles } from './style';
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

export default function AddDebater() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('CP');
  const [values, setValues] = React.useState({
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
  return (
    <div>
      <Grid container className='addDebater'>
        <Paper className={classes.paper}>
          <p className='addTitle'>
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
                  inputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='email'
                  label='Email'
                  className={classes.addTextField}
                  name='email'
                  autoComplete='email'
                  inputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-basic '
                  label='Estate Number'
                  className={classes.addTextField}
                  inputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-basic'
                  label='Phone'
                  name='number'
                  className={classes.addTextField}
                  inputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-select-currency'
                  select
                  value={currency}
                  onChange={handleChange}
                  className={clsx(classes.addTextField, classes.selectInputAdd)}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-basic'
                  label='Address'
                  className={classes.addTextField}
                  inputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  inputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 13 } }}
                >
                  <InputLabel htmlFor='standard-adornment-password'>
                    Password
                  </InputLabel>
                  <Input
                    className={classes.addTextField}
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
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.AddDebaterBtn}
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
