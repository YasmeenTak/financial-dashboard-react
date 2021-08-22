import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useStyles } from './style';

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
