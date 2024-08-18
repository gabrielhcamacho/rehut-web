import React from 'react'

import {FeaturedInfo} from './FeaturedInfo'
import ChartCard from './ChartCard'
import HomeWidgets from './HomeWidgets'
import syled from './style/largeWidget'

export function Board() {
  return (
    <div className="flex flex-col md:ml-[12rem] w-full h-screen bg-slate-50 overflow-y-scroll rounded-xl pt-[5rem] sm:pt-[10rem] px-10">

        <FeaturedInfo/>
        <ChartCard/>
        <HomeWidgets/>
        
    </div>
  )
}
