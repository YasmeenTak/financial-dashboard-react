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
import Switch from '@material-ui/core/Switch';
import { BiEditAlt } from 'react-icons/bi';

function createData(ticketTitle, chartLabel, groups, action) {
  return { ticketTitle, chartLabel, groups, action };
}

const rows = [
  createData('I have moved or changed my phone', 'Debtor Update'),
  createData('A creditor is calling me', 'Creditor Update'),
  createData('I need to book a counselling session', 'Book Appt'),
  createData('Stop pyment', 'Stop pyment'),
  createData('Doc Requested', 'Doc Requested'),
  createData('Make Payment', 'Make Payment'),
  createData('I need to talk to someone', 'Other'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paperMain}>
          <p className={classes.tableNotifiTitle}> Notifications</p>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              className={classes.table}
              size='small'
              aria-label='a dense table'
            >
              <TableHead>
                <TableRow>
                  <TableCell align='center'>TICKET TITLE</TableCell>
                  <TableCell align='center'>CHART LABEL </TableCell>
                  <TableCell align='center'>GROUPS</TableCell>
                  <TableCell align='center'>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.ticketTitle}>
                    <TableCell component='th' scope='row' align='center'>
                      {row.ticketTitle}
                    </TableCell>
                    <TableCell align='center'>{row.chartLabel}</TableCell>

                    <TableCell align='center'>
                      <ResponsiblePersonCol
                        className={classes.selectResponsible}
                      />
                    </TableCell>
                    <TableCell align='center'>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button className={classes.mainEditBtn}>
                          <BiEditAlt className={classes.editBtn} />
                        </Button>

                        <Switch
                          className={classes.switchBtn}
                          //   checked={state.checkedB}
                          //   onChange={handleChange}
                          // name='checkedA'
                          size='small'
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
