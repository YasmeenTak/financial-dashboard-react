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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Switch from '@material-ui/core/Switch';
import { BiEditAlt } from 'react-icons/bi';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import SwitchTable from '../switchTable/switchTable';
function createData(personnel, email, groups, action) {
  return { personnel, email, groups, action };
}

const rows = [
  createData('Yasmeen', 'yasmeen@gmail.com'),
  createData('Adam', 'yasmeen@gmail.com'),
  createData('Ahmed', 'yasmeen@gmail.com'),
  createData('John', 'yasmeen@gmail.com'),
  createData('Susan', 'yasmeen@gmail.com'),
];

export default function TablePersonnelManagement() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'administration' },
    { key: 1, label: 'Banking' },
    { key: 2, label: 'Claims' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paperMain}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              className={classes.table}
              size='small'
              aria-label='a dense table'
            >
              <TableHead>
                <TableRow>
                  <TableCell align='center'>PERSONNEL</TableCell>
                  <TableCell align='center'>EMAIL </TableCell>
                  <TableCell align='center'>GROUPS</TableCell>
                  <TableCell align='center'>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.personnel}>
                    <TableCell component='th' scope='row' align='center'>
                      {row.personnel}
                    </TableCell>
                    <TableCell align='center'>{row.email}</TableCell>
                    <TableCell align='center'>
                      <div component='ul' className={classes.chipAddPersonal}>
                        {chipData.map((data) => {
                          let icon;

                          if (data.label === 'React') {
                            icon = <TagFacesIcon />;
                          }

                          return (
                            <li key={data.key}>
                              <Chip
                                icon={icon}
                                label={data.label}
                                onDelete={
                                  data.label === 'React'
                                    ? undefined
                                    : handleDelete(data)
                                }
                                className={classes.chip}
                              />
                            </li>
                          );
                        })}
                      </div>
                    </TableCell>

                    <TableCell align='center'>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Button
                          style={{ minWidth: 20 }}
                          className={classes.mainEditBtn}
                        >
                          <BiEditAlt className={classes.editBtn} />
                        </Button>

                        {/* <Switch
                          className={classes.switchBtn}
                          //   checked={state.checkedB}
                          //   onChange={handleChange}
                          // name='checkedA'
                          size='small'
                        /> */}
                        <SwitchTable />

                        <LockOutlinedIcon
                          className={classes.lockBtn}
                          fontSize='small'
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
