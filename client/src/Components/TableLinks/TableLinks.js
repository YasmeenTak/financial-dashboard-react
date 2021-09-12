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

function createData(title, url, action) {
  return { title, url, action };
}

const rows = [
  createData('Test admin account', 'https://github.com/YasmeenTak'),
  createData('AdamSnow', 'https://github.com/YasmeenTak'),
  createData('Andrea Orr', 'https://github.com/YasmeenTak'),
  createData('Testabeer', 'https://github.com/YasmeenTak'),
  createData('Andrea Orr', 'https://github.com/YasmeenTak'),
  createData('Testabeer', 'https://github.com/YasmeenTak'),
];

export default function BasicTable(props) {
  const classes = useStyles();
  console.log(props.newLinks,'here in table');

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paperMain}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow style={{ backgroundColor: '#F5F6FA' }}>
                  <TableCell align='center'>TITLE</TableCell>
                  <TableCell align='center'>URL</TableCell>
                  <TableCell align='center'> ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody spacing={5}>
                {rows.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell component='th' scope='row' align='center'>
                      {row.title}
                    </TableCell>
                    <TableCell component='th' scope='row' align='center'>
                      {row.url}
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
