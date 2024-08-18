import React from 'react'

export default function PaddingWrapper({ children }) {
  return (
    <div className="px-5 lg:px-40">
        {children}
    </div>
  )
}
