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

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
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
              <TableCell>ACTIONS</TableCell>
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
