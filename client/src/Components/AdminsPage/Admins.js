import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TableAdmins from '../TableAdmins/TableAdmins';
import { useStyles } from './style';

export default function Admins() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <AddBtnTop />
      <TableAdmins />
    </div>
  );
}
