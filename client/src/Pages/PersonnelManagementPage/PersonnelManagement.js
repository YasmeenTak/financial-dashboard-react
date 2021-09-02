import React from 'react';
import AddBtnTop from '../../Components/AddBtnTop/AddBtnTop';
import TablePersonnelManagement from '../../Components/TablePersonnelManagement/TablePersonnelManagement';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

export default function PersonnelManagement() {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    let path = `addPerson`;
    history.push(path);
  };
  return (
    <div className={classes.personnelManagement}>
      <AddBtnTop handelClick={routeChange} />
      <TablePersonnelManagement />
    </div>
  );
}
