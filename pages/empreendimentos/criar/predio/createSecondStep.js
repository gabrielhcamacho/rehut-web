/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Card, Form, Input, Space, Typography, Steps } from 'antd';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BiSolidBuildings } from 'react-icons/bi'
import PropTypes from 'prop-types';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  AiOutlinePlus,
  AiFillDelete,
  AiFillEdit,
  AiOutlineUpload
} from 'react-icons/ai'
import { PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { FaChevronRight } from "react-icons/fa6"
import { DataGrid } from '@mui/x-data-grid';
import { BsCardImage, BsCameraVideoFill, BsFiletypePdf } from 'react-icons/bs'
import { CloseOutlined } from '@ant-design/icons';


import { Board } from '../../../../src/components/Board'
import HeaderDashboard from '../../../../src/components/Header/HeaderDashboard'
import Sidebar from '../../../../src/components/Sidebar'
import Drawer from '../../../../src/components/Drawer'
import { leadsData } from '../../../../src/components/Leads/LeadList'
import { StatusText } from '../../../../src/components/Leads/styled'

import { MdArrowBackIosNew } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { useRouter } from 'next/router'
// import Input from '../../src/components/Input'
import { parseCookies } from 'nookies';



const getBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
}
);

console.log(leadsData)



const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
}


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nomeCompleto',
    headerName: 'Nome',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
  },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 110,
    editable: true,
    align: "left",
    headerAlign: "left"
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'ultimoContato',
    headerName: 'Ultimo Contato',
    width: 190,
    editable: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 110,
    editable: true,
    align: "left",
    renderCell: (params) => {
      return (
        <div className=''>
          <StatusText
            className="text-base"
            status={params.row.status}
            onClick={() => handleDelete(params.row.id)}
          >{params.row.status}</StatusText>
        </div>
      );
    },
  },
  {
    field: 'Opção',
    headerName: 'Opção',
    width: 110,
    editable: true,
    renderCell: (params) => {
      return (
        <div className='flex justify-around w-full items-center'>
          <Link href={"/leads/" + params.row.id}>
            <AiFillEdit className='text-text text-lg cursor-pointer hover:brightness-150' />
          </Link>
          <AiFillDelete
            className="text-primary text-lg cursor-pointer hover:brightness-110"
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      );
    },
  },
];


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


export default function CreateSecondStep() {

  const [form] = Form.useForm();

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


  const onFinish = (values) => {
    console.log('Success:', values);
    router.push({
      pathname: '/empreendimentos/criar/predio/createThirdStep',
      query: { ...values },
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className=''>
      <HeaderDashboard setIsOpen={setIsOpen} />
      <div className="flex">
        <Sidebar />

        <Board>
          <div className="flex flex-row">
            <div className="w-min">
              <Link href="/empreendimentos/create">
                <div className="flex cursor-pointer">
                  <MdArrowBackIosNew className="text-text-darker text-xl ml-6 mb-4 hover:brightness-200 cursor-pointer" />
                  <span className='ml-2 font-bold'>Voltar</span>
                </div>
              </Link>
            </div>
            <div className='flex-1 mx-[200px]'>
              <Steps
                size="small"
                current={1}
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

          <div className='bg-white h-max shadow-md rounded-md mt-2 pb-10'>
            <div className="flex flex-col p-5 w-full ">
              <span className='text-2xl text-text font-semibold ml-3 mb-10'>Adicionar Plantas</span>
              <Form
                name="plantas"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 18,
                }}
                form={form}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  items: [{}],
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.List name="plantas">
                  {(fields, { add, remove }) => (
                    <div
                      style={{
                        display: 'flex',
                        rowGap: 16,
                        flexDirection: 'column',
                      }}
                    >
                      {fields.map((field) => (
                        <Card
                          size="small"
                          title={`Planta ${field.name + 1}`}
                          key={field.key}
                          extra={
                            <CloseOutlined
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          }
                        >
                          <Form.Item label="Planta" name={[field.name, 'name']}>
                            <Input className='h-9' />
                          </Form.Item>

                          {/* Nest Form.List */}
                          <Form.Item label="Detalhes">
                            <Form.List name={[field.name, 'list']}>
                              {(subFields, subOpt) => (
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: 16,
                                  }}
                                >
                                  <div className="flex flex-row gap-4">
                                    <Form.Item noStyle name={'metragem'}>
                                      <Input placeholder="metragem m²" className='h-9' />
                                    </Form.Item>
                                    <Form.Item noStyle name={'suites'}>
                                      <Input placeholder="qtd suites" className='h-9' />
                                    </Form.Item>
                                  </div>
                                  <div className="flex flex-row gap-4">
                                    <Form.Item noStyle name={'banheiros'}>
                                      <Input placeholder="qtd banheiros" className='h-9' />
                                    </Form.Item>
                                    <Form.Item noStyle name={'quartos'}>
                                      <Input placeholder="qtd quartos" className='h-9' />
                                    </Form.Item>
                                  </div>
                                </div>
                              )}
                            </Form.List>
                          </Form.Item>
                        </Card>
                      ))}

                      <Button type="dashed" onClick={() => add()} block>
                        + Adicionar planta
                      </Button>
                    </div>
                  )}
                </Form.List>

                {/* <Form.Item noStyle shouldUpdate>
                  {() => (
                    <Typography>
                      <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                  )}
                </Form.Item> */}

                <div className="w-full flex justify-center items-center mt-10">
                  <button type="primary" htmlType="submit" className="my-6 flex self-center items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
                    Próximo
                    <FaChevronRight className='ml-2' />
                  </button>
                </div>
              </Form>
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