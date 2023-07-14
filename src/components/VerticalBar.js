import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './VerticalBar.css'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
    },
  },
  scales: {
    x:{
      // display: false,
      grid: {
        display: false,
        drawTicks:false
      },
     
     },
     y:{
      // display: false,
      grid: {
        display: false,
        drawTicks: false
      },
      
     }
  },
  layout: {
    padding: {
      top: 30, // Adjust the top padding to create space for the barometer-like UI
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  borderRadius: 20, // Apply border radius to the bar elements
  barThickness: 18, // Set the width of the bars
};

const labels = [
  '3 Jun',
  '4 Jun',
  '5 Jun',
  '6 Jun',
  '7 Jun',
  '8 Jun',
  '9 Jun',
  '10 Jun',
  '11 Jun',
  '12 Jun',
  '13 Jun',
  '14 Jun',
];
const data = {
  labels,
  datasets: [
    {
      label: '2020 Expense',
      data: [100, 120, 110, 210, 250, 200, 230, 90, 270, 300, 350, 400],
      backgroundColor:"#5d8af6",
      borderColor: '#5d8af6', // Adjust the border color to match the last bar color
      borderWidth: 1,
    },
  ],
};

function VerticalBar() {
  return (
    <div className='div-vertical'  >
      <p>Last 14 Days Active Workers In Traning</p>
      <Bar data={data} options={options}  />
    </div>
  );
}

export default VerticalBar;
