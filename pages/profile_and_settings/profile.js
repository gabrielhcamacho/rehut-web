/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Board } from '../../src/components/Board'
import { Card, Col, Row, Button, Modal, Popover } from 'antd';
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";



import {
    AiOutlinePlus,
    AiFillDelete,
    AiFillEdit,
    AiOutlineUpload
} from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'

import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'

export default function Users() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

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
                    <h1 className="font-bold text-text-darker text-2xl ml-2">Perfil</h1>

                    <div className="w-full h-full flex flex-row mt-5">
                        <div className="flex flex-col w-48 border-r-2 border-gray-light">
                            <div className="flex items-center p-3 text-slate-500 hover:bg-gray-light hover:border-r-2 hover:border-blue-light cursor-pointer">
                                <IoMdPerson className='mr-2' />
                                <span>Perfil</span>
                            </div>
                            <div className="flex items-center p-3 text-slate-500 hover:bg-gray-light hover:border-r-2 hover:border-blue-light cursor-pointer">
                                <LuSettings2 className='mr-2' />
                                <span>Parametros</span>
                            </div>
                            <div className="flex items-center p-3 text-slate-500 hover:bg-gray-light hover:border-r-2 hover:border-blue-light cursor-pointer">
                                <IoMdSettings className='mr-2' />
                                <span>Configurações</span>
                            </div>
                        </div>


                        <div className="flex flex-col flex-1 justify-between">
                            <div>
                                <div className="flex flex-row items-center">
                                    <di className='px-10 mt-4'>
                                        <p className='text-sm text-slate-500 mb-3'>Imagem de perfil</p>
                                        <div className="flex flex-row items-center">
                                            <img src="https://lh3.googleusercontent.com/a-/AOh14Gjj1j0gb3KzNYje1SV5hSVkspITdugsUYxOsgHfAg=s192-c-rg-br100" alt="profile image"
                                                className='rounded-full object-cover w-24 h-24'
                                            />
                                            <button className='bg-blue p-3 ml-10 text-white rounded-md text-sm'>Alterar imagem</button>
                                        </div>
                                    </di>
                                </div>

                                <div className='px-10 pr-36 mt-10'>
                                    <p className='text-sm text-slate-500 mb-3'>Nome do perfil</p>
                                    <input type="text" className='border border-gray-light rounded-md p-2 w-full focus:outline-none' />
                                </div>
                            </div>

                            <div className='self-end pr-36'>
                                <button disabled className="bg-gray p-3 hover:brightness-110 cursor-not-allowed rounded-md text-white text-sm">Salvar alterações</button>
                            </div>

                        </div>
                    </div>
                </Board>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

        </div>

    )
}
