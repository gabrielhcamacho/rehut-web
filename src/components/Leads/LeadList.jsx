import React, { useState } from 'react'
import Link from 'next/link'
import { DataGrid } from '@mui/x-data-grid';
import { AiOutlinePlus, AiFillDelete, AiFillEdit, AiOutlineUpload } from 'react-icons/ai'
import { StatusText } from './styled'

export const leadsData = [
  {
    id: 1, nomeCompleto: 'John Snow', age: 35,
    ultimoContato: '14/04/2022', email: 'jhonsnow@gmail.com', status: 'ativo'
  },
  { id: 2, nomeCompleto: 'Cersei Lannister', age: 42, email: 'cersei.lannister@gmail.com', status: 'ativo', ultimoContato: '14/04/2022' },
  { id: 3, nomeCompleto: 'Jaime Lannister', age: 45, email: 'jaime.lennister@gmail.com', status: 'inativo', ultimoContato: '14/04/2022' },
  { id: 4, nomeCompleto: 'Arya Stark', age: 16, email: 'aryastark@outlook.com', status: 'ativo', ultimoContato: '14/04/2022' },
  { id: 5, nomeCompleto: 'Daenerys Targaryen', age: 24, email: 'daenerys@gmail.com', status: 'suspenso', ultimoContato: '14/04/2022' },
  { id: 6, nomeCompleto: 'Melisandre', age: 150, email: 'melisandre@gmail.com', status: 'ativo', ultimoContato: '14/04/2022' },
  { id: 7, nomeCompleto: 'Ferrara Clifford', age: 44, email: 'ferrara_clifford@outlook.com', status: 'ativo', ultimoContato: '14/04/2022' },
  { id: 8, nomeCompleto: 'Rossini Frances', age: 36, email: 'rossini.frances@gmail.com', status: 'inativo', ultimoContato: '14/04/2022' },
  { id: 9, nomeCompleto: 'Harvey Roxie', age: 65, email: 'harveyroxie@gmail.com', status: 'ativo', ultimoContato: '14/04/2022' },
];

export default function LeadList() {
  const [data, setData] = useState(leadsData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 60, flex: 0.5 }, // Flex para ajustar a responsividade
    { field: 'nomeCompleto', headerName: 'Nome', sortable: false, width: 170, flex: 1 },
    { field: 'age', headerName: 'Idade', type: 'number', width: 100, flex: 0.5, align: "left", headerAlign: "left" },
    { field: 'email', headerName: 'Email', width: 200, flex: 1 },
    { field: 'ultimoContato', headerName: 'Ultimo Contato', width: 190, flex: 1 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
      flex: 0.5,
      renderCell: (params) => (
        <div className=''>
          <StatusText
            className="text-base"
            status={params.row.status}
            onClick={() => handleDelete(params.row.id)}
          >{params.row.status}</StatusText>
        </div>
      ),
    },
    {
      field: 'Opção',
      headerName: 'Opção',
      width: 110,
      flex: 0.5,
      renderCell: (params) => (
        <div className='flex justify-around w-full items-center'>
          <Link href={"/leads/" + params.row.id}>
            <AiFillEdit className='text-text text-lg cursor-pointer hover:brightness-150' />
          </Link>
          <AiFillDelete
            className="text-primary text-lg cursor-pointer hover:brightness-110"
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className='h-full w-5/6 px-4 md:px-8'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
        <span className="font-bold text-text-darker text-2xl ml-2 mb-2 md:mb-0">Leads</span>
        <div className='flex'>
          <label htmlFor="fotoUpload" className='flex items-center rounded px-4 py-2 bg-primary text-white hover:brightness-110 mr-3 shadow-md shadow-primary-shadow'>
            <AiOutlineUpload className="mr-1" />
            Upload leads
          </label>
          <input type="file" id="fotoUpload" className='hidden' />

          <Link href='/leads/newLead'>
            <button className="flex items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
              <AiOutlinePlus className="mr-1" />
              Adicionar
            </button>
          </Link>
        </div>
      </div>

      <div className='flex mt-10 w-full'>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
          disableSelectionOnClick
          autoHeight
          className='bg-white'
        />
      </div>
    </div>
  );
}
