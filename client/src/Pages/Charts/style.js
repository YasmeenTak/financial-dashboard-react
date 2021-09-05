import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
    backgroundColor: '#f5f9ff',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '15px',
    boxShadow: 'rgba(0, 0, 0, 0.30) 0px 5px 10px',
  },
  charts: {
    margin: '30px',
  },
  titleChart: {
    textAlign: 'left',
    color: '#A1A0AE',
    fontSize: 14,
  },
}));

export { useStyles };
