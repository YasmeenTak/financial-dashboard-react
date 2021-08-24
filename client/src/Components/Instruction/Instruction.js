import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import { useStyles } from './style';

export default function Instruction() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddBtnTop />
    </div>
  );
}
