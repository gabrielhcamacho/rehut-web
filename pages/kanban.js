import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import HeaderDashboard from '../src/components/Header/HeaderDashboard'
import Sidebar from '../src/components/Sidebar'
import DashboardCharts from '../src/components/Charts/DashboardCharts'
import Drawer from '../src/components/Drawer'
import Board from '../src/components/Kanban/Board'



export default function Kanban() {
  
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <DndProvider backend={HTML5Backend}>
            <HeaderDashboard setIsOpen={setIsOpen}/>
            <div className="flex">
                <Sidebar />
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Board />
            </div>

        </DndProvider>
    )
}