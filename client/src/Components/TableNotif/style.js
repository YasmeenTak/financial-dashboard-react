import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 4,
    backgroundColor: '#f5f9ff',
  },
  paperMain: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    margin: '30px',
    borderRadius: '15px',
    width: '100%',
  },
  tableNotifiTitle: {
    textAlign: 'left',
    marginBottom: '40px',
    marginTop: '-5px',
    fontWeight: 'bold',
    color: '#2c3758',
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginBottom: 15,
  },
}));

export { useStyles };
