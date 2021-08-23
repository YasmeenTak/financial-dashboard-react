import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
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
}));

export { useStyles };
