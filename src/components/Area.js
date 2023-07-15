import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


function Area({color, backgroundColor}) {
  
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      
    },
    title: {
      display: true,
      
    },
  },
  scales: {
    x:{
    
     grid: {
       display: false,
       drawTicks:false
     }
    },
    y:{
      display: false,
     grid: {
       display: false,
       drawTicks: false
     },
     ticks:{
      display: false
     }
    }
     
   }
 
};

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Data',
      data: [0, 36, 19, 19, 50, 35, 0],
      borderColor: color,
      backgroundColor: backgroundColor,
    },
  ],
};
  return <Line options={options} data={data} width={150} />;
}

export default Area;