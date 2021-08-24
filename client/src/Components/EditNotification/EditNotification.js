import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';

export default function EditNotification() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('Administration');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const currencies = [
    {
      value: 'Administration',
      label: 'Administration',
    },
    {
      value: 'Claims',
      label: 'Claims',
    },
  ];
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <p className={classes.addTitle}>
            <ArrowBackIcon className={classes.backArrow} />
            Edit
          </p>
          <form className={classes.addForm} noValidate autoComplete='off'>
            <Grid container>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-basic'
                  label='Title'
                  className={classes.addTextField}
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
                  label='Chart label'
                  className={classes.addTextField}
                  name='name'
                  autoComplete='url'
                  type='text'
                />
              </Grid>

              <Grid item xs={12} className={classes.saveBtnGrid}>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.saveBtn}
                >
                  save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
