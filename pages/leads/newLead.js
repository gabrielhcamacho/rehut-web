/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { Board } from '../../src/components/Board'
import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'
import { leadsData } from '../../src/components/Leads/LeadList'

import {
  AiOutlineUpload
} from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { useRouter } from 'next/router'


export default function NewLead(id, nomeCompleto, age, ultimoContato, email, status
) {

  const router = useRouter()
  // console.log(router.query);

  const [isOpen, setIsOpen] = React.useState(false);
  const lead = leadsData.filter((l) => l.id == router.query.leadId)

  // console.log(lead)

  return (
    <div className=''>
      <HeaderDashboard setIsOpen={setIsOpen} />
      <div className="flex">
        <Sidebar />

        <Board>
          <div className='mt-[-30px]'>

            <Link href="/leads/leads">
              <MdArrowBackIosNew className="text-text-darker text-xl ml-6 mb-4 hover:brightness-200 cursor-pointer" />
            </Link>

            <div className="flex w-full mt-8">
              {/* Section Edit */}
              <div className="flex flex-col p-5 shadow-md w-full">
                <span className='text-2xl text-text font-semibold ml-3'>Adicionar Lead</span>
                <form className='flex w-full justify-between mt-6 ml-3 pb-5'>

                  <div className='space-y-5 flex flex-col items-center'>
                    <div className='space-y-5 border-l-2 border-blue pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Nome e Sobrenome</label>
                        <input type="text" placeholder='nome e sobrenome' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Ultimo Contato</label>
                        <input type="text" placeholder='00/00/0000' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Telefone</label>
                        <input type="text" placeholder='(00) 0000-0000' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Email</label>
                        <input type="text" placeholder='email' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Endereço</label>
                        <input type="text" placeholder='endereço' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>


                    <div className='space-y-5 border-l-2 border-primary pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Instagram</label>
                        <input type="text" placeholder='instragram' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Facebook</label>
                        <input type="text" placeholder='facebook' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>
                  </div>


                  <div className='space-y-5 flex flex-col items-center'>
                    <div className='space-y-5 border-l-2 border-indigo-500 pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Vendedor 1</label>
                        <input type="text" placeholder='vendedor' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Vendedor 2</label>
                        <input type="text" placeholder='vendedor' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>

                    <div className='space-y-5 border-l-2 border-yellow pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Interesse 1</label>
                        <input type="text" placeholder='interesse' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Interesse 2</label>
                        <input type="text" placeholder='interesse' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>
                    <button className="flex items-center rounded  px-6 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">Adicionar</button>
                  </div>

                  {/* Foto Upload */}
                  <div>
                    <div className='flex items-center mr-5'>
                      <img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="profile image"
                        className='rounded-lg object-cover w-40 h-40'
                      />
                      <label htmlFor="fotoUpload"><AiOutlineUpload className='text-3xl ml-4 cursor-pointer' /></label>
                      <input type="file" id="fotoUpload" className='hidden' />
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </Board>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

    </div>
  )
}

