/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useContext, useState } from "react";
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineAreaChart } from 'react-icons/ai'
import { MdDashboard, MdWork, MdCampaign, MdLogout, MdLocationOn, MdEditDocument, MdKeyboardArrowDown } from 'react-icons/md'
import { BiSolidBuildings } from 'react-icons/bi'
import { FaSuitcase } from 'react-icons/fa'
import { GiSuitcase } from 'react-icons/gi'
import Link from 'next/link'

import Logo from '../assets/svg/logo.svg'
import { AuthContext } from "../contexts/AuthContext";

export default function Drawer({ isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-40 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity left-0 opacity-100 duration-200 translate-x-0  "
          : " left-0 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-3/5 bg-[#1c2536] left-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : "  left-0")
        }
      >
        <article className="relative max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex max-w-xs px-5 py-6 font-bold items-center justify-end">
            <AiOutlineClose className="text-gray-light text-xl" onClick={() => {
              setIsOpen(false);
            }} />
          </div>
          <div className="px-5">
            <MenuContent />
          </div>

        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

export const MenuContent = () => {
  const { signOut } = useContext(AuthContext)
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);
  const router = useRouter();

  const toggleMarketing = () => {
    setIsMarketingOpen(!isMarketingOpen);
  };

  const isActive = (pathname) => router.pathname === pathname ? 'bg-[#252E3E]' : '';

  return (
    <ul className="space-y-2">
      <li className="ml-2">
        <svg width="130" height="65" viewBox="0 0 287 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.694092 63.2368V0.143215H2.49677V63.2368H0.694092ZM31.6099 0.143215H57.3882V63.2368H53.6927L42.6964 45.3002C50.3578 41.2442 55.5855 33.2223 55.5855 24.0286C55.5855 10.8691 44.8596 0.143215 31.6099 0.143215ZM13.4029 37.098V11.0494H31.6099C38.8206 11.0494 44.6793 16.9081 44.6793 24.0286C44.6793 31.2393 38.8206 37.098 31.6099 37.098H13.4029ZM13.4029 63.2368V48.0042H31.7902L41.1641 63.2368H13.4029Z" fill="#3B82F6" />
          <path d="M66.8198 11.0494H109.543V0.143215H55.9136V63.2368H109.543V52.3306H66.8198V37.1882H95.933V26.1919H66.8198V11.0494Z" fill="#3B82F6" />
          <path d="M169.741 0.143215H158.835V26.1919H127.378V0.143215H116.472V63.2368H127.378V37.1882H158.835V63.2368H169.741V0.143215Z" fill="#3B82F6" />
          <path d="M229.065 0.143215H218.158V38.9007C218.158 46.7423 211.759 53.1418 203.917 53.1418C196.076 53.1418 189.676 46.7423 189.676 38.9007V0.143215H178.77V38.9007C178.77 52.6912 190.037 64.048 203.917 64.048C217.798 64.048 229.065 52.6912 229.065 38.9007V0.143215Z" fill="#3B82F6" />
          <path d="M286.97 11.0494V0.143215H233.43V11.0494H254.702V63.2368H265.608V11.0494H286.97Z" fill="#3B82F6" />
        </svg>
      </li>
      <li className={`cursor-pointer ${isActive('/dashboard')}`}>
        <Link href="/dashboard">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <MdDashboard size={24} />
            <span className="ml-3 text-gray-light cursor-pointer">Dashboard</span>
          </div>
        </Link>
      </li>
      <li className={`cursor-pointer ${isActive('/empreendimentos') || ('/empreendimentos/create') || ('/empreendimentos/tipoEmpreendimento') || ('/empreendimentos/createSecondStep') || ('/empreendimentos/createThirdStep')}`}>
        <Link href="/empreendimentos">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <BiSolidBuildings size={24} />
            <span className="ml-3 text-gray-light cursor-pointer">Empreendimentos</span>
          </div>
        </Link>
      </li>
      <li className={`cursor-pointer ${isActive('/filiais')}`}>
        <Link href="/filiais">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <MdLocationOn size={24} />
            <span className="ml-3 text-gray-light cursor-pointer">Filiais</span>
          </div>
        </Link>
      </li>
      <li className={`cursor-pointer ${isActive('/equipe')}`}>
        <Link href="/equipe">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <GiSuitcase size={27} />
            <span className="ml-2 text-gray-light cursor-pointer">Equipes</span>
          </div>
        </Link>
      </li>
      <li className={`cursor-pointer ${isActive('/vendas')}`}>
        <Link href="/vendas">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <svg class="w-6 h-6  text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
            </svg>
            <span className="ml-3 text-gray-light cursor-pointer">Vendas</span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer" onClick={toggleMarketing}>
        <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
          <MdCampaign size={24} />
          <span className="ml-3 text-gray-light cursor-pointer">Marketing</span>
          <MdKeyboardArrowDown className={`ml-auto transition-transform transform ${isMarketingOpen ? 'rotate-180' : ''}`} size={24} />
        </div>
      </li>
      {isMarketingOpen && (
        <ul className="pl-8 space-y-1">
          <li className={`cursor-pointer ${isActive('/leads')}`}>
            <Link href="/leads">
              <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
                <svg class="w-6 h-6 text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd" />
                </svg>
                <span className="ml-2 text-gray-light cursor-pointer">Leads</span>
              </div>
            </Link>
          </li>
          <li className={`cursor-pointer ${isActive('/funnel')}`}>
            <Link href="/funnel">
              <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
                <svg className="w-6 h-6 text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                </svg>
                <span className="ml-2 text-gray-light cursor-pointer">Funis</span>
              </div>
            </Link>
          </li>
          <li className={`cursor-pointer ${isActive('/landing-pages')}`}>
            <Link href="/landing-pages">
              <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
                <svg className="w-6 h-6 text-text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11.5h13m-13 0V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6.5m-13 0V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.5M9 5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1" />
                </svg>
                <span className="ml-2 text-gray-light cursor-pointer">Landing Pages</span>
              </div>
            </Link>
          </li>
        </ul>
      )}
      <li className={`cursor-pointer ${isActive('/propostas')}`}>
        <Link href="/propostas">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <MdEditDocument size={24} />
            <span className="ml-2 text-gray-light cursor-pointer">Propostas</span>
          </div>
        </Link>
      </li>
      <li className={`cursor-pointer ${isActive('/kanban')}`}>
        <Link href="/kanban">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <svg className="flex-shrink-0 w-6 h-6 text-gray-light transition duration-75 group-hover:text-text dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap text-gray-light">Kanban</span>
          </div>
        </Link>
      </li>
      <li className={`cursor-pointer ${isActive('/leads/leads')}`}>
        <Link href="/leads/leads">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <svg class="w-6 h-6 text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap text-gray-light">Metas</span>
          </div>
        </Link>
      </li>
      <li className={`cursor-pointer ${isActive('/profile_and_settings/profile')}`}>
        <Link href="profile_and_settings/profile">
          <div className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
            <svg class="w-6 h-6 text-gray-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd" />
            </svg>

            <span className="flex-1 ml-3 whitespace-nowrap text-gray-light">Perfil</span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer">
        <div onClick={signOut} className="flex items-center p-2 text-base font-normal text-gray-light rounded-lg hover:bg-[#252E3E] cursor-pointer">
          <MdLogout size={24} />
          <span className="ml-3 text-gray-light">Sair</span>
        </div>
      </li>
    </ul>
  );
};
