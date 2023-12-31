// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({currentData}) => {
console.log(currentData)
  const data = {
    labels: currentData.map( (item)=>`${item.topic} ${item.country} ${item.region} ${item.start_year? item.start_year: ""}`),
    datasets:[{

     label: 'Intensity',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: currentData.map( (item)=>item.intensity)
     
    },
    {

      label: 'Relevance',
       backgroundColor: 'rgba(75,142,192,0.4)',
       borderColor: 'rgba(75,192,192,1)',
       borderWidth: 1,
       hoverBackgroundColor: 'rgba(75,192,192,0.6)',
       hoverBorderColor: 'rgba(75,192,192,1)',
       data: currentData.map( (item)=>item.relevance)
      
     },
     {

      label: 'LIkelihood',
       backgroundColor: 'rgba(75,92,192,0.4)',
       borderColor: 'rgba(75,192,192,1)',
       borderWidth: 1,
       hoverBackgroundColor: 'rgba(75,192,192,0.6)',
       hoverBorderColor: 'rgba(75,192,192,1)',
       data: currentData.map( (item)=>item.likelihood)
      
     }]
  }

  console.log("data ",data)

   const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
        pan: {
          enabled: true,
          mode: 'xy',
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;

