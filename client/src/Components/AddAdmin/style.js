import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
    backgroundColor: '#f5f9ff',
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    width: '100%',
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
    // width: '350px',
    width: '25vw',
    '& .MuiInputBase-input': {
      fontSize: 13,
    },
    '& .MuiInputLabel-formControl': {
      fontSize: 13,
    },
  },
  AddBtn: {
    color: 'white',
    backgroundColor: '#FD5353',
    borderRadius: '12px',
    width: '20%',
    float: 'right',
    margin: '50px 100px 50px 0',
  },
}));

export { useStyles };
