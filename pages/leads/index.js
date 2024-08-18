import React from 'react'
import { Board } from '../../src/components/Board'
import { Tabs } from 'antd';
import { getSession, useSession } from "next-auth/react"

import HeaderDashboard from '../../src/components/Header/HeaderDashboard'
import Sidebar from '../../src/components/Sidebar'
import Drawer from '../../src/components/Drawer'
import LeadList from '../../src/components/Leads/LeadList'
import LeadKanban from '../../src/components/Leads/LeadKanban';
import { Login } from '../../src/components/Login'


const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function Leads() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (

    <div>
      <Sidebar />
      <HeaderDashboard setIsOpen={setIsOpen} />
      <div className="flex">
        <Board>
          <Tabs defaultActiveKey="1" 
          onChange={onChange} 
          size="large" 
          tabBarGutter={40}
          tabPosition="top" 
          >
            <TabPane tab="Leads" key="1" >
              <LeadList/>
            </TabPane>
            
            <TabPane tab="Qualificação" key="2">
              <LeadKanban/>
            </TabPane>
          </Tabs>
         
        </Board>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

    </div>

  )
}
