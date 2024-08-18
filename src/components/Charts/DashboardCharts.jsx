import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


import ChartCard from './ChartCard'
import AreaChart from './AreaChart'
import ColumnChart from './ColumnChart'
import BarChartLocation from './BarChartLocation'
import BarChartHobbies from './BarChartHobbies'
import PizzaChart from './PizzaChart'
import AgeChart from './AgeChart'

function SearchBar() {
    return(
    <div className="flex mx-auto items-center">
        <div className='flex bg-slate-50 mt-4 md:mt-0 md:min-w-[25rem] h-9 border-2 border-gray-light rounded-lg shadow-sm mb-10 items-center px-4' id='input'>
            <input type="text" placeholder="apartamento 2 quartos Londrina" className="bg-slate-50 w-full focus:outline-none px-4" />
        </div>
        <button className="flex bg-blue rounded-lg h-9 w-10 ml-2 justify-center items-center mt-4 md:mt-0 mb-10">
            <AiOutlineSearch size="25" className='text-white' />
        </button>
    </div>
    )
}

export function ChooseGoal(){
    return(
        <div className="bg-white">
            
        </div>
    )
}

export default function DashboardCharts() {

    return (
        <div className="flex flex-col md:ml-[12rem] w-full h-screen bg-slate-50 overflow-y-scroll rounded-xl pt-[5rem] sm:pt-[10rem]">

            <SearchBar/>

            <div className='flex w-100% justify-center '>
                <button className='border-none bg-white px-6 py-2 rounded-lg'>
                    <span className='text-xl'>Google</span>
                </button>
                <button className='border-none bg-white px-6 py-2 rounded-lg'>
                    <span className='text-xl'>Google</span>
                </button>
            </div>

            <ChooseGoal/>

            <div className="flex flex-col lg:flex-row justify-center px-14">
                <div className="flex flex-col lg:w-1/2 items-center bg-white shadow-md px-5 py-8 mr-8 pb-32 rounded-xl">
                    <h4 className="text-text text-xl font-semibold">Mercado</h4>
                    <ChartCard Chart={<AreaChart />}
                        Title="Popularidade de Pesquisa"
                        Tooltip="Grafico que mede a popularidade do termo pesquisado, indice que vai de 0% a 100%, e compara com o proximo termo relacionado mais pesquisado" />
                    <ChartCard Chart={<ColumnChart />} Title="Volume de Pesquisas Relaciondas" Tooltip="Mede o volume de pesquisas com indice de mil por unidade do gráfico, mede o volume do termo pesquisado e dos 2 termos relacionados mais pesquisados" />

                    <ChartCard Chart={<BarChartLocation />} Title="Cidades Mais Pesquisadas" Tooltip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore " />
                </div>


                <div className="flex flex-col lg:w-1/2 items-center bg-white shadow-md px-5 py-8 rounded-xl">
                    <h4 className="text-text text-xl font-semibold">Público</h4>
                    <ChartCard Chart={<DonutChart />} Title="Genero" Tooltip="Mede a porcentagem do gênero do publico interessado no termo pesquisado" />
                    <ChartCard Chart={<AgeChart />} Title="Idade" Tooltip="" />
                    <ChartCard Chart={<BarChartHobbies />} Title="Interesses" Tooltip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore " />
                </div>

            </div>

        </div>
    )
}

