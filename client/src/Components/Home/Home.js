import './style.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Charts from '../Charts/Charts';
import TableNotif from '../TableNotif/TableNotif';


export default function Home() {
  return (
    <div className='home'>
      {/* <Charts /> */}
      <TableNotif />
    </div>
  );
}
