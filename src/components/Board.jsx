import React from 'react'


export function Board({children}) {
  return (
    <div className="flex flex-col md:ml-[14rem] w-full h-screen bg-slate-50 overflow-y-scroll rounded-xl pt-[6rem] sm:pt-[7rem] px-10 pb-10">
        {children}
    </div>
  )
}
