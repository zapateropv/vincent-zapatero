import React from 'react'
import { header } from '../skills'

const TopSkills = () => {
  console.log(header)
  return (
    <div>
     {header.map((item, index) => (
      <div className='flex flex-col items-center gap-2 justify-center text-white text-center' key={index}>
        <p className='font-archivo  text-4xl xs:text-5xl '>{item.header}</p>
        <p className='max-w-150 text-center text-gray-300 text-md text-poppins'>{item.desc}</p>
      </div>
     ))}
    </div>
  )
}

export default TopSkills
