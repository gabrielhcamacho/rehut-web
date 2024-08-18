import React from 'react'

import dynamic from 'next/dynamic'

export default function ChartCard() {
  return (
    <div  className="w-100 bg-white flex flex-col p-7 shadow-md rounded-lg mt-10 text-text">
        <span className="pl-10 font-bold text-lg text-text-darker">Novos Leads</span>
       <AreaChart/>
    </div>
  )
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  colors: ['#008FFB', '#00E396'],
  chart: {
      toolbar: {
          show: false
      },
      zoom: {
          enabled: false
      },
      foreColor:  '#0000005c',
  },
  grid: {
      show: true
  },
  dataLabels: {
      enabled: true,
  },
  stroke: {
      curve: 'smooth'
  },
  tooltip: {
      x: {
          format: 'dd/MM/yy'
      },
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
          color: '#0000005c'
      },
      axisTicks: {
          color: '#0000006c'
      },
      categories: [
          '2022-01-01T00:00:00.00Z',
          '2022-02-01T00:00:00.00Z',
          '2022-03-01T00:00:00.00Z',
          '2022-04-01T00:00:00.00Z',
          '2022-05-01T00:00:00.00Z',
          '2022-06-01T00:00:00.00Z',
          '2022-07-01T00:00:00.00Z'

      ],
  },
  fill: {
      // 
      opacity: 0.3,
      type: 'gradient',
      gradient: {
          shade: 'light',
          opactiyFrom: 0.7,
          opacityTo: 0.3,
      }
  },
};

const anualDataOptions = {
  chart: {
      toolbar: {
          show: true
      },
      zoom: {
          enabled: false
      },
      foreColor: '#0000005c',
  },
  grid: {
      show: false
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      curve: 'smooth'
  },
  tooltip: {
      x: {
          format: 'dd/MM/yy'
      },
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
          color: '#0000006c'
      },
      axisTicks: {
          color: '#0000006c'
      },
      categories: [
          '2021-08-01T00:00:00.00Z',
          '2021-09-01T00:00:00.00Z',
          '2021-10-01T00:00:00.00Z',
          '2021-11-01T00:00:00.00Z',
          '2021-12-01T00:00:00.00Z',
          '2022-01-01T00:00:00.00Z',
          '2022-02-01T00:00:00.00Z'

      ],
  },
  fill: {
      // 
      opacity: 0.3,
      type: 'gradient',
      gradient: {
          shade: 'light',
          opactiyFrom: 0.7,
          opacityTo: 0.3,
      }
  },
};


const series = [
  { name: 'Novos Usuarios', data: [70, 74, 72, 84, 30, 85, 90] },
]

const series2 = [
  { name: 'series2', data: [31, 40, 28, 51, 42, 70, 90] }
]

const interesse = [
  { name: 'interesse', data: [40, 51, 50, 51, 52, 60, 60] }
]


export function AreaChart() {
   
  return (
    <div>
      <Chart options={options} series={series} type="area" height={160} />
    </div>
  );
}
