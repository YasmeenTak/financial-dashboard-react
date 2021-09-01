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
import Switch from '@material-ui/core/Switch';
import { BiEditAlt } from 'react-icons/bi';

function createData(admin, email, action) {
  return { admin, email, action };
}

const rows = [
  createData('Test admin account', 'yasmeen@gmail.com'),
  createData('AdamSnow', 'yasmeen@gmail.com'),
  createData('Andrea Orr', 'yasmeen@gmail.com'),
  createData('Testabeer', 'yasmeen@gmail.com'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paperMain}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow style={{ backgroundColor: '#F5F6FA' }}>
                  <TableCell align='center'>ADMIN</TableCell>
                  <TableCell align='center'>EMAIL</TableCell>
                  <TableCell align='center'> ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody spacing={5}>
                {rows.map((row) => (
                  <TableRow key={row.admin}>
                    <TableCell component='th' scope='row' align='center'>
                      {row.admin}
                    </TableCell>
                    <TableCell component='th' scope='row' align='center'>
                      {row.email}
                    </TableCell>
                    <TableCell align='center'>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-evenly',
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
