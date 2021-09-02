import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { useStyles } from './style';
import TextField from '@material-ui/core/TextField';

export default function AddPersonnel() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'administration' },
    { key: 1, label: 'Banking' },
    { key: 2, label: 'Claims' },
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
