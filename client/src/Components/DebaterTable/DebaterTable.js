import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
function createData(
  debtorName,
  estateNumber,
  type,
  phone,
  email,
  paymentSchedule,
  preAuthSchedule,
  redAlert,
  action
) {
  return {
    debtorName,
    estateNumber,
    type,
    phone,
    email,
    paymentSchedule,
    preAuthSchedule,
    redAlert,
    action,
  };
}

const rows = [
  createData('Yasmeen', 'CP', 6.0, 24, 4.0),
  createData('Adam', 'SA', 9.0, 37, 4.3),
  createData('Ahmed', 'SA', 16.0, 24, 6.0),
  createData('John', 'CP', 3.7, 67, 4.3),
  createData('Susan', 'SA', 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paperMain}>
          <p className={classes.tableNotifiTitle}> Debaters</p>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow style={{ backgroundColor: '#F5F6FA' }}>
                  <TableCell align='center'>DEBTOR NAME</TableCell>
                  <TableCell align='center'>ESTATE NUMBER</TableCell>
                  <TableCell align='center'>TYPE </TableCell>
                  <TableCell align='center'>PHONE</TableCell>
                  <TableCell align='center'> EMAIL</TableCell>
                  <TableCell align='center'> PAYMENT SCHEDULE </TableCell>
                  <TableCell align='center'> PRE-AUTH SCHEDULE </TableCell>
                  <TableCell align='center'>REDALERT </TableCell>
                  <TableCell align='center'> ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.debtorName}>
                    <TableCell component='th' scope='row' align='center'>
                      {row.debtorName}
                    </TableCell>
                    <TableCell align='center'>{row.estateNumber}</TableCell>
                    <TableCell align='center'>{row.type}</TableCell>
                    <TableCell align='center'>{row.phone}</TableCell>
                    <TableCell align='center'>{row.email}</TableCell>
                    <TableCell align='center'>{row.paymentSchedule}</TableCell>
                    <TableCell align='center'>{row.preAuthSchedule}</TableCell>
                    <TableCell align='center'>{row.redAlert}</TableCell>
                    <TableCell align='center'>{row.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </div>
  );
}
