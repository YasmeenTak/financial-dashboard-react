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
export default function Dount() {
  const classes = useStyles();

  return (
    <div>
      <div className='multi-graph margin'>
        0.0%
        <div
          className='graph'
          data-name='0'
          style={{ '--percentage': 0, '--fill': '#ED1B24' }}
        ></div>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
}
