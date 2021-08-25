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
import ResponsiblePersonCol from '../ResponsiblePersonCol/ResponsiblePersonCol';
import BackupIcon from '@material-ui/icons/Backup';
import { Button } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Switch from '@material-ui/core/Switch';

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
  createData('Yasmeen', 'CP', 6.0, 522524789, 'yasmeen@gmail.com'),
  createData('Adam', 'SA', 9.0, 597711518, 'yasmeen@gmail.com'),
  createData('Ahmed', 'SA', 16.0, 522524789, 'yasmeen@gmail.com'),
  createData('John', 'CP', 3.7, 597711518, 'yasmeen@gmail.com'),
  createData('Susan', 'SA', 16.0, 522524789, 'yasmeen@gmail.com'),
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
                    <TableCell align='center'>
                      <ResponsiblePersonCol />
                    </TableCell>
                    <TableCell align='center'>{row.phone}</TableCell>
                    <TableCell align='center'>{row.email}</TableCell>
                    <TableCell align='center'>
                      <a href='#' style={{ color: '#7686F0' }}>
                        Schedule
                      </a>
                      <BackupIcon
                        className={classes.uploadIcon}
                        fontSize='small'
                      />
                    </TableCell>
                    <TableCell align='center'>
                      <a href='#' style={{ color: '#7686F0' }}>
                        Schedule
                      </a>
                      <BackupIcon
                        className={classes.uploadIcon}
                        fontSize='small'
                      />
                    </TableCell>
                    <TableCell align='center'>
                      <Button className={classes.redAlertBtn}>
                        Send Red Alert
                      </Button>
                    </TableCell>
                    <TableCell align='center'>
                      <div style={{ display: 'flex' }} spacing={0}>
                        <Button>
                          <EditOutlinedIcon fontSize='small' />
                        </Button>
                        <Switch
                          //   checked={state.checkedB}
                          //   onChange={handleChange}
                          className={classes.switchBtn}
                          color='primary'
                          name='checkedB'
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <LockOutlinedIcon
                          fontSize='small'
                          style={{ marginTop: 10 }}
                        />
                      </div>
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
