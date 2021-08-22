import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2.6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 15,
  },
  image: {
    marginRight: 400,
  },
  borderAdd: {
    border: '2px dashed #FD5353',
    borderRadius: 15,
    padding: theme.spacing(4),
  },
  addBtn: {
    fontSize: 80,
    color: '#ED1B24',
    textAlign: 'center',
  },
  addText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  paperRight: { padding: 25 },
}));

export default function AddBtnTop() {
  const classes = useStyles();

  return (
    <div className={classes.personnelManagement}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <img src='/assets/img/Capture.PNG' className={classes.image} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={clsx(classes.paper, classes.paperRight)}>
            <div className={classes.borderAdd}>
              <div>
                <AddCircleRoundedIcon className={classes.addBtn} />
              </div>
              <Typography
                variant='subtitle2'
                gutterBottom
                className={classes.addText}
              >
                Add New
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
