import React from 'react';
import AddBtnTop from '../../Components/AddBtnTop/AddBtnTop';
import { useStyles } from './style';
import DebaterTable from '../../Components/DebtorsTable/DebtorsTable';
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
