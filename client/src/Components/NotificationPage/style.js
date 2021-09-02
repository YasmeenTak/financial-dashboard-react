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
    marginBottom: 50,
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
  editBtn: {
    fontSize: '15px',
    color: '#1D9BF0',
  },

  switchBtn: {
    marginTop: '4px',

    '& .MuiSwitch-thumb': { backgroundColor: '#43e695' },

    '&.Mui-checked': {
      color: '#95cc97',
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#43E695',
    },
  },
}));

export { useStyles };
