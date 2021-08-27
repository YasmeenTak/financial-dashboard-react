import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperMain: {
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    width: '100%',
  },
  tableNotifiTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#2c3758',
    paddingLeft: '15px',
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
    marginTop: 3,
  },

  mainEditBtn: {
    borderRadius: '20%',
    '&:hover': {
      background: '#e0e0e0',
    },
  },
  editBtn: {
    fontSize: '20px',
    color: '#1D9BF0',
  },

  lockBtn: {
    marginTop: '7.8px',
    fontSize: '15px',
  },
}));

export { useStyles };
