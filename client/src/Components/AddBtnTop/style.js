import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addBtnTop: {
    margin: 30,
  },
  paper: {
    padding: theme.spacing(2.6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 15,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  image: {
    marginRight: 10,
  },
  title: {
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },
  subTitle: { textAlign: 'left', color: '#B3B3B3' },
  borderAdd: {
    border: '2px dashed #FD5353',
    borderRadius: 15,
    padding: theme.spacing(5),
  },
  addBtn: {
    fontSize: 60,
    color: '#ED1B24',
    textAlign: 'center',
  },
  addBtnMain: { borderRadius: '50%' },
  addText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  paperRight: { padding: 21, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' },
}));

export { useStyles };
