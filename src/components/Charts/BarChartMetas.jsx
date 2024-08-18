import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})



function BarChartMetas() {

  const state = {

    series: [
      {
        name: 'Actual',
        data: [
          {
            x: 'John Doe',
            y: 9,
            goals: [
              {
                name: 'Expected',
                value: 12,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Chris Lewis',
            y: 8,
            goals: [
              {
                name: 'Expected',
                value: 12,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Susan Clark',
            y: 12,
            goals: [
              {
                name: 'Expected',
                value: 12,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: 'round',
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Alice Davis',
            y: 66,
            goals: [
              {
                name: 'Expected',
                value: 61,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: 'round',
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'Michael Brown',
            y: 81,
            goals: [
              {
                name: 'Expected',
                value: 66,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: 'round',
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: 'bob Johnson',
            y: 67,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#775DD0'
              }
            ]
          }
        ]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      colors: ['#00E396'],
      dataLabels: {
        formatter: function (val, opt) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
              .goals

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`
          }
          return val
        }
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ['Actual', 'Expected'],
      markers: {
        fillColors: ['#00E396', '#775DD0']
      }
    }
  };


  return (
    <div>
      <Chart options={state.options} series={state.series} type="bar" height={300} />
    </div>
  )
}

export default BarChartMetas
