/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Board } from '../../src/components/Board'
import { Card, Col, Row, Button, Modal, Popover, Form, Input, Spin } from 'antd';

import {
    AiOutlinePlus,
    AiFillDelete,
    AiFillEdit,
    AiOutlineUpload
} from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'

import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'
import CardEmpreendimento from '../../src/components/CardFilial';
import { parseCookies } from 'nookies';
import CardFilial from '../../src/components/CardFilial';
import { getAPIClient } from '../../services/axios';
import { api } from '../../services/api';

export default function Filiais({}) {

    const [loading, setLoading] = useState(false);
    const [filiais, setFiliais] = useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditar, setIsEditar] = useState(false);
    const [nomeFilial, setNomeFilial] = useState();
    const [cnpjFilial,setCnpjFilial] = useState();
    const [emailFilial, setEmailFilial] = useState();
    const [telefoneFilial, setTelefoneFilial] = useState();
    const [cidadeFilial, setCidadeFilial] = useState();
    const [enderecoFilial, setEnderecoFilial] = useState();

    const [form] = Form.useForm();


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleFormSubmit = () => {
        form.submit();
    };

    const onAdicionarFilialFinish = async (values) => {
        setLoading(true);
        console.log('Valores form:', values);

        try {
            await api.post('/auth/sign-up/branch', {
                name: values.nomeFilial,
                email: values.email,
                cnpj: values.cnpj,
                phone: values.telefone,
                city: values.cidade,
                address: values.endereco
            })
            fetchFiliais()

            form.resetFields();
            setIsModalOpen(false);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };


    async function fetchFiliais() {
        setLoading(true)
        try {
            const response = await api.get('/users/branches')
            setFiliais(response.data)
            console.log('FILIAIS: ', response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const onAdicionarFilialFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleOpenInfoFilial = (info) => {
        console.log(info)
        console.log("entrou")
        setNomeFilial(info.name);
        setCnpjFilial(info.branch.cnpj)
        setEmailFilial(info.email);
        setTelefoneFilial(info.phone);
        setEnderecoFilial(info.branch.address)
        setCidadeFilial(info.branch.city)

        form.setFieldsValue({
            nomeFilial: info.name,
            cnpj: info.branch.cnpj,
            email: info.email,
            telefone: info.phone,
            cidade: info.branch.city,
            endereco: info.branch.address,
        });

        setIsModalOpen(true);
    }

    useEffect(() => {
        fetchFiliais()
    }, [])



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

    const ModalNewFilial = ({ open, loading }) => (
        <Modal
            title="Criar Filial"
            open={open}
            onCancel={handleCancel}
            footer={[]}
        >
            <Form
                name="createFilial"
                labelAlign="left"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onAdicionarFilialFinish}
                onFinishFailed={onAdicionarFilialFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="Nome da filial"
                    style={{
                        marginTop: 14,
                    }}
                    name="nomeFilial"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor insira o nome da filial',
                        },
                    ]}
                >
                    <Input className='h-9' value={nomeFilial}/>
                </Form.Item>

                <Form.Item name="cnpj" label="CNPJ" rules={[{ required: true, message: 'Por favor insira o CNPJ da filial' }]}>
                    <Input className='h-9' value={cnpjFilial}/>
                </Form.Item>

                <Form.Item name="email" label="E-mail" rules={[{ required: true, type: 'email', message: 'Por favor insira um email valido', }]}>
                    <Input className='h-9' value={emailFilial}/>
                </Form.Item>

                <Form.Item name="telefone" label="Telefone" rules={[{ required: true, message: 'Por favor insira o telefone de contato da filial', }]}>
                    <Input className='h-9' value={telefoneFilial}/>
                </Form.Item>

                <Form.Item name="cidade" label="Cidade" rules={[{ required: true, message: 'Por favor insira a cidade que a filial pertence', }]}>
                    <Input className='h-9' value={cidadeFilial}/>
                </Form.Item>

                <Form.Item name="endereco" label="Endereço" rules={[{ required: true, message: 'Por favor insira o endereço da filial', }]}>
                    <Input className='h-9' value={enderecoFilial}/>
                </Form.Item>

                <div className="w-full flex justify-center items-center mt-6">
                    <Button
                        onClick={handleFormSubmit}
                        disabled={loading ? true : false}
                        className="flex min-w-[92px] self-center border-none items-center justify-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow"
                    >
                        {loading ? <Spin /> : 'Adicionar'}
                    </Button>
                </div>
            </Form>
        </Modal>
    )


    return (
        <div>
            <ModalNewFilial open={isModalOpen} loading={loading} />
            <HeaderDashboard setIsOpen={setIsOpen} />
            <div className="flex">
                <Sidebar />
                <Board>
                    <div className="flex justify-between items-center sm:pr-8 ">
                        <span className="font-bold text-text-darker text-2xl xl:ml-2">Filiais</span>
                        <button onClick={showModal} className="flex items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
                            <AiOutlinePlus className="mr-1" />
                            <span className="hidden lg:block">Adicionar</span>
                        </button>
                    </div>

                    <InfoFiliais />

                    <div className="site-card-wrapper mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-y-8 gap-x-8 justify-items-center">
                            {filiais.map((filial, index) => (
                                <CardFilial
                                    key={index}
                                    nome={filial.name}
                                    endereco={filial.branch.address}
                                    cidade={filial.branch.city}
                                    editarClick={() => handleOpenInfoFilial(filial)}
                                />
                            ))}

                        </div>
                    </div>
                </Board>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

        </div>

    )
}

function InfoFiliais() {
    return (

        <div className="mt-10 flex w-full xs:flex-col md:flex-row justify-between wrap">
            <div className="flex flex-col flex-1 p-7 shadow-md rounded-lg bg-white text-text xs:mt-10 sm:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-lg">Maior nº de propostas</span>
                <span className='text-3xl mt-3 mb-2 font-bold text-text-darker'>45</span>
                <span className="text-gray">Filial Itapema</span>
            </div>

            <div className="flex flex-col flex-1 md:mx-5 p-7 shadow-md rounded-lg bg-white text-text xs:mt-5 md:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-lg">Maior nº de vendas</span>
                <div className='flex mt-3 mb-2 items-center justify-between'>
                    <span className='text-3xl font-bold text-text-darker'>
                        34
                    </span>
                </div>

                <span className="text-gray">Filial Balneario Camburiu</span>
            </div>

            <div className="flex flex-col flex-1  p-7 shadow-md rounded-lg bg-white text-text xs:mt-5 md:mt-0 max-w-[345px] xl:max-w-[500px] ">
                <span className="text-lg">Maior VGV do mês</span>
                <span className='text-3xl mt-3 mb-2 font-bold text-text-darker'>R$25.229,89</span>
                <span className="text-gray">Filial Itajai</span>
            </div>

        </div>
    )
}


export const getServerSideProps = async (ctx) => {
    const { ['rehut.token']: token } = parseCookies(ctx)
    const apiClient = getAPIClient(ctx)
    // const filiais = await listarFiliais(apiClient)

    if (!token) {
        return {
            redirect: {
                destination: '/signIn',
                permanent: false,
            }
        }
    }

    return {
        props: {
            // filiais
        }
    }
}

// const listarFiliais = async (api) => {
//     const filiais = await api.get('/users/branches')
//         .then(response => {
//             console.log(response)
//             return response.data ? response.data : [];
//         }).catch(error => console.log(error));
//     console.log(filiais)

//     return filiais;
// }