import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperUser: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  avatar: {
    marginRight: 0,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 11.5,
  },
  titleName: {
    fontSize: 11,
  },
  date: {
    float: 'right',
    fontSize: 11,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            className={classes.avatar}
          />
        </Grid>
        <Grid item xs={6} style={{ marginLeft: '-20px', padding: '2px' }}>
          <Typography
            variant='caption'
            display='block'
            gutterBottom
            className={classes.name}
          >
            Billy Roy
          </Typography>
          <Typography
            variant='caption'
            display='block'
            gutterBottom
            className={classes.titleName}
          >
            Request a document
          </Typography>
        </Grid>
        <Grid item xs>
          <p className={classes.date}>Aug 8</p>
        </Grid>
      </Grid>
    </div>
  );
}
