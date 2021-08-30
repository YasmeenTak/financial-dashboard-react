import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Red'],
  datasets: [
    {
      label: '# of Votes',
      data: [12],
      backgroundColor: ['red'],
      borderColor: [1],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Doughnut
      data={data}
      options={{
        rotation: -90,
        circumference: 180,
        scale: {
          x: {
            min: 0,
            max: 100,
          },
        },
      }}
      width='10px'
    />
  </>
);

export default DoughnutChart;
