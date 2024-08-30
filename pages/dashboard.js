import React, { useContext } from 'react'
import { parseCookies } from 'nookies'

import Home from './index'

import HeaderDashboard from '../src/components/Header/HeaderDashboard'
import Sidebar from '../src/components/Sidebar'
import Drawer from '../src/components/Drawer'
import { useSession, signIn, signOut } from "next-auth/react"

import { Board } from '../src/components/Board'
import { FeaturedInfo } from '../src/components/Dashboard/FeaturedInfo'
import ChartCard from '../src/components/Dashboard/ChartCard'
import HomeWidgets from '../src/components/Dashboard/HomeWidgets'
import { AuthContext } from '../src/contexts/AuthContext'
import { getAPIClient } from '../services/axios'
import PizzaChart from '../src/components/Charts/PizzaChart'



export default function Dashboard({ users }) {

    console.log(users)

    const [isOpen, setIsOpen] = React.useState(false);

    const { user } = useContext(AuthContext)

    // if (session){
    return (
        <div>
            <Sidebar />
            <HeaderDashboard setIsOpen={setIsOpen} />
            <div className="flex">
                <Board>
                    <FeaturedInfo />
                    <div className='px-5'>
                        <ChartCard />
                    </div>
                    <div className="flex">
                        <div className="w-100 bg-white flex w-1/2 flex-col mx-5 p-7 shadow-md rounded-lg mt-10 text-text">
                            <span className="pl-10 font-bold text-lg text-text-darker">Contratos Assinados</span>
                            <PizzaChart />
                        </div>
                        <div className="w-100 bg-white flex w-1/2 flex-col mx-5 p-7 shadow-md rounded-lg mt-10 text-text">
                            <span className="font-bold text-lg text-text-darker">Ultimos Lançamentos</span>
                            <table className="mt-5">
                                <thead className='mb-5'>
                                    <tr className="">
                                        <th className="text-left font-normal">Empreendimento</th>
                                        <th className="text-left font-normal">Data</th>
                                        <th className="text-left font-normal">Disponivel</th>
                                    </tr>
                                </thead>
                                <div className="py-1"></div>
                                <tbody>
                                    <tr className="border-b-[1px] border-b-gray-super-light h-10 hover:text-gray cursor-pointer">
                                        <td className="font-light">O Porto</td>
                                        <td className="font-light">03/03/2024</td>
                                        <td className="font-light">34</td>
                                    </tr>
                                    <tr className="border-b-[1px] border-b-gray-super-light h-10 hover:text-gray cursor-pointer">
                                        <td className="font-light">Lagom</td>
                                        <td className="font-light">03/04/2024</td>
                                        <td className="font-light">79</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <HomeWidgets />
                </Board>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
    // }
    // return (
    //     <>
    //       <Home/>
    //     </>
    //   )
}

export const getServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx)
    const { ['rehut.token']: token } = parseCookies(ctx)



    //user apiClient quando for fazer req server side e usar api quando for client side
    try {
        const response = await apiClient.get('/users');
        const users = response.data; // Extraia apenas os dados necessários

        return {
            props: {
                users,
            },
        };
    } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);

        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            },
        };
    }
}
