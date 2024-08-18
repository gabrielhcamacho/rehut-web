import React from 'react'

import HeaderDashboard from '../src/components/Header/HeaderDashboard'
import Sidebar from '../src/components/Sidebar'
import DashboardCharts from '../src/components/Charts/DashboardCharts'
import Drawer from '../src/components/Drawer'


export default function Trends() {

    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <HeaderDashboard setIsOpen={setIsOpen}/>
            <div className="flex">
                <Sidebar />
                <DashboardCharts/>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>

        </div>
    )
}
