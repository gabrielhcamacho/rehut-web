import React, { useState } from 'react'
import produce from 'immer'
import BoardContext from './context'
import { loadLists } from '../../../services/apiKanban'
import List from './List'




const data = loadLists();

export default function Board() {

  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged)
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <div className="flex py-7 md:ml-[12rem] w-full h-screen bg-slate-50 overflow-y-scroll rounded-xl pt-[5rem] sm:pt-[10rem] pl-10">
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </div>
    </BoardContext.Provider>

  )
}
