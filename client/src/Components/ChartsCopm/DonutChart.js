import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['100%'],
  datasets: [
    {
      label: '# of Votes',
      data: [10],
      backgroundColor: ['#ED1B24'],
      borderColor: [1],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className='header'></div>
    <Doughnut
      data={data}
      height={200}
      width={400}
      options={{
        rotation: -90,
        circumference: 180,
        plugins: {
          labels: {
            render: 'percentage',
            fontColor: ['green', 'white', 'red'],
            precision: 2,
          },
        },
      }}
    />
  </>
);

export default DoughnutChart;
