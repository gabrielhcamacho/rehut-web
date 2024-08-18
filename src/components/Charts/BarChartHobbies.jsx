import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})



export default function BarChartsHobbies() {


const state = {
          
    series: [{
      data: [1380, 1220, 1100, 570, 489, 430, 390]
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
        categories: ['TNT Sports Brasil', 'TenisClub', 'Henrique e Juliano', 'Nike', 'Governo Federal', 'Neymar Jr.', 'Cifras'
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
