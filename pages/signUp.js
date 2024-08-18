import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import PaddingWrapper from '../src/components/PaddingWrapper'
import { FaArrowLeft } from 'react-icons/fa'
import AroundTheWorld from '../src/assets/svg/aroundWorld.svg'


export default function signUp() {

    return (

        <div className='mt-4 h-screen'>
            <PaddingWrapper>
                <Link href="/">
                    <p className='text-3xl pl-2 pt-4 text-primary'><FaArrowLeft /></p>
                </Link>
            </PaddingWrapper>

            <div className="flex items-center justify-center" >
                <div className="xl:w-10/12 w-full px-8">
                    <div className="xl:px-24">

                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 border-primary pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-2xl font-semibold pr-2 text-primary leading-5">Informações de contato</h1>
                                </div>
                                <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="text-md leading-none text-text" id="firstName" >Primeiro nome</label>
                                        <input type="name" tabIndex={0} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="firstName" placeholder="John" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-md leading-none text-text" id="lastName">Sobrenome</label>
                                        <input type="name" tabIndex={1} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="lastName" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-md leading-none text-text" id="emailAddress">Email</label>
                                        <input type="email" tabIndex={2} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-md leading-none text-text" id="phone" >Numero de telefone</label>
                                        <input type="name" tabIndex={3} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="phone" placeholder="(12) 1234-5678" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 lg:flex justify-between pb-10 mb-4">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-2xl font-semibold pr-2 text-primary leading-5">Segurança</h1>
                                </div>
                                <p className="mt-4 text-sm leading-5 text-text">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="text-md leading-none text-text" id="password">Senha</label>
                                        <input type="name" tabIndex={4} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-md leading-none text-text" id="securityCode">Confirmar senha</label>
                                        <input type="name" tabIndex={5} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="securityCode" placeholder="Enter your security code" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-md leading-none text-text" id="recoverEmail">Recovery Email address</label>
                                        <input type="name" tabIndex={6} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="recoveryEmail" placeholder="Your recovery email" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-md leading-none text-text" id="altPhone">Alternate phone number</label>
                                        <input type="name" tabIndex={7} className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-text" aria-labelledby="altPhone" placeholder="Your alternate phone number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center lg:pt-5 pb-20 ">
                <button className="bg-primary rounded-full lg:px-8 py-2
                lg:py-4 w-56 text-white justify-center hover:brightness-110">Proximo</button>
            </div>

        </div>
    )
}
