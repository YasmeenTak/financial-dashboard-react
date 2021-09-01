import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TablePersonnelManagement from '../TablePersonnelManagement/TablePersonnelManagement';
import { useStyles } from './style';

export default function PersonnelManagement() {
  const classes = useStyles();

  return (
    <div className={classes.personnelManagement}>
      <AddBtnTop />
      <TablePersonnelManagement />
    </div>
  );
}
