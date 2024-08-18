/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Logo from '../../assets/svg/logo.svg'
import Link from 'next/link'

export default function HeaderAbout() {

  return (
    <div className="flex flex-col justify-start w-full px-5">
    <header className='flex w-full h-10 justify-around items-center max-w-8xl mx-auto sm:px-16'>
      <div className='flex'>
        <h1 className='object-contain cursor-pointer text-xl sm:text-3xl'>TendenceB<span className='text-blue text-2xl'>.</span></h1>
      </div>

      <div className="hidden lg:inline-flex space-x-10">
        <Link href='/'>
          <a className="cursor-pointer text-text hover:text-primary">Home</a>
        </Link>
        <Link href='/about'>
          <a className="cursor-pointer text-text hover:text-primary">Software</a>
        </Link>
      </div>


      <div className='flex items-center space-x-5 text-green-600'>
        <a href="/waitingList">
          <h3 className="cursor-pointer text-text text-sm sm:text-base hover:text-primary">Sign In</h3>
        </a>
        <a href="/waitingList">
          <h3 className='border-2 text-sm px-3 py-2 border-primary rounded-full cursor-pointer text-primary hover:bg-primary hover:text-white md:text-base md:px-7 sm:py-3'>Começar Agora</h3>
        </a>

      </div>
    </header>
    {/* <hr className="border-gray-super-light mt-5 w-full"/> */}
  </div>
  )
}
