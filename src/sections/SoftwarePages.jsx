/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Dashboard from '../assets/images/dashboard.png'
import Trends from '../assets/images/trendsPage.png'
import LeadCustom from '../assets/images/leadCustom.png'
import LeadsList from '../assets/images/leadsList.png'
import { Carousel } from 'antd';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'



export default function SoftwarePages() {
    return (
        <div className='lg:mt-[26rem] text-center' id="Software">
            <div className='mt-6 mx-[-1.25rem] py-10 md:py-0 md:px-10 lg:pt-14 lg:mx-[-10rem] bg-primary'>
                <div className='px-4 md:px-0'>
                    <p className="uppercase text-gray-super-light text-xs lg:text-sm font-semibold">NOSSO SOFTWARE</p>
                    <h4 className="text-white text-xl lg:text-4xl mt-2 font-semibold mb-8 capitalize">Um Novo nível de CRM </h4>
                </div>
                <CarouselComponent />
            </div>
        </div>
    )
}


export const CarouselComponent = () => (
    
    <Carousel draggable>
        <div>
            <div className='flex flex-col cursor-pointer'>
                <div className='md:flex w-full pb-16 md:pt-[4rem] md:pb-[5rem] items-center px-16 md:px-0'>
                    <div className='h-100 mr-14 hidden md:flex rounded-full p-2 hover:brightness-110 hover:shadow-lg'>
                        <AiOutlineLeft className='text-gray-super-light text-2xl'/>
                    </div>
                    <div className='md:w-1/2 md:pr-20'>
                        <h1 className='text-white text-2xl md:text-3xl font-bold'>
                            Monitoramento em Tempo Real
                        </h1>
                        <p className='text-white text-base md:text-lg md:mt-5 '>Tenha acesso a todas informações a respeito do marketing digital da sua empresa. Monitore e crie campanhas, qualifique leads de clientes, monitore atividades internas, e muito mais</p>
                    </div>
                    <div className='flex overflow-hidden rounded-lg'>
                        <Image src={Dashboard} alt="dashboard" width={590} height={369} />
                    </div>
                    <div className='h-100 ml-14 hidden md:flex rounded-full p-2 hover:brightness-110 hover:shadow-lg'>
                        <AiOutlineRight className='text-gray-super-light text-2xl'/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col cursor-pointer'>
                <div className='md:flex w-full pb-16 md:pt-[4rem] md:pb-[5rem]  items-center px-16 '>
                    <div className='md:w-1/2 md:pr-20'>
                        <h1 className='text-white text-2xl md:text-3xl font-bold'>
                            Tudo Sobre O Seu Público E Seu Mercado
                        </h1>
                        <p className='text-white text-base md:text-lg md:mt-5 '>Tenha acesso a todas informações a respeito do marketing digital da sua empresa. Monitore e crie campanhas, qualifique leads de clientes, monitore atividades internas, e muito mais</p>
                    </div>
                    <div className='flex overflow-hidden rounded-lg'>
                        <Image src={Trends} alt="dashboard" width={590} height={369} />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col cursor-pointer'>
                <div className='md:flex w-full pb-16 md:pt-[4rem] md:pb-[5rem]  items-center px-16 '>
                    <div className='md:w-1/2 md:pr-20'>
                        <h1 className='text-white text-2xl md:text-3xl font-bold'>
                           Qualificar os Leads Nunca Foi Tão Fácil
                        </h1>
                        <p className='text-white text-base md:text-lg md:mt-5 '>CRM com tabelas e kanbans exclusivos para registrar e qualificar leads. Colete leads automaticamente para o sistema através da criação de anuncios, qualifique-os, e faça o remarketing</p>
                    </div>
                    <div className='flex overflow-hidden rounded-lg'>
                        <Image src={LeadsList} alt="dashboard" width={590} height={369} />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='flex flex-col cursor-pointer'>
                <div className='md:flex w-full pb-16 md:pt-[4rem] md:pb-[5rem]  items-center px-16 '>
                    <div className='md:w-1/2 md:pr-20'>
                        <h1 className='text-white text-2xl md:text-3xl font-bold'>
                            Customização de Leads ao Detalhe
                        </h1>
                        <p className='text-white text-base md:text-lg md:mt-5 '>Sistema capacitado para ir até o detalhe do seu lead, alta qualidade de qualificação, crie grupos de lookalikes para refinar seus anuncios e otimize os recursos do seu marketing</p>
                    </div>
                    <div className='flex overflow-hidden rounded-lg'>
                        <Image src={LeadCustom} alt="dashboard" width={590} height={369} />
                    </div>
                </div>
            </div>
        </div>
    </Carousel>
);

