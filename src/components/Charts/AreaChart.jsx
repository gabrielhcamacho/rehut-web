import React from "react";

import dynamic from 'next/dynamic'

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
          color: '#0000005c'
      },
      axisTicks: {
          color: '#0000006c'
      },
      categories: [
          '2022-02-01T00:00:00.00Z',
          '2022-02-04T00:00:00.00Z',
          '2022-02-07T00:00:00.00Z',
          '2022-02-10T00:00:00.00Z',
          '2022-02-13T00:00:00.00Z',
          '2022-02-16T00:00:00.00Z',
          '2022-02-19T00:00:00.00Z'

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
  { name: 'Apartamentos Londrina', data: [70, 74, 72, 84, 30, 85, 90] },
  { name: 'Apartamentos Curitiba', data: [50, 60, 38, 51, 72, 70, 80] },
]

const series2 = [
  { name: 'series2', data: [31, 40, 28, 51, 42, 70, 90] }
]

const interesse = [
  { name: 'interesse', data: [40, 51, 50, 51, 52, 60, 60] }
]


function AreaChart() {
   
  return (
    <div>
      <Chart options={options} series={series} type="area" height={160} />
    </div>
  );
}

export default AreaChart;