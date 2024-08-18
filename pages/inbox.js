/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Space, Table, Tag } from 'antd';
import 'antd/dist/antd.css'

import { Board } from '../src/components/Board'
import HeaderDashboard from '../src/components/Header/HeaderDashboard'
import Sidebar from '../src/components/Sidebar'
import Drawer from '../src/components/Drawer'

const columns = [
    {
        title: 'Notificação',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Data',
        dataIndex: 'data',
        key: 'data',
    },
];
const data = [
    {
        key: '1',
        name: 'Novos dados de relatórios disponivel',
        data: '13/06/2022',
    },
    {
        key: '2',
        name: 'Novo negócio fechado',
        data: '12/06/2022',
    },
    {
        key: '3',
        name: 'Nova campanha esta sendo um sucesso!',
        data: '01/06/2022',
    },
];

export default function inbox() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <HeaderDashboard setIsOpen={setIsOpen} />
            <div className="flex">
                <Sidebar />
                <Board>

                    <span className="font-bold text-text-darker text-2xl ml-3 mb-3">Inbox</span>
                    <Table columns={columns} dataSource={data} />

                </Board>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

        </div>
    )
}
