import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
    backgroundColor: '#f5f9ff',
  },
  paperMain: {
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    width: '100%',
  },
  tableNotifiTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#2c3758',
    padding: theme.spacing(1),
  },
  table: {
    minWidth: 650,
    margin: 0,

    '& .MuiTableCell-sizeSmall': {
      padding: 8,
    },
    // ' & .MuiTableHead-root': {
    //   padding: 100,
    //   color: 'red',
    // },

    // '& .MuiTableCell-root': {
    //   '& .MuiTableCell-body': {
    //     color: 'red',
    //   },
    // },
  },

  tableContainer: {},
}));

export { useStyles };
