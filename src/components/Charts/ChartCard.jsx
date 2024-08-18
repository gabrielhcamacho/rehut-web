import React from 'react'

import AreaChart from './AreaChart'
import TooltipComponent from '../Tooltip'


export default function ChartCard({ Chart, Title, Tooltip }) {

  return (
    <div className="md:w-[34rem] max-w-xl h-64 mx-6 md:mx-0 md:first:mt-0 mt-10">
      <div>
        {Chart}
      </div>
      <div className="flex px-6 py-4 items-center border-b-[1px] border-gray-super-light">
        <div className="text-text text-xl font-medium">{Title}</div>
        <TooltipComponent ToolTitle={Tooltip} />
      </div>
    </div>
  )
}
