import React, { useState, useEffect, Component } from 'react'
import { Row, Col, Form, Input, Select, Button, notification } from 'antd';
import { FaArrowLeft } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'


import PaddingWrapper from '../src/components/PaddingWrapper'
import AroundTheWorld from '../src/assets/svg/aroundWorld.svg'
import ListSVG from '../src/assets/svg/list.svg'
import UIMaskInput from "../src/components/UIMaskInput";


// import { signInWithGooglePopup } from '../src/util/firebase/firebase'


export default function waitingList() {

    return (

        <div className='mt-4 h-screen'>
            <PaddingWrapper>
                <Link href="/">
                    <p className='text-3xl pl-2 pt-4 text-text cursor-pointer'><FaArrowLeft /></p>
                </Link>

                <div className='lg:flex lg:align-middle items-center lg:h-full  md:px-20'>

                    <div className='px-10 pt-8 lg:w-1/2'>
                        <Image src={ListSVG} alt="illustration" />
                    </div>

                    <div className='px-10 lg:w-1/2'>
                        <h3 className='mt-10'>Lista de espera</h3>
                        <h4 className='mt-2 text-lg font-light'>Entraremos em contato assim que o serviço estiver disponivel, não perca a oportunidade!</h4>
                        <div className='mt-8'>
                            <WaitingForm />
                        </div>
                    </div>

                </div>

            </PaddingWrapper>
        </div>
    )

}


class WaitingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSending: false,
            estado: '',
            cidades: [
                {
                    nome: 'Selecione um estado',
                    placeholder: true,
                }
            ],
        }
    }

    // sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_grifl1i', 'template_3jy6gi6', this.form, 'IoDkX9ZZl9XXHqEFD')
    //     .then(res => {
    //         console.log(res)
    //         alert('Email enviado com sucesso')
    //     }).catch(err => console.log(err))
    //   };

    handleSubmit() {
        emailjs.sendForm('service_grifl1i', 'template_3jy6gi6', this.form, 'IoDkX9ZZl9XXHqEFD')
            .then(res => {
                console.log(res)
                alert('Email enviado com sucesso')
            }).catch(err => console.log(err))
    }

    handleChangeEstado(value) {
        this.setState({
            estado: String(value)
        });
        let estadoSelecionado = dados.estados.find(
            (estado) => estado.sigla === String(value)
        );
        if (estadoSelecionado) {
            this.setState({
                cidades: estadoSelecionado.cidades
            });
        }
    }

    onEstadoChange = (value) => {
        this.handleChangeEstado(value);
    }

    

    onFinish = (values) => {
        this.setState({
            isSending: true,
        });
        // this.sendEmail(e);
        console.log(values);
        this.form.resetFields();
        notification.success({
            message: 'Formulário enviado',
            description: 'Seu contato foi enviado, obrigado!',
            duration: 4,
        });
        setTimeout(() => {
            this.setState({
                isSending: false,
            });
        }, 2000);
    }

    render() {
        const { Option } = Select;
        const { isSending } = this.state;
        const { TextArea } = Input;

        return (
            <main id="site-main" role="main">
                <div className="container">
                    <div className="page-container">
                        <Form
                            ref={el => this.form = el}
                            layout="vertical"
                            scrollToFirstError
                            onFinish={this.onFinish}
                            id="formTeste"
                        >
                            <Row gutter={20} className="space-y-4">
                                    <Col xs={24} sm={12} md={12}>
                                        <label>Nome</label>
                                        <Form.Item name="user_name" required={false} rules={[{ required: true, message: "Campo obrigatório." }]}>
                                            <Input type="text" placeholder="Nome" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={12}>
                                        <label>E-mail</label>
                                        <Form.Item name="user_email" required={false} rules={[{ type: "email", message: "Por favor insira um email válido" }, { required: true, message: "Campo obrigatório." }]}>
                                            <Input type="email" placeholder="E-mail" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={12}>
                                        <label>Telefone</label>
                                        <Form.Item name="telefone" required={false} rules={[{ required: true, message: "Campo obrigatório." }]}>
                                            <UIMaskInput mask={[{ mask: "(00) 0000-0000" }, { mask: "(00) 00000-0000" }]} placeholder="Telefone" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12} md={12}>
                                        <label>CPF / CNPJ</label>
                                        <Form.Item name="cpf-cnpj" required={false} rules={[{ required: true, message: "Campo obrigatório." }]}>
                                            <UIMaskInput mask={[{ mask: "000.000.000-00" }, { mask: "00.000.000/0000-00" }]} placeholder="CPF / CNPJ" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24} justify="center" align="center" >
                                        <Button htmlType="submit" type="primary" loading={isSending} 
                                        className="bg-primary rounded text-white py-3 px-8">Enviar</Button>
                                    </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </main>
        )
    }

}

