import React from 'react'

export default function Input({placeholder}) {
  return (
    <input placeholder={placeholder ? placeholder : 'placeholder'} className='w-[250px] xl:w-[300px] border-2 border-slate-100 rounded-md outline-slate-200 p-2 text-text text-md'/>
  )
}
