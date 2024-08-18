import React from 'react'

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'


export function FeaturedInfo() {
    return (
        <div className="flex w-100 xs:flex-col md:flex-row justify-between wrap">

            <div className="flex flex-col flex-1 mx-5 p-7 shadow-md rounded-lg bg-white text-text xs:mt-10 sm:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-lg">Vendas</span>
                <div className='flex mt-3 mb-2 items-center justify-between'>
                    <span className='text-3xl font-bold text-text-darker'>1.307</span>
                    <div className='flex'>
                        <span className='flex'>+30</span>
                        <AiOutlineArrowUp size={22} className='ml-1 text-green' />
                    </div>
                </div>
                <span className="text-gray">Comparado ao último mês</span>
            </div>

            <div className="flex flex-col flex-1 mx-5 p-7 shadow-md rounded-lg bg-white text-text xs:mt-5 md:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-lg">Novos leads</span>
                <div className='flex mt-3 mb-2 items-center justify-between'>
                    <span className='text-3xl font-bold text-text-darker'>
                        34
                        {/* <span className="text-text text-lg ml-2 font-normal">views</span> */}
                    </span>
                    <div className="flex">
                        <span className='flex'>+15</span>
                        <AiOutlineArrowUp size={22} className='ml-1 text-green' />
                    </div>
                </div>

                <span className="text-gray">Comparado ao último mês</span>
            </div>

            <div className="flex flex-col flex-1 p-7 shadow-md rounded-lg bg-white text-text xs:mt-5 md:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-lg">VGV mensal</span>
                <div className='flex mt-3 mb-2 items-center justify-between'>
                    <span className='text-3xl font-bold text-text-darker'>R$25.229,89</span>
                    <div className='flex'>
                        <span className='flex'>+ 12%</span>
                        <AiOutlineArrowUp size={22} className='ml-1 text-green' />
                    </div>
                </div>
                <span className="text-gray">Comparado ao último mês</span>
            </div>

        </div>
    )
}
