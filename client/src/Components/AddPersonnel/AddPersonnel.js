import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '30px',
    width: '85%',
    borderRadius: '15px',
  },
  backArrow: {
    fontSize: 'small',
    marginRight: '10px',
    marginBottom: '-2px',
  },
  AddDebaterBtn: {
    color: 'white',
    backgroundColor: '#FD5353',
    borderRadius: '12px',
    width: '20%',
    float: 'right',
  },
  chipAddPersonal: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    border: '1px solid #E9E9F0',
    borderRadius: '10px',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
export default function AddPersonnel() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'administration' },
    { key: 1, label: 'Banking' },
    { key: 2, label: 'Claims' },
    { key: 3, label: 'Claims' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <p className='addTitle'>
            <ArrowBackIcon className={classes.backArrow} />
            Add
          </p>
          <form className={classes.addForm} noValidate autoComplete='off'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='standard-basic'
                  label='Name'
                  className={classes.addTextField}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='email'
                  label='Email'
                  className={classes.addTextField}
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='filled-password-input'
                  label='Password'
                  type='password'
                  autoComplete='current-password'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div component='ul' className={classes.chipAddPersonal}>
                  {chipData.map((data) => {
                    let icon;

                    if (data.label === 'React') {
                      icon = <TagFacesIcon />;
                    }

                    return (
                      <li key={data.key}>
                        <Chip
                          icon={icon}
                          label={data.label}
                          onDelete={
                            data.label === 'React'
                              ? undefined
                              : handleDelete(data)
                          }
                          className={classes.chip}
                        />
                      </li>
                    );
                  })}
                </div>
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
