import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
    backgroundColor: '#f5f9ff',
  },
  paperMain: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    width: '100%',
  },
  tableNotifiTitle: {
    textAlign: 'left',
    marginBottom: '30px',
    marginTop: '-5px',
    fontWeight: 'bold',
    color: '#2c3758',
  },
  table: {
    minWidth: 650,
    padding: 0,

    '& .MuiTableCell-sizeSmall': {
      padding: 8,
    },
    ' & .MuiTableHead-root': {
      '& .MuiTableCell-root': {
        backgroundColor: '#F5F6FA',
        color: '#A3A6B4',
        padding: 15,
      },
    },
  },

  tableContainer: {
    marginBottom: 15,
  },
  assginBtn: {
    fontSize: 'smaller',
    color: 'white',
    backgroundColor: '#2C3758',
    borderRadius: 20,
    display: 'inline-block',
    marginLeft: 5,
    textTransform: 'none',
  },
  resolvedBtn: {
    fontSize: 'smaller',
    color: '#1BB4C5',
    backgroundColor: '#C6ECF0',
    borderRadius: 20,
    fontWeight: 'bold',
    padding: '8px',
    textTransform: 'none',
  },
}));

export { useStyles };
