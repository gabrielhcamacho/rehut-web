/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Alert } from 'antd';  // Importação do Alert
import { BiSolidBuildings } from 'react-icons/bi'
import { FaChevronRight } from "react-icons/fa6"
import { MdArrowBackIosNew } from 'react-icons/md'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies';

import TipoPredio from '../../src/assets/svg/tipoPredio.svg'
import TipoCasa from '../../src/assets/svg/tipoCasa.svg'
import TipoComercial from '../../src/assets/svg/tipoComercial.svg'
import TipoRural from '../../src/assets/svg/tipoRural.svg'
import TipoPermuta from '../../src/assets/svg/tipoPermuta.svg'
import TipoLote from '../../src/assets/svg/tipoLote.svg'
import TipoApartamento from '../../src/assets/svg/tipoApartamento.svg'

import { Board } from '../../src/components/Board'
import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'

export default function editEmpreendimento() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTipo, setSelectedTipo] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();

    const tipoEmpreendimentos = [
        { img: TipoApartamento, title: 'Apartamento' },
        { img: TipoPredio, title: 'Predio' },
        { img: TipoCasa, title: 'Casa' },
        { img: TipoComercial, title: 'Comercial' },
        { img: TipoRural, title: 'Rural' },
        { img: TipoPermuta, title: 'Permuta' },
        { img: TipoLote, title: 'Lote' },
    ];

    const handleNextClick = () => {
        if (!selectedTipo) {
            setShowAlert(true);
            return;
        }
        // Direcionar para a próxima tela com o tipo selecionado na URL
        router.push(`criar/${selectedTipo}`);
    };

    return (
        <div className=''>
            <HeaderDashboard setIsOpen={setIsOpen} />
            <div className="flex">
                <Sidebar />

                <Board>
                    <div className="flex flex-row">
                        <div className="w-min">
                            <Link href="/empreendimentos">
                                <div className="flex cursor-pointer">
                                    <MdArrowBackIosNew className="text-text-darker text-xl ml-6 mb-4 hover:brightness-200 cursor-pointer" />
                                    <span className='ml-2 font-bold'>Voltar</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='bg-white h-max shadow-md rounded-md mt-2'>
                        <div className="flex flex-col p-5 w-full ">
                            <span className='text-2xl text-text font-semibold ml-3 mt-2'>Lagom</span>

                            <div className='grid grid-cols-4 px-2 auto-rows-auto gap-y-2 gap-x-10 items-center justify-center mt-4 h-[660px]'>
                                {tipoEmpreendimentos.map((item) => (
                                    <div
                                        key={item.title}
                                        className={`flex flex-col items-center justify-center max-h-[275px] rounded-lg h-full border border-slate-200 p-8 cursor-pointer ${selectedTipo === item.title ? 'bg-slate-200 border-slate-300' : 'hover:bg-slate-200 hover:border-slate-300'}`}
                                        onClick={() => setSelectedTipo(item.title)}
                                    >
                                        <Image src={item.img} className="" />
                                        <p className={`text-text font-normal mt-9 ${selectedTipo === item.title ? 'font-bold' : 'group-hover:font-bold'}`}>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {showAlert && (
                                <Alert message="Por favor, selecione um tipo de empreendimento." type="error" className="my-4" />
                            )}
                        <div className="w-full flex justify-center items-center mt-2 mb-16">
                            <button type="primary" onClick={handleNextClick} className="flex self-center items-center rounded px-4 py-3 bg-blue text-white hover:brightness-110 shadow-md">
                                Próximo
                                <FaChevronRight className='ml-2' />
                            </button>
                        </div>
                    </div>
                </Board>

                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const { ['rehut.token']: token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: '/signIn',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}
