import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import { useStyles } from './style';
import TableInstruction from '../TableInstruction/TableInstruction';

export default function Instruction() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddBtnTop />
      <TableInstruction />
    </div>
  );
}
