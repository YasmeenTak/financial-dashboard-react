import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import { useStyles } from './style';
import  DebaterTable  from '../DebtorsTable/DebtorsTable';
export default function DebtorManagement() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddBtnTop />
      <DebaterTable />
    </div>
  );
}
