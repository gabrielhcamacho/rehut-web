import React from 'react'
import Image from 'next/image'
import FeatureCardRow from '../components/FeatureCardRow'

import Smart from '../assets/services/smart.svg'
import Secure from '../assets/services/secure.svg'
import BusinessMan from '../assets/services/businessman.svg'
import IllustrationBG from '../assets/images/shape-pattern1.png'

const data = {
    subTitle: 'nossos serviços',
    title: 'Melhor Acertividade e Posicionamento do Seu Produto',

    features: [
      {
        id: 1,
        imgSrc: Smart,
        altText: 'Smart Features',
        title: 'Dados Acurados',
        text: 'Tenha em um só lugar todas as informações sobre o publico que procura por seus produtos e serviços de maneira mais eficiente e prática.',
      },
      {
        id: 2,
        imgSrc: Secure,
        altText: 'Secure Contents',
        title: 'Melhor Decision Making',
        text:'Tenha mais acertividade e posicionamento sabendo qual a melhor plataforma para anunciar para qual publico com qual produto e serviço.',
      },
    ],
  };


export default function OurServices () {
    return (
        <div className="w-full mt-10 md:flex sm:mt-40 " id="Servicos">
            <div className="flex">
                <div className="absolute z-10 md:w-[20rem] lg:w-[25rem]">
                    <Image src={BusinessMan} alt="" width="450px" height="450px"/>
                </div>
                <div className="ml-10 mt-6 lg:w-[32rem]">
                    <Image src={IllustrationBG} alt="" width="1000px" height="1000px"/>
                </div>
            </div>
            
            <div className='px-10 lg:pl-20 text-left'>
                <p className="uppercase text-primary text-xs lg:text-sm font-medium">{data.subTitle}</p>
                <h3 className="text-dark-blue lg:text-4xl mt-2">{data.title}</h3>
                <div className="grid md:grid-flow-col
                md:grid-rows-2 lg:grid-rows-2 lg:mt-6">
                    {data.features.map((item) => (
                        <FeatureCardRow
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.altText}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
