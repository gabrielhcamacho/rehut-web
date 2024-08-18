import React from "react";

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const state = {
          
    series: [{
      name: 'Apartamentos Centro',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Apartamentos Gleba',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Casa de Campo',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
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
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: ''
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "mil"
          }
        }
      }
    },
  
  
  };


function AreaChart() {
   
  return (
    <div>
      <Chart options={state.options} series={state.series} type="bar" height={200} />
    </div>
  );
}

export default AreaChart;