import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TableGroups from '../TableGroups/TableGroups';
import { useStyles } from './style';

export default function Groups() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddBtnTop />
      <TableGroups />
    </div>
  );
}
