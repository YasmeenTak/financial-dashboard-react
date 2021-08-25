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
    ' & .MuiTableHead-root': {
      '& .MuiTableCell-root': {
        backgroundColor: '#F5F6FA',
        color: '#A3A6B4',
        padding: 15,
      },
    },
  },

  uploadIcon: {
    color: '#a3a6b4',
    fontSize: '15px',
    marginLeft: 5,
    marginBottom: -4,
  },
  redAlertBtn: {
    color: 'white',
    backgroundColor: '#FD5353',
    borderRadius: 20,
    fontSize: '11px',
    width: '100px',
    padding: 8,
    textTransform: 'none',
  },
  switchBtn: {
    // color: '#43e695',
  },
}));

export { useStyles };
