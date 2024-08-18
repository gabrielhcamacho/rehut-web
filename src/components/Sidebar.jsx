import React from 'react'
import { RiContactsLine, RiDashboardLine, RiFileSearchLine, RiAccountPinBoxLine, RiShoppingCart2Line, RiWalletLine, RiSettings3Line } from 'react-icons/ri'

import { MenuContent } from './Drawer'


export default function Sidebar() {
    return (
        <aside className="hidden h-screen w-56 md:flex fixed top-0 z-30 bg-[#1c2536]" aria-label="Sidebar">
                <div className="overflow-y-auto py-5 px-3">
                    <MenuContent/>
                </div>
        </aside>
    )
}
