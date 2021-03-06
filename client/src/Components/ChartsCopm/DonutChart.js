import React from 'react';
import './style.css';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: '-20px 0 20px ',
    height: 2,
    backgroundColor: '#D9D9D9',
  },
}));
export default function DonutChart() {
  const classes = useStyles();

  return (
    <div>
      <div className='multi-graph margin'>
        70%
        <div
          className='graph'
          style={{ '--percentage': '70', '--fill': '#ED1B24' }}
        ></div>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
}
