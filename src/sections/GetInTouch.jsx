import React, { useState, Component, useEffect } from 'react'

import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { BiChevronDown } from 'react-icons/bi'

import emailjs from '@emailjs/browser';

import { Row, Col, Form, Input, Select, Button, notification } from 'antd';

import UIMaskInput from "../components/UIMaskInput";
import dados from "../helpers/estados.json"

export default function GetInTouch() {

    return (

        <div className="mt-16" id="Contato">

            <section className="px-2 xl:px-0">

                <section className="w-full max-w-3xl px-6 py-4 mx-auto ">
                    <h2 className="text-3xl font-semibold text-center text-text">Entre em Contato</h2>
                    <p className="mt-3 text-center text-text ">Vamos elevar junto o nível de marketing da sua empresa!</p>

                    <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 ">
                        <a href="https://wa.me/5543988404881" className="flex flex-col items-center px-4 py-3 !text-text rounded-md  hover:bg-slate-200 ">
                            <IoLogoWhatsapp size="20" classNameName="text-text" />
                            <span className="mt-2">(43) 9 8840-4881</span>
                        </a>

                        <a href="mailto:contato.tendenceb@gmail.com" className="flex flex-col items-center px-4 py-3 text-text  hover:bg-slate-200 rounded-md  ">
                            <MdEmail size="20" className="text-text" />
                            <a href="mailto:contato.tendenceb@gmail.com" className="flex flex-col items-center !text-text px-42 ">contato@tendenceb.com</a>
                        </a>
                    </div>
                    <FormTest />
                </section>
            </section>
        </div>
    )
}


class FormTest extends Component {
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
        this.sendEmail(e);
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
                            <Row gutter={20}>
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
                                <Col xs={24} sm={12} md={12}>
                                    <label>Estado</label>
                                    <Form.Item name="estado" required={false} rules={[{ required: true, message: "Campo obrigatório." }]}>
                                        <Select placeholder="Estado" suffixIcon={<BiChevronDown size="22px" color="#6BA083" />} onSelect={this.onEstadoChange} showSearch optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                                            {dados.estados.map((estado, index) => (
                                                <Option key={index} value={estado.sigla}>{estado.nome}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12}>
                                    <label>Cidade</label>
                                    <Form.Item name="cidade" required={false} rules={[{ required: true, message: "Campo obrigatório." }]}>
                                        <Select placeholder="Cidade" suffixIcon={<BiChevronDown size="22px" color="#6BA083" />} showSearch optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                                            {this.state.cidades.map((cidade, index) => (
                                                <Option disabled={cidade.placeholder} key={index} value={cidade.placeholder ? cidade.nome : cidade}>{cidade.placeholder ? cidade.nome : cidade}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={24} justify="center" align="center" >
                                    <TextArea name="message" required={false} rules={[{ type: "email", message: "Por favor insira uma mensagem" }, { required: true, message: "Campo obrigatório." }]} rows={4} />
                                    <Button htmlType="submit" type="primary" loading={isSending}>Enviar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </main>
        )
    }

}




{/* <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="items-center -mx-2 md:flex">
                            <div className="w-full mx-2">
                                <label className="block mb-2 text-sm font-medium text-gray-600 ">Nome</label>

                                <input className="block w-full px-4 py-2 text-text bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" name="user_name" />
                            </div>

                            <div className="w-full mx-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm font-medium text-gray-600 ">E-mail</label>

                                <input className="block w-full px-4 py-2 text-text bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" name="user_email" />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 ">Message</label>

                            <textarea className="block w-full h-40 px-4 py-2 text-text bg-white border rounded-md  focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="message" />
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
                        </div>
                    </form> */}