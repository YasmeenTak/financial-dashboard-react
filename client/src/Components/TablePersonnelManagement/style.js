import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperMain: {
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    width: '100%',
  },
  table: {
    minWidth: 650,
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
  mainEditBtn: {
    borderRadius: '20%',
    '&:hover': {
      background: '#e0e0e0',
    },
  },
  editBtn: {
    fontSize: '20px',
  },
  switchBtn: {
    marginTop: '4px',
    // color: '#43e695',
    // '& .MuiSwitch-colorSecondary': {
    //   '& .Mui-checked': {
    //     color: '#43e695',
    //     border: '1px solid black',
    //   },
    // },

    '& .MuiSwitch-thumb': { color: '#43e695' },
    '& .MuiSwitch-colorSecondary': {
      '& .Mui-checked + & .MuiSwitch-track': {
        backgroundColor: '#43e695',
      },
    },
  },
  lockBtn: {
    marginTop: '7.8px',
    fontSize: '15px',
  },
  chipAddPersonal: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 'auto',
    border: '1px solid #E9E9F0',
    borderRadius: '10px',
    width: '350px',
  },
  chip: {
    margin: theme.spacing(0.5),
    height: '24px',
    fontSize: '11px',
    '& .MuiChip-deleteIcon': { width: '15px', color: '#ef9a9a' },
  },
}));

export { useStyles };
