import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Popover } from 'antd';
import {
    AiOutlinePlus,
    AiFillDelete,
    AiFillEdit,
    AiOutlineUpload
} from 'react-icons/ai'

const content = (
    <div className='w-[100px]'>
        <div className='flex items-center justify-between cursor-pointer hover:bg-gray-super-light py-2 px-3 rounded-md'>
            <span className='text-text'>Editar</span>
            <AiFillEdit
                className="text-text cursor-pointer hover:brightness-110"
                onClick={() => handleDelete(params.row.id)}
            />
        </div>
        <div className='flex items-center justify-between cursor-pointer hover:bg-gray-super-light py-2 px-3 rounded-md'>
            <span className='text-text'>Deletar</span>
            <AiFillDelete
                className="text-text cursor-pointer hover:brightness-110"
                onClick={() => handleDelete(params.row.id)}
            />
        </div>
    </div>
);

export default function CardEmpreendimento({ imagem, nome, endereco }) {
    return (
        <div className='bg-white max-w-[250px] rounded-md shadow-md hover:scale-105 cursor-pointer'>
            <div className='h-[350px] cursor-pointer overflow-hidden'>
                <img
                    src={imagem}
                    alt="Empreendimento"
                    className='object-fill w-full h-full rounded-tl-md rounded-tr-md'
                />
            </div>
            <div className='p-5 flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                    <span className='text-xl'>{nome}</span>
                    <span className='mt-2 text-slate-500'>{endereco}</span>
                </div>
                <Popover content={content} trigger="hover">
                    <BsThreeDotsVertical className='text-xl text-text hover:cursor-pointer' />
                </Popover>
            </div>

        </div>

    );
}
