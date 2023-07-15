import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './VerticalBar.css'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



function VerticalBar({names}) {
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
          display: names.state1,
          drawTicks:names.state2
        },
       
       },
       y:{
        display: names.state3,
        grid: {
          display: names.state4,
          drawTicks: names.state5
        },
        
       }
  
      //  false, false, true, false, false
      // false, false, true,true,true
  
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
  
  const labels = names.labels;
  const data = {
    labels,
    datasets: [
      {
        label: 'Traning',
        data: names.dataStore,
        backgroundColor:"#5d8af6",
        borderColor: '#5d8af6', // Adjust the border color to match the last bar color
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={names.classname}  >
      <p>{names.para}</p>
      <Bar data={data} options={options}  />
    </div>
  );
}

export default VerticalBar;
