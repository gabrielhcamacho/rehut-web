import React, { useState } from 'react'
import { Button, Modal, Input, Select, Tag } from 'antd';
import { MdAdd } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

import Card from '../Card'
import { Container } from './syled';


const { Option } = Select;
const children = [];


const handleChange = (value) => {
  console.log(`selected ${value}`);
};



export default function List({ data, index: listIndex }) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button" onClick={showModal}>
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        ))}
      </ul>

      <Modal title="Novo Lead" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className='space-y-5 pl-3'>
          <Input placeholder="Nome Completo" />
          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Tags"
            onChange={handleChange}
          >
            {children}
          </Select>
          <Link href="/leads/newLead">
            <button className='flex items-center bg-slate-100 rounded-md px-4 py-2'>Ir para página de criação <AiOutlineArrowRight className='ml-2' />
            </button>
          </Link>
        </div>

      </Modal>

    </Container>
  );
}