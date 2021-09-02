import React from 'react';
import AddBtnTop from '../../Components/AddBtnTop/AddBtnTop';
import { useStyles } from './style';
import TableInstruction from '../../Components/TableInstruction/TableInstruction';
import { useHistory } from 'react-router-dom';

export default function Instruction() {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    let path = `addInstruction`;
    history.push(path);
  };
  return (
    <div className={classes.root}>
      <AddBtnTop handelClick={routeChange} />
      <TableInstruction />
    </div>
  );
}
