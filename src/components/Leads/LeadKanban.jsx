import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { loadLeadsKanban } from '../../../services/apiLeadsKanban'



import Board from './Board'



export default function LeadKanban() {
  
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex w-full">
                <Board />
            </div>

        </DndProvider>
    )
}