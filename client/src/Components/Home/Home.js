import './style.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Charts from '../Charts/Charts';
import TableNotif from '../TableNotif/TableNotif';
import AddDebater from '../AddDebtor/AddDebater';

export default function Home() {
  return (
    <div className='home'>
      {/* <Charts /> */}
      {/* <TableNotif /> */}
      <AddDebater />
    </div>
  );
}