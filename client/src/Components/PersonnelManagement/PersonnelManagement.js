import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
import TablePersonnelManagement from '../TablePersonnelManagement/TablePersonnelManagement';
import { useStyles } from './style';

function createData(personnel, email, groups, action) {
  return { personnel, email, groups, action };
}
const columns = [
  {
    filed: 'personnel',
    headerName: 'PERSONNEL',
    width: 70,
  },
  {
    filed: 'email',
    headerName: 'EMAIL',
    width: 70,
  },
  {
    filed: 'groups',
    headerName: 'GROUPS',
    width: 70,
  },
  {
    filed: 'actiodddn',
    headerName: 'ACTION',
    width: 70,
  },
];

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

  { personnel: 'Adam', email: 'adam@gmail.com', groups: 'Jon', action: 35 },
  { personnel: 'yas', email: 'yasmen@g.com', groups: 'Jon', action: 35 },
  { personnel: 'Sally', email: 'sally@gmail.com', groups: 'Jon', action: 35 },
  { personnel: 'Jeff', email: 'jeff@gmail.com', groups: 'Jon', action: 35 },
  { personnel: 'Moataz', email: 'moataz@gmail.com', groups: 'Jon', action: 35 },
];

export default function PersonnelManagement() {
  const classes = useStyles();

  return (
    <div className={classes.personnelManagement}>
      <AddBtnTop />
      <TablePersonnelManagement />
    </div>
  );
}
