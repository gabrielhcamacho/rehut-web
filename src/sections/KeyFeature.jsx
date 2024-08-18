import React from 'react'


import Performance from '../assets/feature/performance.svg'
import Partnership from '../assets/feature/partnership.svg'
import Subscriptions from '../assets/feature/subscription.svg'
import Support from '../assets/feature/support.svg'

import FeatureCardColumn from '../components/FeatureCardColumn'

const data = [
    {
        id: 1,
        imgSrc: Performance,
        altText: 'Fast Performance',
        title: 'Relatórios Diarios',
        text:
            'Relatórios diarios a respeito do seu publico, tudo o que ele procura e desempenho dos seus anuncios',
    },
    {
        id: 2,
        imgSrc: Partnership,
        altText: 'Partnership deal',
        title: 'Dados Acurados',
        text:
            'Específico para o seu business model, com os resultados que mais fazem sentido pra você.',
    },
    {
        id: 3,
        imgSrc: Subscriptions,
        altText: 'Pro Subscription',
        title: 'Esteja a Frente',
        text:
            'Crie estratégias efetivas de marketing usando de dados especificos e inteligentes. ',
    },
    {
        id: 4,
        imgSrc: Support,
        altText: 'Customer Support',
        title: 'Parâmetros Versáteis',
        text:
            'Explore o máximo do seu mercado! Contate a nossa equipe que está sempre pronta a te atender.',
    },
];

export default function KeyFeature () {
    return (
        <div className="flex flex-col justify-center text-center mt-10 md:mt-24 lg:mt-[10rem]" id="Sobre">
            <p className="uppercase text-primary text-xs lg:text-sm font-medium">Com a TendendenceB</p>
            <h3 className="text-dark-blue lg:text-4xl px-8 mt-2">Conheça Tudo Sobre Seu Mercado</h3>

            <div className="grid mx-auto mt-2 md:grid-flow-col
             md:grid-rows-2 lg:grid-rows-1 lg:mt-10">
                {data.map((item) => (
                    <FeatureCardColumn
                        key={item.id}
                        src={item.imgSrc}
                        alt={item.altText}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    )
}
