import React, { useState } from 'react'

import HeaderDashboard from '../src/components/Header/HeaderDashboard'
import Sidebar from '../src/components/Sidebar'
import Drawer from '../src/components/Drawer'
import { Board } from '../src/components/Board'

import {
    AiOutlineArrowUp,
    AiOutlineArrowDown,
    AiOutlinePlus,
    AiOutlineMail,
    AiOutlineSearch,
    AiFillMessage,
    DownOutlined
} from 'react-icons/ai'
import { MdCampaign, MdEmail } from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'

import { Dropdown, Menu, Space } from 'antd';

export default function Anuncios() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <HeaderDashboard setIsOpen={setIsOpen} />
            <div className="flex">
                <Sidebar />
                <Board>
                    <MyDropdown/>
                    <Summary />
                </Board>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

        </div>
    )
}

function Summary() {
    return (
        <div className="flex w-full xs:flex-col md:flex-row justify-between md:mt-10  wrap">
            <div className="flex flex-col flex-1 mx-5 p-7 shadow-md rounded-lg cursor-pointer bg-white text-text xs:mt-10 sm:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-base">Leads</span>
                <div className='flex mt-3 mb-2 items-center justify-between'>
                    <span className='text-3xl font-bold text-text-darker'>1.307</span>
                    <div className='flex'>
                        <span className='flex ml-10'>+30</span>
                        <AiOutlineArrowUp size={22} className='ml-1 text-green' />
                    </div>
                </div>
                <span className="text-gray">Comparado ao último mês</span>
            </div>

            <div className="flex flex-col flex-1 mx-5 p-7 shadow-md rounded-lg cursor-pointer bg-white text-text xs:mt-5 md:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-base">Campanhas</span>
                <div className='flex mt-3 mb-2 items-center justify-between'>
                    <span className='text-3xl font-bold text-text-darker'>
                        10.460
                        <span className="text-text text-base ml-2 font-normal">views</span>
                    </span>
                    <div className="flex">
                        <span className='flex ml-10'>+152</span>
                        <AiOutlineArrowUp size={22} className='ml-1 text-green' />
                    </div>
                </div>

                <span className="text-gray">Comparado ao último mês</span>
            </div>

            <div className="flex flex-col flex-1 mx-5 p-7 shadow-md rounded-lg cursor-pointer bg-white text-text xs:mt-5 md:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-base">Custo por clique</span>
                <div className='flex mt-3 mb-2 items-center justify-between'>
                    <span className='text-3xl font-bold text-text-darker'>R$9,89</span>
                    <div className='flex'>
                        <span className='flex ml-10'>- R$2,50</span>
                        <AiOutlineArrowDown size={22} className='ml-1 text-red' />
                    </div>
                </div>
                <span className="text-gray">Comparado ao último mês</span>
            </div>
        </div>
    )
}


const MyDropdown = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='w-full flex justify-center'>
        <div className='flex w-56 md:w-full xs:flex-col md:flex-row md:mt-[-26px] items-center md:justify-end wrap px-5'>
        <div className="relative">
            <div className="flex items-center rounded text-base px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow cursor-pointer" onClick={() => setShow(!show)}>
                <p className="px-3 py-3 text-white text-base leading-3">Criar Novo</p>
                <div className="bg-blue items-center flex rounded-r border-gray-300 border-l">
                    <div className="cursor-pointer text-white mx-3">
                        {show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            {show && (
                <ul className="visible transition duration-300 opacity-100 bg-white   shadow rounded mt-2 w-48 absolute">
                    <li className="cursor-pointer hover:bg-slate-200 text-text text-sm py-3 px-3 flex items-center">
                        <MdCampaign className="mr-[4.5px] text-xl " />
                        Campanha
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 text-text text-sm py-3 px-3 flex items-center">
                        <MdEmail className="mr-2 text-base" />
                        Criar email marketing
                    </li>
                    <li className="cursor-pointer hover:bg-slate-200 text-text text-sm py-3 px-3 flex items-center">
                        <AiFillMessage className="mr-2 text-base" />
                        Envio de mensagem
                    </li>
                    {/* <li>
                        <hr className="border-gray-200 dark:border-gray-700 my-1" />
                    </li> */}
                    <li className="cursor-pointer hover:bg-slate-200 text-text text-sm py-3 px-3 flex items-center">
                        <FaSearch className="mr-2 text-base" />
                        Performace de SEO
                    </li>
                </ul>
            )}
        </div>
        </div>
        </div>
    );
};