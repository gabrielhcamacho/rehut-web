import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Popover } from 'antd';
import { MdLocationOn } from "react-icons/md";

import {
    AiOutlinePlus,
    AiFillDelete,
    AiFillEdit,
    AiOutlineUpload
} from 'react-icons/ai'
import UserPhoto from './UserPhoto';


export default function CardFuncionario({ nome, endereco, cidade, editarClick }) {

    const content = (
        <div className='w-[100px]'>
            <button onClick={editarClick} className='flex w-full items-center justify-between cursor-pointer hover:bg-gray-super-light py-2 px-3 rounded-md'>
                <span className='text-text'>Editar</span>
                <AiFillEdit
                    className="text-text cursor-pointer hover:brightness-110"
                    onClick={() => handleDelete(params.row.id)}
                />
            </button>
            <div className='flex items-center justify-between cursor-pointer hover:bg-gray-super-light py-2 px-3 rounded-md'>
                <span className='text-text'>Deletar</span>
                <AiFillDelete
                    className="text-text cursor-pointer hover:brightness-110"
                    onClick={() => handleDelete(params.row.id)}
                />
            </div>
        </div>
    )

    return (
        <div className='bg-white rounded-md shadow-md w-full'>
            <div className='p-6 flex flex-row items-center justify-between'>
                <div className='flex w-full flex-col'>
                    <div className='flex items-center mb-4'>
                        <UserPhoto size={40} src='https://lh3.googleusercontent.com/a/ACg8ocIWIReXmmAY56XP_ywMnMv7AzhZ80SRP--Qps6-E-casDk=s192-c-rg-br100' />
                        <span className='text-lg ml-3'>{nome}</span>
                    </div>
                    <div className='flex flex-row items-center mt-1'>
                        <MdLocationOn className='text-lg mr-2 text-slate-700' />
                        <span className='text-slate-500'>filial</span>
                    </div>
                </div>
                <Popover content={content} trigger="hover">
                    <BsThreeDotsVertical className='text-xl text-text hover:cursor-pointer' />
                </Popover>
            </div>
        </div>

    );
}
