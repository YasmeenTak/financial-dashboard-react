import React from 'react';
//import { useStyles } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles((theme) => ({
  notfiTable: {
    flex: 4,
    width: '100%',
    backgroundColor: '#f5f9ff',
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    width: '90%',
  },
  table: {
    minWidth: 650,
  },
  notfiTitle: {
    color: 'black',
    marginBottom: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Notification() {
  const classes = useStyles();

  return (
    <div className={classes.notfiTable}>
      <Grid container>
        <Paper className={classes.paper}>
          <Typography variant='h6' gutterBottom className={classes.notfiTitle}>
            Notification
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow style={{ backgroundColor: '#F5F6FA' }}>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align='right'>Calories</TableCell>
                  <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                  <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                  <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.calories}</TableCell>
                    <TableCell align='right'>{row.fat}</TableCell>
                    <TableCell align='right'>{row.carbs}</TableCell>
                    <TableCell align='right'>{row.protein}</TableCell>
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
