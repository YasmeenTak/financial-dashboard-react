import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddBtnTop from '../AddBtnTop/AddBtnTop';
// import sideImg from '/assets/img/Capture.PNG';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
  }, {
    filed: 'groups',
    headerName: 'GROUPS',
    width: 70,
  }, {
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

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='a dense table'>
          <TableHead>
            <TableRow style={{ backgroundColor: '#F5F6FA' }}>
              <TableCell>PERSONNEL</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>GROUPS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.personnel}>
                <TableCell>{row.personnel}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.groups}</TableCell>
                <TableCell>{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
