import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TableAdmins from '../TableAdmins/TableAdmins';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

export default function Admins() {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    let path = `addAdmin`;
    history.push(path);
  };
  return (
    <div className={classes.root}>
      <AddBtnTop handelClick={routeChange} />
      <TableAdmins />
    </div>
  );
}
