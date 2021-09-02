import React from 'react';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TableGroups from '../TableGroups/TableGroups';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

export default function Groups() {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    let path = `addGroup`;
    history.push(path);
  };
  return (
    <div className={classes.root}>
      <AddBtnTop handelClick={routeChange} />
      <TableGroups />
    </div>
  );
}
