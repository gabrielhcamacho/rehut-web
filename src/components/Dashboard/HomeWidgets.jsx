/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { AiOutlineEye } from 'react-icons/ai'
import { StatusButton } from './style/largeWidget'


const dataUser = [
    {
        id: 1,
        imgSrc: "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name: 'Andrey Müller',
        product: 'Arbo Palhano',
    },
    {
        id: 2,
        imgSrc: 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Eduardo Ferreira',
        product: 'La Belle',
    },
    {
        id: 3,
        imgSrc: 'https://images.pexels.com/photos/3396237/pexels-photo-3396237.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Laís Becker',
        product: 'Absoluto',
    },
    {
        id: 4,
        imgSrc: 'https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Marcus Silva',
        product: 'You 180',
    },
    {
        id: 5,
        imgSrc: 'https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        name: 'Carlos Perri',
        product: 'Cartier',
    },



];

const dataCampanha = [
    {
        id: 1,
        nomeCampanha: 'Arbo Flora',
        data: '12/04/2022',
        orcamento: 'R$ 3.000,00',
        status: 'Aprovado',
    },
    {
        id: 2,
        nomeCampanha: 'Absoluto',
        data: '12/04/2022',
        orcamento: 'R$ 5.000,00',
        status: 'Aprovado',
    },
    {
        id: 3,
        nomeCampanha: 'Jardins',
        data: '12/04/2022',
        orcamento: 'R$ 1.000,00',
        status: 'Aprovado',
    },
    {
        id: 4,
        nomeCampanha: 'Casa Palhano',
        data: '12/04/2022',
        orcamento: 'R$ 2.000,00',
        status: 'Aguardando',
    },
    {
        id: 5,
        nomeCampanha: 'Campanha House',
        data: '12/04/2022',
        orcamento: 'R$ 6.000,00',
        status: 'Rejeitado',
    },

];

export default function HomeWidgets() {
    return (
        <div className="flex flex-col md:flex-row md:m-5 mt-10">

            <div className="flex flex-col w-full md:w-1/3 p-6 mr-5 bg-white shadow-md rounded-lg text-text">
                <span className="font-bold text-text-darker text-lg ">Novos Leads</span>
                <ul className=''>
                    {dataUser.map((item) => (
                        <SmallWidget
                            key={item.id}
                            imgSrc={item.imgSrc}
                            name={item.name}
                            product={item.product}
                        />
                    ))}
                </ul>
            </div>
            <LargeWidget />
        </div>
    )
}

export function SmallWidget({
    imgSrc,
    name,
    product, }) {
    return (
        <li className="flex items-center justify-between cursor-pointer rounded-md hover:bg-gray-super-light p-2 md:p-4 border-b-[1px] border-b-gray-super-light">
            <div className="flex items-center">
                <div className="flex flex-col">
                    <span className="text-text font-semibold">{name}</span>
                    <span className="text-text font-light">{product}</span>
                </div>
            </div>
            <button className="flex items-center rounded px-2 md:px-3 py-2 bg-blue text-white hover:brightness-110">
                <AiOutlineEye className="mr-1" />
                Ver
            </button>
        </li>
    )
}


export function LargeWidget(type) {

    return (
        <div className="flex mt-5 md:mt-0 flex-col w-full md:w-2/3 p-5 bg-white shadow-md rounded-lg text-text">
            <span className="font-bold text-text-darker text-lg ">Novas Propostas a Aprovar</span>
            <table className="text-text w-full mt-6">
                <thead className='mb-5'>
                    <tr className="">
                        <th className="text-left">Empreendimentos</th>
                        <th className="text-left">Data</th>
                        <th className="text-left">Orçamento</th>
                        <th className="text-left">Status</th>
                    </tr>
                </thead>
                <div className="py-1"></div>
                <tbody>
                    {dataCampanha.map((item) => (
                        <tr
                            key={item.id}
                            className="border-b-[1px] border-b-gray-super-light h-10 hover:text-gray cursor-pointer"
                        >
                            <td>{item.nomeCampanha}</td>
                            <td className="font-light">{item.data}</td>
                            <td className="font-light">{item.orcamento}</td>
                            <td>
                                <StatusButton type={item.status}>{item.status}</StatusButton>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}


