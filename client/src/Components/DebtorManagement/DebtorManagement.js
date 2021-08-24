import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import { useStyles } from './style';

export default function DebtorManagement() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddBtnTop />
    </div>
  );
}
