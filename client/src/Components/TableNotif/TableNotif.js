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
  type,
  dateReceived,
  notificationType,
  message,
  responsiblePerson,
  resolved
) {
  return {
    debtorName,
    type,
    dateReceived,
    notificationType,
    message,
    responsiblePerson,
    resolved,
  };
}

const rows = [
  createData('Yasmee', 'CP', 6.0, 24, 4.0),
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
          <p className={classes.tableNotifiTitle}> Notifications Management</p>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow style={{ backgroundColor: '#F5F6FA' }}>
                  <TableCell>DEBTOR NAME</TableCell>
                  <TableCell align='center'>TYPE </TableCell>
                  <TableCell align='center'>DATE RECEIVED</TableCell>
                  <TableCell align='center'>NOTIFICATION-TYPE</TableCell>
                  <TableCell align='center'>MESSAGE </TableCell>
                  <TableCell align='center'>RESPONSIBLE PERSON </TableCell>
                  <TableCell align='center'>RESOLVED </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.debtorName}>
                    <TableCell component='th' scope='row'>
                      {row.debtorName}
                    </TableCell>
                    <TableCell align='center'>{row.type}</TableCell>
                    <TableCell align='center'>{row.dateReceived}</TableCell>
                    <TableCell align='center'>{row.notificationType}</TableCell>
                    <TableCell align='center'>{row.message}</TableCell>
                    <TableCell align='center'>
                      {row.responsiblePerson}
                    </TableCell>
                    <TableCell align='center'>{row.resolved}</TableCell>
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
