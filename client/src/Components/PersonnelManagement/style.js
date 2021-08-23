import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  personnelManagement: {
    flex: 4,
    backgroundColor: '#f5f9ff',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 15,
  },
  table: {
    minWidth: 550,
    padding: 0,
  },
}));

export { useStyles };
