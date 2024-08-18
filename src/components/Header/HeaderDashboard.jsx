import React, { useState, useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useSession } from "next-auth/react"
import { AuthContext } from '../../contexts/AuthContext'

export default function HeaderDashboard({ setIsOpen, userImg }) {

  const { user } = useContext(AuthContext)
  //console.log(user)

  // if(status == 'unauthenticated'){
  //   return <p>NEcessario autenticaar</p>
  // }

  // if (!session) return <Login />

  return (
    <header className="flex justify-between backdrop-filter backdrop-blur-sm bg-opacity-60 bg-slate-50 w-full px-4 md:px-20 py-5 items-center z-20 fixed">

      {/* Header Left */}
      <div>
        <AiOutlineMenu size='1.5rem' className='md:hidden' onClick={() => setIsOpen(true)} />
      </div>

      {/* Header Right */}
      <div className='flex items-center'>
        <div className='flex-col pr-2 md:pr-5'>
          <p className='font-thin text-sm mb-0 md:flex text-slate-600'>Olá</p>
          <p className='font-medium text-sm mb-0 hidden md:flex'>{user?.name}</p>
        </div>
        
        
        
        <img src="https://lh3.googleusercontent.com/a/ACg8ocIWIReXmmAY56XP_ywMnMv7AzhZ80SRP--Qps6-E-casDk=s192-c-rg-br100" alt="profile photo" className="rounded-full object-cover w-14 h-14" />
        
      </div>


    </header>
  )
}
