/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Board } from '../../src/components/Board'
import { Card, Col, Row, Button, Modal, Popover, Segmented } from 'antd';

import {
    AiOutlinePlus,
    AiFillDelete,
    AiFillEdit,
    AiOutlineUpload,
    AiOutlineSearch
} from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'

import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'

import { parseCookies } from 'nookies';
import CardEmpreendimento from '../../src/components/CardEmpreendimento copy';

export default function Empreendimentos() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [empreendimentoCategorySelected, setEmpreendimentoCategorySelected] = useState("Meus adicionados")

    const categoriasEmpreendimento = ["Meus adicionados", "Favoritos", "Mercado"]

    const { Meta } = Card

    const content = (
        <div className='w-[100px]'>
            <div className='flex items-center justify-between cursor-pointer hover:bg-gray-super-light py-2 px-3 rounded-md'>
                <span className='text-text'>Editar</span>
                <AiFillEdit
                    className="text-text cursor-pointer hover:brightness-110"
                    onClick={() => handleDelete(params.row.id)}
                />
            </div>
            <div className='flex items-center justify-between cursor-pointer hover:bg-gray-super-light py-2 px-3 rounded-md'>
                <span className='text-text'>Deletar</span>
                <AiFillDelete
                    className="text-text cursor-pointer hover:brightness-110"
                    onClick={() => handleDelete(params.row.id)}
                />
            </div>
        </div>
    );

    return (
        <div>
            <HeaderDashboard setIsOpen={setIsOpen} />
            <div className="flex">
                <Sidebar />
                <Board>
                    <div className="flex justify-between items-center sm:pr-8 lg:pr-2">
                        <span className="font-bold text-text-darker text-2xl ">Empreendimentos</span>
                        <Link href='/empreendimentos/tipoEmpreendimento' className='cursor-pointer'>
                            <button className="flex items-center rounded cursor-pointer px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
                                <AiOutlinePlus className="mr-1" />
                                <span className="hidden lg:block cursor-pointer">Adicionar</span>
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col mt-10">
                        <Segmented
                            size="large"
                            options={['Casas', 'Apartamentos','Prédios', 'Salas comerciais', 'Permutas', 'Rural', 'Lote']}
                            onChange={(value) => {
                                console.log(value); // string
                            }}
                            className='bg-slate-50 p-0'
                        />
                        <div className='flex flex-row mt-2'>
                            {categoriasEmpreendimento.map((item) => {
                                return (
                                    <button className={'flex mt-3 flex-row border-b-2 border-b-gray-light p-2 mr-8' + (item == empreendimentoCategorySelected ? ' border-b-blue' : '')} onClick={() => setEmpreendimentoCategorySelected(item)}>
                                        {item}
                                    </button>)
                            })}
                        </div>

                        <div className="relative mt-8">
                            <input
                                id="buscar"
                                className='w-full p-2 pl-10 shadow rounded-md'
                                placeholder="Buscar"
                            />
                            <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>


                    <div className="site-card-wrapper mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-y-8 gap-x-2 items-center">
                            <CardEmpreendimento
                                imagem='https://www.novafreitas.com.br/foto_edificio_/2020/337/itapema-meia-praia-dummond-residence-20-05-2020_15-26-51-1.jpg'
                                nome='teste'
                                endereco='Itapema - rua 326'
                            />

                            <CardEmpreendimento
                                imagem='https://cdn.myside.com.br/base/39d/0a8/908/fachada-era-by-sunprime.jpg'
                                nome='teste'
                                endereco='Itapema - rua 326'
                            />

                            <CardEmpreendimento imagem='https://cdn.uso.com.br/44161/2021/11/162345779.jpg' nome='teste'
                                endereco='Itapema - rua 326' />



                            <CardEmpreendimento imagem='https://cdn.uso.com.br/44161/2021/11/162345779.jpg' nome='teste'
                                endereco='Itapema - rua 326' />

                            <CardEmpreendimento imagem='https://cdn.uso.com.br/44161/2021/11/162345779.jpg' nome='teste'
                                endereco='Itapema - rua 326' />

                            <CardEmpreendimento imagem='https://cdn.uso.com.br/44161/2021/11/162345779.jpg' nome='teste'
                                endereco='Itapema - rua 326' />

                            <CardEmpreendimento imagem='https://cdn.uso.com.br/44161/2021/11/162345779.jpg' nome='teste'
                                endereco='Itapema - rua 326' />
                        </div>
                    </div>
                </Board>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

        </div>

    )
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
