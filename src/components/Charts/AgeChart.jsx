import React from "react";

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const state = {
          
    series: [{
      name: 'Masculino',
      data: [44, 55, 57, 56, 61, 58, 63]
    }, {
      name: 'Feminino',
      data: [76, 85, 23, 98, 87, 30, 91]
    },],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['18-24', '25-34', '35-44', '45-54', '55-64', '55-64', '65+'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return + val + "%"
          }
        }
      }
    },
  
  
  };


function AgeChart() {
   
  return (
    <div>
      <Chart options={state.options} series={state.series} type="bar" height={200} />
    </div>
  );
}

export default AgeChart;