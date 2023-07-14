import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './VerticalBar.css'
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughNut1 = ({name}) => {
  const chartRef = useRef(null);
  

  useEffect(() => {
    const chart = chartRef.current;

    if (chart && chart.chart && chart.chart.canvas) {
      const centerConfig = chart.config.options.elements.center;
      const canvas = chart.chart.canvas;
      const ctx = canvas.getContext('2d');

      ctx.restore();
      const centerX = (canvas.width - centerConfig.textWidth) / 2;
      const centerY = (canvas.height + centerConfig.fontSize) / 2;
      ctx.font = `${centerConfig.fontWeight} ${centerConfig.fontSize}px ${centerConfig.fontFamily}`;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = centerConfig.fontColor;
      ctx.fillText(centerConfig.text, centerX, centerY);
      ctx.save();
    }
  }, []);

  const data = {
    labels: name.labels,
    datasets: [
      {
        data: name.dataStore,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      afterDraw: (chart) => {
        const centerConfig = chart.options.elements.center;
        const canvas = chart.chart.canvas;
        const ctx = canvas.getContext('2d');

        ctx.restore();
        const centerX = (canvas.width - centerConfig.textWidth) / 2;
        const centerY = (canvas.height + centerConfig.fontSize) / 2;
        ctx.font = `${centerConfig.fontWeight} ${centerConfig.fontSize}px ${centerConfig.fontFamily}`;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = centerConfig.fontColor;
        ctx.fillText(centerConfig.text, centerX, centerY);
        ctx.save();
      },
      legend: {
        position: 'bottom',
        labels: {
          generateLabels: (chart) => {
            const { data } = chart;
            if (data.labels.length) {
              return data.labels.map((label, index) => ({
                text: label,
                fillStyle: data.datasets[0].backgroundColor[index],
                hidden: false,
                lineCap: 'round',
                lineDashOffset: 0,
                lineWidth: 0,
                strokeStyle: 'transparent',
                pointStyle: 'circle',
                // Customize other label properties if needed
              }));
            }
            return [];
          },
        },
      },
    },
    elements: {
      center: {
        text: 'Center Text',
        fontColor: '#000000',
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
        textWidth: 100, // Adjust the value based on the length of the text
      },
    },
    
  };

  return (
    <div className='doughnut-div' >
       <p>Chapter Wise Status</p>
      <Doughnut  data={data} options={options} />
    </div>
  
  )
};

export default DoughNut1;
