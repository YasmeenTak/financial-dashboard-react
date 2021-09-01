import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  AddDebaterBtn: {
    color: 'white',
    backgroundColor: '#FD5353',
    borderRadius: '12px',
    width: '20%',
    float: 'right',
    marginRight: '75px',
    marginTop: '20px',
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

  selectInputAdd: {
    marginTop: '16px',
  },
  notfiTitle: {
    textAlign: 'left',
    marginBottom: 20,
    marginTop: -5,
    fontWeight: 'bold',
    color: '#2c3758',
  },
}));

export { useStyles };
