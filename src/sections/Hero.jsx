import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


import img from '../assets/images/shape-left.jpeg'
import img2 from '../assets/images/shape-right.png'
// import dashboard from '../assets/svg/dashboard2.svg'
import Dashboard from '../assets/images/dashboard.png'



export default function Hero() {
  return (
    <>
      <div className="flex flex-col px-6 md:px-40 justify-center">
        <h1 className='text-center mt-8 sm:mt-16 md:px-5 lg:px-20'>O Melhor Do Mercado Imobiliário</h1>
        <p className='text-center mt-8 lg:px-40'>Além das ferramentas de CRM. Tenha acesso a todos dados de tendências de produtos, consumidores e anuncios relacionados a sua empresa</p>

        <button onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })}
          className="bg-primary rounded-full lg:px-8 py-3
         lg:py-3 w-56 text-white mt-8 mx-auto hover:brightness-110 font-normal text-lg">
          Comece Agora
        </button>

      </div>

      <div className='flex justify-between mt-10 sm:mt-[20rem] md:mt-[5rem] lg:mt-[13rem]'>
        <div className='w-[300px] h-[300px] mt-4 md:w-[400px] md:h-[400px] lg:w-[800px]'>
          <Image src={img} alt="" width="450px"
            height="450px" />
        </div>
        <div className='w-[300px] h-[300px] mt-6 md:w-[400px] md:h-[400px] '>
          <Image src={img2} alt="" width="450px"
            height="450px" />
        </div>
      </div>

      <div className="flex flex-col w-full justify-center align-center
        mt-[24rem] xs:mt-[24.5rem] md:mt-[24rem] lg:mt-[32rem] absolute mx-auto"
      >
        <div className='w-full px-6 sm:w-[75rem] sm:h-[75rem] md:w-[45rem]
         lg:w-[80rem] lg:max-w-full justify-center align-center mx-auto lg:pl-16 '>
          <div className='overflow-hidden rounded-lg'>
            <Image src={Dashboard} alt="dashboard"
              unoptimized={true}
              quality={100}
            />
          </div>
        </div>
      </div>

    </>
  )
}