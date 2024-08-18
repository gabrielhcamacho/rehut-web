import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})
const state = {
    colors: ['#008FFB', '#ea3a60'],
    series: [7, 11, 5, 18, 3, 2],
    options: {
        chart: {
            type: 'donut',
        },
        labels: ['Vendedor A', 'Vendedor B'],
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                return opts.w.globals.series[opts.seriesIndex];
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },


};

function PizzaChart() {

    return (
        <div>
            <Chart options={state.options} series={state.series} type="donut" height={200} />
        </div>
    )
}

export default PizzaChart;