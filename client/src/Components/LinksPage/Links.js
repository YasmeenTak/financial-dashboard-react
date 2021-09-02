import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TableLinks from '../TableLinks/TableLinks';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

export default function Admins() {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    let path = `addLink`;
    history.push(path);
  };
  return (
    <div className={classes.root}>
      <AddBtnTop handelClick={routeChange} />
      <TableLinks />
    </div>
  );
}
