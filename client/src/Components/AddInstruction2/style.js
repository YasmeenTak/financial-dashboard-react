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
  rootForm: {
    '& > *': {
      margin: theme.spacing(2),
      paddingLeft: '100px',
    },
    '& .MuiInputBase-input': {},
  },
  addTextField: {
    width: '400px',
  },
  contentTextFiled: {
    [`& fieldset`]: {
      height: 170,

      borderRadius: 15,
      borderColor: '#e9e9f0',
    },
  },
  uploadImg: {
    marginTop: '130px',
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
}));

export { useStyles };
