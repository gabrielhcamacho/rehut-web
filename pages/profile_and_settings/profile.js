/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { Modal, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'
import { Board } from '../../src/components/Board'

export default function Users() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [profileImage, setProfileImage] = useState("https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleUpload = (info) => {
        const isImage = info.file.type.startsWith('image/');
        if (isImage) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(info.file.originFileObj);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <HeaderDashboard setIsOpen={setIsOpen} />
            <div className="flex">
                <Sidebar />
                <Board>
                    <h1 className="font-bold text-text-darker text-3xl ml-2 mb-6">Perfil</h1>

                    <div className="w-full h-full flex">
                        <div className="flex flex-col w-64 border-r border-gray-light bg-white p-5">
                            <div className="flex items-center p-4 text-slate-500 hover:bg-blue-50 hover:text-blue-500 cursor-pointer rounded-md">
                                <IoMdPerson className='mr-2' />
                                <span>Perfil</span>
                            </div>
                            <div className="flex items-center p-4 text-slate-500 hover:bg-blue-50 hover:text-blue-500 cursor-pointer rounded-md">
                                <LuSettings2 className='mr-2' />
                                <span>Parâmetros</span>
                            </div>
                            <div className="flex items-center p-4 text-slate-500 hover:bg-blue-50 hover:text-blue-500 cursor-pointer rounded-md">
                                <IoMdSettings className='mr-2' />
                                <span>Configurações</span>
                            </div>
                        </div>

                        <div className="flex-1 p-8 bg-white rounded-md shadow-sm">
                            <div className="mb-8">
                                <p className='text-lg font-medium text-slate-600 mb-3'>Imagem de perfil</p>
                                <div className="flex items-center">
                                    <img
                                        src={profileImage}
                                        alt="profile image"
                                        className='rounded-full object-cover w-24 h-24 border-2 border-blue-500 cursor-pointer'
                                        onClick={showModal} // Abre o modal ao clicar na imagem
                                    />
                                    <button
                                        className='ml-8 px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600'
                                        onClick={showModal} // Também pode abrir o modal ao clicar no botão
                                    >
                                        Alterar imagem
                                    </button>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className='text-lg font-medium text-slate-600 mb-3'>Nome do perfil</p>
                                <input
                                    type="text"
                                    className='border border-gray-light rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder="Digite o nome do perfil..."
                                />
                            </div>

                            <div className="mb-8">
                                <p className='text-lg font-medium text-slate-600 mb-3'>E-mail</p>
                                <input
                                    type="email"
                                    className='border border-gray-light rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder="Digite o seu e-mail..."
                                />
                            </div>

                            <div className="mb-8">
                                <p className='text-lg font-medium text-slate-600 mb-3'>Telefone:</p>
                                <input
                                    type="number"
                                    className='border border-gray-light rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder="Digite o seu telefone..."
                                />
                            </div>

                            <div className="flex justify-end">
                                <button disabled className="px-6 py-3 bg-gray-400 rounded-md text-white text-sm cursor-not-allowed">
                                    Salvar alterações
                                </button>
                            </div>
                        </div>
                    </div>
                </Board>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Modal para alterar a imagem de perfil */}
            <Modal
                title="Alterar imagem de perfil"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Upload
                    showUploadList={false}
                    beforeUpload={() => false} // Previne o upload automático
                    onChange={handleUpload}
                >
                    <Button icon={<UploadOutlined />}>Upload nova imagem</Button>
                </Upload>
            </Modal>
        </div>
    )
}
