import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})



export default function BarChartsLocation() {


const state = {
          
    series: [{
      data: [400, 430, 448, 580, 1100, 1200, 1380]
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
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Londrina', 'Cuiabá', 'Itajaí', 'Curitiba', 'Rio de Janeiro',
          'São Paulo', 'Balneário Camboriú'
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
