import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})



function BarCharts() {

const state = {
          
  series: [{
    name: 'Leads',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'Prospectados interessados',
    data: [23, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'Acordo feito',
    data: [12, 17, 11, 9, 15, 14, 20]
  }, {
    name: 'Venda realizada',
    data: [9, 7, 5, 8, 6, 12, 4]
  }, ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
        stacked: true
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      },
      xaxis: {
        categories:[
          'John Doe', 
          'Jane Smith', 
          'Bob Johnson', 
          'Alice Davis', 
          'Michael Brown', 
          'Susan Clark', 
          'Chris Lewis', 
        ],
      }
    },
  
  };


  return (
    <div>
        <Chart options={state.options} series={state.series} type="bar" height={300} />
    </div>
  )
}

export default BarCharts
