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
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { BiEditAlt } from 'react-icons/bi';

function createData(name, action) {
  return { name, action };
}

const rows = [
  createData('Banking'),
  createData('Administration'),
  createData('Reporting'),
  createData('Claims'),
  createData('Debtor Queries'),
  createData('Banking'),
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
                  <TableCell align='center'>NAME</TableCell>
                  <TableCell align='center'> ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody spacing={5}>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row' align='center'>
                      {row.name}
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

                        <Button className={classes.mainDeleteBtn}>
                          <DeleteOutlineOutlinedIcon
                            className={classes.deleteBtn}
                            fontSize='small'
                          />
                        </Button>
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
