import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import { useStyles } from './style';
import DebaterTable from '../DebtorsTable/DebtorsTable';
import { useHistory } from 'react-router-dom';

export default function DebtorManagement() {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    let path = `AddDebtor`;
    history.push(path);
  };
  return (
    <div className={classes.root}>
      <AddBtnTop handelClick={routeChange} />
      <DebaterTable />
    </div>
  );
}
