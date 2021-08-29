import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TableLinks from '../TableLinks/TableLinks';
import { useStyles } from './style';

export default function Admins() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddBtnTop />
      <TableLinks />
    </div>
  );
}
