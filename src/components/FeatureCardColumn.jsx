/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

export default function FeatureCardColumn({
    src,
    altText,
    title,
    text,}) {

  return (
    <div className="flex flex-col text-center md:text-left lg:justify-start px-10 py-6">
      <div className="m-0 p-0">
        <Image src={src} altText={altText}/>
      </div>

        <div className="w-full flex flex-col lg:gap-[35px]">
            <h4 className="color-#0f2137 font-semibold text-xl">{title}</h4>
            <p className="text-lg mt-3 lg:mt-0">{text}</p>
        </div>
    </div>
  )
}
