import React, { useState } from 'react';
import { Board } from '../../src/components/Board';
import { Tabs } from 'antd';
import HeaderDashboard from '../../src/components/Header/HeaderDashboard';
import Sidebar from '../../src/components/Sidebar';
import Drawer from '../../src/components/Drawer';
import LeadList from '../../src/components/Leads/LeadList';
import LeadKanban from '../../src/components/Leads/LeadKanban';

const { TabPane } = Tabs;

const Leads = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <HeaderDashboard setIsOpen={setIsOpen} />
        <Board>
          <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            size="large"
            tabBarGutter={40}
            tabPosition="top"
          >
            <TabPane tab="Leads" key="1">
              <LeadList />
            </TabPane>
            <TabPane tab="Qualificação" key="2">
              <LeadKanban />
            </TabPane>
          </Tabs>
        </Board>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Leads;
