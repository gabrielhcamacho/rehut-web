/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Checkbox, Form, Input as AntInput, DatePicker, Steps, Modal, Upload, Row, Col } from 'antd';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BiSolidBuildings } from 'react-icons/bi'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaChevronRight } from "react-icons/fa6"
import {
  AiOutlinePlus,
  AiFillDelete,
  AiFillEdit,
  AiOutlineUpload
} from 'react-icons/ai'
import { PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { DataGrid } from '@mui/x-data-grid';
import { BsCardImage, BsCameraVideoFill, BsFiletypePdf } from 'react-icons/bs'

import { Board } from '../../../src/components/Board'
import HeaderDashboard from '../../../src/components/Header/HeaderDashboard'
import Sidebar from '../../../src/components/Sidebar'
import Drawer from '../../../src/components/Drawer'
import { leadsData } from '../../../src/components/Leads/LeadList'
import { StatusText } from '../../../src/components/Leads/styled'

import { MdArrowBackIosNew } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Input from '../../../src/components/Input'
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

const { TextArea } = AntInput;


export default function CreateApartamento() {

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
      pathname: '/empreendimentos/createSecondStep',
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
              <Link href="/empreendimentos">
                <div className="flex cursor-pointer">
                  <MdArrowBackIosNew className="text-text-darker text-xl ml-6 mb-4 hover:brightness-200 cursor-pointer" />
                  <span className='ml-2 font-bold'>Voltar</span>
                </div>
              </Link>
            </div>
          </div>

          <div className='bg-white h-max shadow-md rounded-md mt-2'>
            <div className="flex flex-col p-5 w-full ">
              <span className='text-2xl text-text font-semibold ml-3 mt-2'>Adicionar Apartamento</span>

              <Form
                name="empreendimento"
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Row gutter={1} style={{ marginTop: 30 }}>
                  {/* Coluna 1 */}
                  <Col span={11}>
                    <Form.Item name="nomeEmpreendimento" label="Nome empreendimento">
                      <AntInput className='w-full max-w-[250px] h-9' />
                    </Form.Item>
                    <Form.Item name="cidade" label="Cidade">
                      <AntInput className='w-full max-w-[250px] h-9' />
                    </Form.Item>
                    <Form.Item name="endereco" label="Endereço">
                      <AntInput className='w-full max-w-[250px] h-9' />
                    </Form.Item>
                    <Form.Item name="entrega" label="Entrega">
                      <DatePicker placeholder='selecionar data' className='datepicker w-full max-w-[250px] h-9' />
                    </Form.Item>
                    <Form.Item name="totalPavimentos" label="Total de Pavimentos">
                      <AntInput className='w-full max-w-[250px] h-9' />
                    </Form.Item>
                    <Form.Item name="pavimentosGaragem" label="Pavimentos Garagem">
                      <AntInput className='w-full max-w-[250px] h-9' />
                    </Form.Item>
                    <Form.Item name="descricao" label="Descrição">
                      <TextArea rows={4} />
                    </Form.Item>
                    {/* <textarea
                        placeholder="Descrição"
                        className="w-[250px] lg:w-[300px] border-2 border-slate-100 rounded-md outline-slate-200 p-2 text-text text-md"
                      /> */}

                  </Col>
                </Row>


                

                <div className="w-full flex justify-center items-center mt-6">
                  <button type="primary" htmlType="submit" className="flex self-center items-center rounded px-4 py-2 bg-blue text-white hover:brightness-110 shadow-md shadow-blue-shadow">
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