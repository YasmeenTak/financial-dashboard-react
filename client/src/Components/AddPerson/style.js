import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    backgroundColor: '#f5f9ff',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
  },
  backArrow: {
    fontSize: 'small',
    marginRight: '10px',
    marginBottom: '-2px',
  },

  addTitle: {
    textAlign: 'left',
    marginBottom: '20px',
    marginTop: '-5px',
    fontWeight: 'bold',
    color: '#2c3758',
  },

  addForm: {
    paddingLeft: '100px',
    paddingTop: '20px',
    paddingBottom: '50px',
  },
  addTextField: {
    width: '350px',
    '& .MuiInputBase-input': {
      fontSize: 13,
    },
    '& .MuiInputLabel-formControl': {
      fontSize: 13,
    },
  },
  chipAddPersonal: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    border: '1px solid #E9E9F0',
    borderRadius: '10px',
    width: '350px',
  },

  AddPersonalBtn: {
    color: 'white',
    backgroundColor: '#FD5353',
    borderRadius: '12px',
    width: '20%',
    float: 'right',
    // marginRight: '75px',
    // marginTop: '20px',
    margin: '30px 100px 50px 0',
  },
}));

export { useStyles };
