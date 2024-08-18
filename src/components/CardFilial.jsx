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


export default function CardFilial({ nome, endereco, cidade, editarClick }) {

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
                    <span className='text-lg'>{nome}</span>
                    <div className='flex flex-row items-center mt-1'>
                        <MdLocationOn className='text-lg mr-2 text-slate-700' />
                        <span className='text-slate-500'>{endereco}, {cidade}</span>
                    </div>
                    <span className='text-slate-700 mt-4'>Prospecções: 47</span>
                    <span className='text-slate-700'>Vendas: 4</span>
                </div>
                <Popover content={content} trigger="hover">
                    <BsThreeDotsVertical className='text-xl text-text hover:cursor-pointer' />
                </Popover>
            </div>
        </div>

    );
}
