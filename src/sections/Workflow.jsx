import React from 'react'
import Image from '../assets/images/patternBG.png'

//A TendenceB é uma empresa que busca ajudar o seu negócio a crescer e aumentar suas vendas. Com a nossa ferramenta de busca e gestão de anúncios, você poderá criar anúncios para seu negócio, aumentar suas vendas e aumentar sua presença na internet.

//anúncios criados, como: quantidade de visualizações, cliques, conversões, etc.

const data = [
    {
      id: 1,
      title: 'Nosso Ambiente',
      text:
        'Ambiente único que fornece visualização de dados para você inovar o marketing da sua empresa',
    },
    {
      id: 2,
      title: 'Big Data em ação',
      text:
        'Nossos algorítimos coletam dados sobre o que esta sendo buscado, tendencias, e o público',
    },
    {
      id: 3,
      title: 'Inteligencia articial',
      text:
        'Nossa inteligência artificial filtra e analisa esses dados, te dando a melhor opção de anúncios para o melhor público',
    },
    {
      id: 4,
      title: 'Visualização de dados',
      text:
        'Tenha acesso a relatórios e dashboards com dados do seu mercado, consumidores, seus leads e anúncios',
    },
  ];

export default function Workflow() {
  return (
    <div className="bg-primary py-20 mx-[-1.25rem] lg:px-40 lg:mx-[-10rem] mt-12 lg:mt-20">
        <div className="flex-col justify-center text-center">
            <p className="uppercase text-gray-super-light text-xs lg:text-sm font-semibold">Quer entender todo o processo?</p>
            <h4 className="text-white text-xl lg:text-4xl mt-2 font-semibold mb-8">Vamos ver como funciona</h4>
        </div>
        <div className="grid mx-auto md:grid-flow-col
             md:grid-rows-2 lg:grid-rows-1 lg:mt-10 text-left">
        {data.map((item) => (
            <div className="mx-12 my-2" key={item.id}>
              <div className="bg-white flex text-text text-2xl font-bold p-6 h-20 w-20 justify-center rounded-3xl my-5 mx-auto lg:mx-0">{`0${item.id}`}</div>
              <div>
                <h4 className='text-white text-center lg:text-left font-medium text-2xl'>{item.title}</h4>
                <p className='text-gray-super-light mt-2 text-lg text-center md:text-left'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
