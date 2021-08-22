import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2.6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 15,
  },
  image: {
    marginRight: 400,
  },
  borderAdd: {
    border: '2px dashed #FD5353',
    borderRadius: 15,
    padding: theme.spacing(5.4),
  },
  addBtn: {
    fontSize: 60,
    color: '#ED1B24',
    textAlign: 'center',
  },
  addText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  paperRight: { padding: 25 },
}));

export { useStyles };
