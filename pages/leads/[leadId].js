/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { Board } from '../../src/components/Board'
import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'
import {leadsData} from '../../src/components/Leads/LeadList'

import {
  AiOutlinePlus,
  AiOutlineCalendar,
  AiOutlineMobile,
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineUpload
} from 'react-icons/ai'
import { MdArrowBackIosNew } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { useRouter } from 'next/router'


export default function UserId(id, nomeCompleto, age, ultimoContato, email, status
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
              <MdArrowBackIosNew className="text-text-darker text-xl mb-4 hover:brightness-200 cursor-pointer" />
            </Link>

            <div className="flex w-full flex-col">
              <div className="flex w-full justify-between items-center">
                <span className="font-bold text-text-darker text-2xl">Editar Lead</span>
                <button className="flex items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
                  Atualizar
                </button>
              </div>
            </div>

            <div className="flex w-full mt-8">
              {/* Section Left */}
              <div className="flex flex-col p-5 shadow-md w-1/3 mr-5">

                {/* Top */}
                <div className='flex items-center'>
                  <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile image"
                    className='rounded-full object-cover w-14 h-14'
                  />
                  <div className='flex flex-col ml-5 '>
                    <span className="text-text font-semibold text-xl">{lead[0].nomeCompleto}</span>
                    <span className="text-text font-light">Absoluto</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className='mt-5'>
                  <span className="text-gray">Detalhes da Conta</span>
                  <div className="flex items-center mt-3">
                    <AiOutlineCalendar className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>05/06/2022</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <AiOutlineInstagram className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>@eduardo_ferreira</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <AiOutlineFacebook className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>Eduardo Ferreira</span>
                  </div>
                </div>

                <div className='mt-5'>
                  <span className="text-gray">Contato</span>
                  <div className="flex items-center mt-3">
                    <AiOutlineMobile className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>(43) 98843-5894</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <AiOutlineMail className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>eduardoferreira@gmail.com</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <AiOutlineEnvironment className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>Rua Ernani Lacerda de Athayde 995</span>
                  </div>
                </div>

                <div className='mt-5'>
                  <span className="text-gray">Vendedores</span>
                  <div className="flex items-center mt-3">
                    <BsPerson className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>Matheus Ferri</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <BsPerson className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>tag</span>
                  </div>
                </div>

                <div className='mt-5'>
                  <span className="text-gray">Interesses</span>
                  <div className="flex items-center mt-3">
                    <AiOutlineHeart className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>Beach Tennis</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <AiOutlineHeart className="text-text text-lg" />
                    <span className='text-text text-lg ml-2'>Sacada grande</span>
                  </div>
                </div>

              </div>

              {/* Section Right */}
              <div className="flex flex-col p-5 shadow-md w-2/3">
                <span className='text-2xl text-text font-semibold ml-3'>Editar</span>
                <form className='flex w-full justify-between mt-6'>

                  <div className='space-y-5 flex flex-col items-center'>

                    <div className='space-y-5 border-l-2 border-blue pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Nome e Sobrenome</label>
                        <input type="text" placeholder='Eduardo Ferreira' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Ultimo Contato</label>
                        <input type="text" placeholder='05/06/2022' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Telefone</label>
                        <input type="text" placeholder='(43) 98843-5894' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Email</label>
                        <input type="text" placeholder='eduardoferreira@gmail.com' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Endereço</label>
                        <input type="text" placeholder='Rua Ernani Lacerda de Athayde 995' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>

                    <div className='space-y-5 border-l-2 border-primary pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Instagram</label>
                        <input type="text" placeholder='@eduardoferreira' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Facebook</label>
                        <input type="text" placeholder='Eduardo Ferreira' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>

                    <div className='space-y-5 border-l-2 border-indigo-500 pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Vendedor 1</label>
                        <input type="text" placeholder='Matheus Ferri' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Vendedor 2</label>
                        <input type="text" placeholder='' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>

                    <div className='space-y-5 border-l-2 border-yellow pl-3'>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Interesse 1</label>
                        <input type="text" placeholder='Beach Tennis' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                      <div className='flex flex-col'>
                        <label className='mb-2 text-text font-medium'>Interesse 2</label>
                        <input type="text" placeholder='Sacada grande' className="w-[350px] h-8 bg-slate-50 border-b-[1px] border-gray outline-none text-text" />
                      </div>
                    </div>

                    <button className="flex items-center rounded px-6 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">Atualizar</button>

                  </div>

                  {/* Foto Upload */}
                  <div>
                    <div className='flex items-center mr-5'>
                      <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile image"
                        className='rounded-lg object-cover w-40 h-40'
                      />
                      <label htmlFor="fotoUpload"><AiOutlineUpload className='text-3xl ml-4 cursor-pointer'/></label>
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
