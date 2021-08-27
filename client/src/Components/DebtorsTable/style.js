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
  switchDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  checkbox: {
    position: 'relative',
    cursor: 'pointer',
    appearance: 'none',
    width: '80px',
    height: '40px',
    borderRadius: '20px',
    border: '2px solid #ccc',
    outline: 'none',
    transition: '0.3s',
    '&::before': {
      content: '',
      position: 'absolute',
      height: '30px',
      width: '30px',
      borderRadius: '50%',
      background: '#ccc',
      top: '3px',
      left: '4px',
      transition: '0.3s ease-in-out',
    },
  },

  // .checkbox:checked::before{
  //   transform:translateX(37px),
  //   background:#3399ff,
  // }
  // .checkbox:checked{
  //   border-color:#3399ff,
  // }
}));

export { useStyles };
