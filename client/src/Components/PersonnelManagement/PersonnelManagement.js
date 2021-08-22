import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
// import sideImg from '/assets/img/Capture.PNG';
const useStyles = makeStyles((theme) => ({
  personnelManagement: {
    flex: 4,
    padding: theme.spacing(3),
    backgroundColor: '#f5f9ff',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 15,
  },
}));

export default function PersonnelManagement() {
  const classes = useStyles();

  return (
    <div className={classes.personnelManagement}>
      <AddBtnTop />
    </div>
  );
}
