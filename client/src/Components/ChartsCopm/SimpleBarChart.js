import React from 'react';
import './style.css';
import { BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Book',
    uv: 100,
    pv: 0,
    amt: 400,
  },
  {
    name: 'Creditor',
    uv: 100,
    pv: 2,
    amt: 210,
  },
  {
    name: 'Debtor',
    uv: 100,
    pv: 5,
    amt: 290,
  },
  {
    name: 'Doc',
    uv: 780,
    pv: 0,
    amt: 100,
  },
  {
    name: 'Make',
    uv: 890,
    pv: 0,
    amt: 181,
  },
  {
    name: 'Other',
    uv: 390,
    pv: 0,
    amt: 500,
  },
  {
    name: 'Stop ',
    uv: 490,
    pv: 0,
    amt: 100,
  },
];

export default function App() {
  return (
    <BarChart
      className='chart'
      width={500}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={40}
    >
      <XAxis
        dataKey='name'
        scale='point'
        padding={{ left: 30, right: 30 }}
        fontSize='10'
      />
      <Tooltip />
      <Legend />
      <Bar dataKey='pv' fill='#8884d8' background={{ fill: 'white' }} />
    </BarChart>
  );
}
