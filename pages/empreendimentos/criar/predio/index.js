/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Button, Checkbox, Form, Input as AntInput, DatePicker, Steps, Modal, Upload, Row, Col, message } from 'antd';
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
import { BsPerson } from 'react-icons/bs'
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router'


import { Board } from '../../../../src/components/Board'
import HeaderDashboard from '../../../../src/components/Header/HeaderDashboard'
import Sidebar from '../../../../src/components/Sidebar'
import Drawer from '../../../../src/components/Drawer'
import { leadsData } from '../../../../src/components/Leads/LeadList'
import { StatusText } from '../../../../src/components/Leads/styled'

import { MdArrowBackIosNew } from 'react-icons/md'
import Input from '../../../../src/components/Input'
import { api } from '../../../../services/api';
import { AuthContext } from '../../../../src/contexts/AuthContext';



const getBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
}
);

console.log(leadsData)


const checkboxOptions = [
  {
    label: 'Hall social com pé direito duplo',
    value: 'Hall social com pé direito duplo',
  },
  {
    label: 'Guarita',
    value: 'Guarita',
  },
  {
    label: 'Delivery',
    value: 'Delivery',
  },
  {
    label: 'Box de Praia',
    value: 'Box de Praia',
  },
  {
    label: 'Bicicletário',
    value: 'Bicicletário',
  },
  {
    label: 'Salas Comerciais',
    value: 'Salas Comerciais',
  },
  {
    label: 'Lazer',
    value: 'Lazer',
  },
  {
    label: 'Espaço Fitness',
    value: 'Espaço Fitness',
  },
  {
    label: 'Espaço Teen',
    value: 'Espaço Teen',
  },
  {
    label: 'Salão de Festas',
    value: 'Salão de Festas',
  },
  {
    label: 'Lounge Externo',
    value: 'Lounge Externo',
  },
  {
    label: 'Brinquedoteca',
    value: 'Brinquedoteca',
  },
  {
    label: 'Play',
    value: 'Play',
  },
  {
    label: 'Área de Fraldário e Lavabos',
    value: 'Área de Fraldário e Lavabos',
  },
  {
    label: 'Massagem',
    value: 'Massagem',
  },
  {
    label: 'Sauna Seca e Úmida',
    value: 'Sauna Seca e Úmida',
  },
  {
    label: 'SPA',
    value: 'SPA',
  },
  {
    label: 'Piscina Infantil',
    value: 'Piscina Infantil',
  },
  {
    label: 'Piscina Adulto',
    value: 'Piscina Adulto',
  },
  {
    label: 'Gourmet 01',
    value: 'Gourmet 01',
  },
  {
    label: 'Gourmet 02',
    value: 'Gourmet 02',
  },
  {
    label: 'Quadra',
    value: 'Quadra',
  },
];


const onChangeCheckBox = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

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


export default function CreateEmpreendimento() {

  const { user } = useContext(AuthContext)
  console.log(user)
  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const [data, setData] = useState(leadsData)
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
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


  const onFinish = async (values) => {
    setLoading(true);

    const data = {
      address: values.endereco,
      apartment_paviments: Number(values.pavimentosApartamentos),
      city: values.cidade,
      headoffice_id: user.headoffice.id, // Add the appropriate headoffice ID here
      common_area_paviments: Number(values.pavimentosAreaComum),
      garage_paviments: Number(values.pavimentosGaragem),
      delivery_date: values.entrega.toISOString(),
      description: values.descricao,
      name: values.nomeEmpreendimento,
      enterprise_category: "APARTMENT", // Add the appropriate category here
      paviments_total: Number(values.totalPavimentos),
    }
    console.log(data)
    try {
      await api.post('/enterprise', data);
      message.success('Primeiro passo do empreendimento realizado com sucesso');
      router.push({
        pathname: '/createSecondStep',
        query: { ...values }
      });
      form.resetFields();
    } catch (error) {
      console.log(error);
      message.error('Erro interno, tente novamente em alguns instantes');
    } finally {
      setLoading(false);
    }
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
            <div className='flex-1 mx-[200px]'>
              <Steps
                size="small"
                current={0}
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
            <div className="flex flex-col p-5 w-full ">
              <span className='text-2xl text-text font-semibold ml-3 mt-2'>Adicionar Empreendimento</span>

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
                    <div className='pr-4'>
                      <Form.Item name="nomeEmpreendimento" label="Nome empreendimento" rules={[{ required: true, message: 'Insira o nome do empreendimento' }]}>
                        <AntInput className='w-full max-w-[250px] md:max-w-full h-9' />
                      </Form.Item>
                      <Form.Item name="cidade" label="Cidade" rules={[{ required: true, message: 'Insira a cidade' }]}>
                        <AntInput className='w-full max-w-[250px] md:max-w-full h-9' />
                      </Form.Item>
                      <Form.Item name="endereco" label="Endereço" rules={[{ required: true, message: 'Insira o endereço' }]}>
                        <AntInput className='w-full max-w-[250px] md:max-w-full h-9' />
                      </Form.Item>
                      <Form.Item name="entrega" label="Entrega" rules={[{ required: true, message: 'Insira a data de entrega' }]}>
                        <DatePicker placeholder='selecionar data' className='datepicker w-full md:max-w-full max-w-[250px] h-9' />
                      </Form.Item>
                      <Form.Item name="totalPavimentos" rules={[{ required: true, message: 'Insira o total de pavimentos' }]} label="Total de Pavimentos">
                        <AntInput className='w-full max-w-[250px] md:max-w-full h-9' />
                      </Form.Item>
                      <Form.Item name="pavimentosGaragem" label="Pavimentos Garagem" rules={[{ required: true, message: 'Insira a quantidade de pavimentos da garagem' }]}>
                        <AntInput className='w-full max-w-[250px] md:max-w-full h-9' />
                      </Form.Item>
                      <Form.Item name="descricao" label="Descrição">
                        <TextArea rows={4} className='w-[250px] md:w-full' />
                      </Form.Item>
                    </div>
                  </Col>


                  {/* Coluna 2 */}
                  <Col span={13} className='border-l border-slate-200'>
                    <div className='pl-4'>
                      <Form.Item name="pavimentosAreaComum" label="Pavimentos Área Comum" rules={[{ required: true, message: 'Insira a quantidade de pavimentos de área comum' }]}>
                        <AntInput className='w-full max-w-[250px] h-9' />
                      </Form.Item>
                      <Form.Item name="pavimentosApartamentos" label="Pavimentos Apartamentos" rules={[{ required: true, message: 'Insira a quantidade de pavimentos de apartamentos' }]}>
                        <AntInput className='w-full max-w-[250px] h-9' />
                      </Form.Item>
                      <div className=''>
                        <p className='mb-4'>Selecione as caracteristicas do empreendiemento</p>
                        {checkboxOptions.map(option => (
                          <Checkbox
                            key={option.value}
                            value={option.value}
                            onChange={onChangeCheckBox}
                            style={{ marginBottom: '10px' }}
                          >
                            {option.label}
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>


                <div className='mt-16 lg:mt-0 space-y-5 flex flex-col'>
                  <Tabs value={value} onChange={handleChangeTab} aria-label="icon label tabs example">
                    <Tab icon={<BsCardImage />} label="GALERIA" />
                    <Tab icon={<BsCameraVideoFill />} label="VIDEOS" />
                    <Tab icon={<BsFiletypePdf />} label="ARQUIVOS" />
                  </Tabs>
                  <CustomTabPanel value={value} index={0}>
                    <div className="w-full">
                      <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                      >
                        {fileList.length >= 8 ? null : uploadButton}
                      </Upload>
                      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img
                          alt="example"
                          style={{
                            width: '100%',
                          }}
                          src={previewImage}
                        />
                      </Modal>
                    </div>
                  </CustomTabPanel>

                  <CustomTabPanel value={value} index={1}>
                    <div className="pb-10">
                      <Upload {...propsVideoUpload}>
                        <button className="flex items-center bg-blue text-white px-3 py-2 rounded-md border-none shadow-md shadow-blue-shadow mb-4">
                          <UploadOutlined className='mr-2' />
                          Upload
                        </button>
                      </Upload>
                    </div>
                  </CustomTabPanel>

                  <CustomTabPanel value={value} index={2}>
                    <div className="pb-10">
                      <Upload {...propsVideoUpload}>
                        <button className="flex items-center bg-blue text-white px-3 py-2 rounded-md border-none shadow-md shadow-blue-shadow mb-4">
                          <UploadOutlined className='mr-2' />
                          Upload
                        </button>
                      </Upload>
                    </div>
                  </CustomTabPanel>
                </div>

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