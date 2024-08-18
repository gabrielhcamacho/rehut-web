import React from 'react'
import Image from 'next/image'

export default function FeatureCardColumn({
    src,
    altText,
    title,
    text,}) {

  return (
    <div className="flex-column lg:flex text-center md:text-left lg:justify-start py-6 items-align">
      <div>
        <Image src={src} alt={altText}/>
      </div>

        <div className="w-full flex flex-col lg:pl-6 ">
            <h4 className="color-#0f2137 font-semibold text-lg">{title}</h4>
            <p className="text-lg mt-3 lg:mt-2">{text}</p>
        </div>
    </div>
  )
}
