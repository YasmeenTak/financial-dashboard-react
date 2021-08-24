// import faker from 'faker';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Avatar,
//     Grid,
//     Typography,
//     TablePagination,
//     TableFooter
//  } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     table: {
//       minWidth: 650,
//     },
//     tableContainer: {
//         borderRadius: 15,
//         margin: '10px 10px',
//         maxWidth: 950
//     },
//     tableHeaderCell: {
//         fontWeight: 'bold',
//         backgroundColor: theme.palette.primary.dark,
//         color: theme.palette.getContrastText(theme.palette.primary.dark)
//     },
//     avatar: {
//         backgroundColor: theme.palette.primary.light,
//         color: theme.palette.getContrastText(theme.palette.primary.light)
//     },
//     name: {
//         fontWeight: 'bold',
//         color: theme.palette.secondary.dark
//     },
//     status: {
//         fontWeight: 'bold',
//         fontSize: '0.75rem',
//         color: 'white',
//         backgroundColor: 'grey',
//         borderRadius: 8,
//         padding: '3px 10px',
//         display: 'inline-block'
//     }
//   }));

// let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
// for(let i=0;i<14;i++) {
//     USERS[i] = {
//         name: faker.name.findName(),
//         email: faker.internet.email(),
//         phone: faker.phone.phoneNumber(),
//         jobTitle: faker.name.jobTitle(),
//         company: faker.company.companyName(),
//         joinDate: faker.date.past().toLocaleDateString('en-US'),
//         status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
//     }
// }

// function MTable() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper} className={classes.tableContainer}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
//             <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
//             <TableCell className={classes.tableHeaderCell}>Joining Date</TableCell>
//             <TableCell className={classes.tableHeaderCell}>Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//             <TableRow key={row.name}>
//               <TableCell>
//                   <Grid container>
//                       <Grid item lg={2}>
//                           <Avatar alt={row.name} src='.' className={classes.avatar}/>
//                       </Grid>
//                       <Grid item lg={10}>
//                           <Typography className={classes.name}>{row.name}</Typography>
//                           <Typography color="textSecondary" variant="body2">{row.email}</Typography>
//                           <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
//                       </Grid>
//                   </Grid>
//                 </TableCell>
//               <TableCell>
//                   <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
//                   <Typography color="textSecondary" variant="body2">{row.company}</Typography>
//                 </TableCell>
//               <TableCell>{row.joinDate}</TableCell>
//               <TableCell>
//                   <Typography
//                     className={classes.status}
//                     style={{
//                         backgroundColor:
//                         ((row.status === 'Active' && 'green') ||
//                         (row.status === 'Pending' && 'blue') ||
//                         (row.status === 'Blocked' && 'orange'))
//                     }}
//                   >{row.status}</Typography>
//                 </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//         <TablePagination
//             rowsPerPageOptions={[5, 10, 15]}
//             component="div"
//             count={USERS.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={handleChangePage}
//             onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }

// export default MTable;
// ---------------------------------------------------------------------------------

import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { AutoSizer, Column, Table } from 'react-virtualized';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
  },
}));

const styles = (theme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component='div'
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant='body'
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component='div'
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant='head'
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } =
      this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
  ['John Smith', 'CP', 6.0, 24, 4.0, 3],
  ['Ice cream sandwich', 'CP', 9.0, 37, 4.3],
  ['Eclair', 'SA', 16.0, 24, 6.0],
  ['Cupcake', 'SA', 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(
  id,
  dessert,
  calories,
  fat,
  carbs,
  protein,
  fats,
  carbss,
  proteins
) {
  return { id, dessert, calories, fat, carbs, protein, fats, carbss, proteins };
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

export default function ReactVirtualizedTable() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <p className='notfiTitle'> Notifications Management</p>
        <Paper style={{ height: 400, width: '100%' }}>
          <VirtualizedTable
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            columns={[
              {
                width: 200,
                label: 'Dessert',
                dataKey: 'dessert',
              },
              {
                width: 120,
                label: 'Calories\u00A0(g)',
                dataKey: 'calories',
                numeric: true,
              },
              {
                width: 120,
                label: 'Fat\u00A0(g)',
                dataKey: 'fat',
                numeric: true,
              },
              {
                width: 120,
                label: 'Carbs\u00A0(g)',
                dataKey: 'carbs',
                numeric: true,
              },
              {
                width: 120,
                label: 'Protein\u00A0(g)',
                dataKey: 'protein',
                numeric: true,
              },
              {
                width: 120,
                label: 'Fat\u00A0(g)',
                dataKey: 'fats',
                numeric: true,
              },
              {
                width: 120,
                label: 'Carbs\u00A0(g)',
                dataKey: 'carbss',
                numeric: true,
              },
              {
                width: 120,
                label: 'Protein\u00A0(g)',
                dataKey: 'proteins',
                numeric: true,
                renderCell: (params) => {
                  return <div>Hii</div>;
                },
              },
            ]}
          />
        </Paper>
      </Paper>
    </Grid>
  );
}
