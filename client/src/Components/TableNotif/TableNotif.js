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
import { Button } from '@material-ui/core';
import ResponsiblePersonCol from '../ResponsiblePersonCol/ResponsiblePersonCol';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';

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
  createData('Yasmeen', 'CP', 6.0, 24, 4.0),
  createData('Adam', 'SA', 9.0, 37, 4.3),
  createData('Ahmed', 'SA', 16.0, 24, 6.0),
  createData('John', 'CP', 3.7, 67, 4.3),
  createData('Susan', 'SA', 16.0, 49, 3.9),
  createData('Yasmeen', 'CP', 6.0, 24, 4.0),
  createData('Adam', 'SA', 9.0, 37, 4.3),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paperMain}>
          <p className={classes.tableNotifiTitle}> Notifications Management</p>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              className={classes.table}
              size='small'
              aria-label='a dense table'
            >
              <TableHead>
                <TableRow>
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
                    <TableCell component='th' scope='row' align='center'>
                      {row.debtorName}
                    </TableCell>
                    <TableCell align='center'>{row.type}</TableCell>
                    <TableCell align='center'>
                      <div>
                        <p>Aug 10, 2021 9:13:58 PM </p>
                      </div>
                    </TableCell>
                    <TableCell align='center'>
                      <Link
                        component='button'
                        variant='body2'
                        onClick={() => {
                          console.info("I'm a button.");
                        }}
                        style={{ color: 'black', textDecoration: 'underline' }}
                      >
                        Make a Payment
                      </Link>
                    </TableCell>
                    <TableCell align='center'>
                      <Link
                        component='button'
                        variant='body2'
                        onClick={() => {
                          console.info("I'm a button.");
                        }}
                      >
                        View
                      </Link>
                    </TableCell>
                    <TableCell align='justify'>
                      <div style={{ display: 'flex' }}>
                        <ResponsiblePersonCol
                          className={classes.selectResponsible}
                        />
                        <Button className={classes.assginBtn}>Assign</Button>
                      </div>
                    </TableCell>
                    <TableCell align='center'>
                      <Button className={classes.resolvedBtn}>Resolved</Button>
                    </TableCell>
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
