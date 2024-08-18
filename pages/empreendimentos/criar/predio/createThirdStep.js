/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { DatePicker, Steps, Form, Row, Col, Input as AntInput, TextArea } from 'antd';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BiSolidBuildings } from 'react-icons/bi'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  AiOutlinePlus,
  AiFillDelete,
  AiFillEdit,
  AiOutlineUpload
} from 'react-icons/ai'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { DataGrid } from '@mui/x-data-grid';
import { BsCardImage, BsCameraVideoFill, BsFiletypePdf } from 'react-icons/bs'


import { Board } from '../../../../src/components/Board'
import HeaderDashboard from '../../../../src/components/Header/HeaderDashboard'
import Sidebar from '../../../../src/components/Sidebar'
import Drawer from '../../../../src/components/Drawer'
import { leadsData } from '../../../../src/components/Leads/LeadList'
import { StatusText } from '../../../../src/components/Leads/styled'

import { MdArrowBackIosNew } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Input from '../../../../src/components/Input'
import { parseCookies } from 'nookies';



const getBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
}
);

console.log(leadsData)



const propsVideoUpload = {
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
      percent: 33,
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};


export default function NewLead(id, nomeCompleto, age, ultimoContato, email, status
) {

  const columns = [
    {
      field: 'numeroUnidade',
      headerName: 'Número da Unidade',
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'areaPrivativa',
      headerName: 'Área Privativa (m²)',
      type: 'number',
      width: 200,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'areaTotal',
      headerName: 'Área Total (m²)',
      type: 'number',
      width: 200,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'preco',
      headerName: 'Valor (R$)',
      type: 'number',
      width: 150,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'andar',
      headerName: 'Nº do Andar',
      type: 'number',
      width: 120,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Opção',
      headerName: 'Opção',
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <div className='flex justify-around w-full items-center'>
            {/* Adicione um evento de edição conforme necessário */}
            <AiFillEdit className='text-text text-lg cursor-pointer hover:brightness-150' />
            <AiFillDelete
              className="text-primary text-lg cursor-pointer hover:brightness-110"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  const [form] = Form.useForm();
  const [unidades, setUnidades] = useState([]);
  const [ultimoId, setUltimoId] = useState(0);

  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const [data, setData] = useState(leadsData)

  const [isOpen, setIsOpen] = React.useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://admin.dallo.com.br/uploads/enterprise/1/62472d8d87c566.49220893.jpg',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://admin.dallo.com.br/uploads/enterprise/1/62472d8d8bab10.61986353.jpg',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://admin.dallo.com.br/uploads/enterprise/1/62472d8d8c0579.63796323.jpg',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const router = useRouter()
  const lead = leadsData.filter((l) => l.id == router.query.leadId)

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );


  const adicionarUnidade = () => {
    form.validateFields().then((values) => {
      const novaUnidade = {
        id: ultimoId + 1,
        numeroUnidade: values.numeroUnidade,
        areaPrivativa: values.areaPrivativa,
        areaTotal: values.areaTotal,
        preco: values.preco,
        andar: values.andar
      };

      console.log('Valores da unidade:', values);

      setUnidades((prevUnidades) => [...prevUnidades, novaUnidade]);
      setUltimoId((prevId) => prevId + 1);
      form.resetFields(); // Resetar os campos do formulário
    });
  };

  const handleDelete = (id) => {
    console.log(id)
    setUnidades((prevUnidades) => prevUnidades.filter((unidade) => unidade.id !== id));
  }
  

  return (
    <div className=''>
      <HeaderDashboard setIsOpen={setIsOpen} />
      <div className="flex">
        <Sidebar />

        <Board>
          <div className="flex flex-row">
            <div className="w-min">
              <Link href="/empreendimentos/createSecondStep">
                <div className="flex cursor-pointer">
                  <MdArrowBackIosNew className="text-text-darker text-xl ml-6 mb-4 hover:brightness-200 cursor-pointer" />
                  <span className='ml-2 font-bold'>Voltar</span>
                </div>
              </Link>
            </div>
            <div className='flex-1 mx-[200px]'>
              <Steps
                size="small"
                current={2}
                items={[
                  {
                    title: 'Empreendimento',
                  },
                  {
                    title: 'Plantas',
                  },
                  {
                    title: 'Apartamentos',
                  },
                ]}
              />
            </div>
          </div>

          <div className='bg-white h-max shadow-md rounded-md mt-2'>

            <Form
              form={form}
              name="unidadeForm"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 1600,
                paddingBottom: 20,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={adicionarUnidade}
              autoComplete="off"
            >
              <Row gutter={1} style={{ marginTop: 30 }}>
                {/* Coluna 1 */}
                <Col span={11}>
                  <Form.Item name="numeroUnidade" label="Nº unidade" initialValue="">
                    <AntInput className='w-full max-w-[250px] h-9'/>
                  </Form.Item>
                  <Form.Item name="areaTotal" label="Área total m²" initialValue="">
                    <AntInput className='w-full max-w-[250px] h-9' />
                  </Form.Item>
                  <Form.Item name="preco" label="Preço R$" initialValue="">
                    <AntInput className='w-full max-w-[250px] h-9' />
                  </Form.Item>
                </Col>


                {/* Coluna 3 */}
                <Col span={13}>
                  <Form.Item name="areaPrivativa" label="Área privativa m²" initialValue="">
                    <AntInput className='w-full max-w-[250px] h-9' />
                  </Form.Item>
                  <Form.Item name="andar" label="Nº andar" initialValue="">
                    <AntInput className='w-full max-w-[250px] h-9' />
                  </Form.Item>
                </Col>
              </Row>

              <div className="w-full flex justify-center items-center mt-6">
                <button type='submit' className="my-6 flex w-32 self-center items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
                  <AiOutlinePlus className="mr-1" />
                  Adicionar
                </button>
              </div>

            </Form>
            {/* <form className='w-full flex justify-center items-center flex-col mt-7' onSubmit={adicionarUnidade}>
              <span className='text-md font-bold mb-4'>Adicionar Unidade</span>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-2 justify-items-stretch'>
                <Input name='numeroUnidade' placeholder='Numero da unidade' onChange={(e) => setNumeroUnidade(e.target.value)}/>
                <Input name='areaPrivativa' placeholder='Area privativa m²' onChange={(e) => setAreaPrivativa(e.target.value)}/>
                <Input name='areaTotal' placeholder='Area total m²' onChange={(e) => setAreaTotal(e.target.value)}/>
                <Input name='preco' placeholder='R$' onChange={(e) => setPreco(e.target.value)}/>
                <Input name='andar' placeholder='Nº do andar' onChange={(e) => setAndar(e.target.value)}/>
              </div>

              <button type='submit' className="my-6 flex w-32 self-center items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
                <AiOutlinePlus className="mr-1" />
                Adicionar
              </button>
            </form> */}
            <div className="w-full h-fit">
              <DataGrid
                rows={unidades}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[10]}
                autoHeight={true}
              />
            </div>
          </div>


        </Board>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

    </div>
  )
}


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const getServerSideProps = async (ctx) => {
  const { ['rehut.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/signIn',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}