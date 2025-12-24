import React from 'react'
import { about } from '../about.js'


const HomeLeft = ({scrollToComponent}) => {
  return (
    <div>
      {about.map((item, index) => (
        <div className='text-white flex flex-col items-center justify-center
        max-w-200 text-center ' key={index}>
          <p className='md:text-6xl text-5xl font-archivo'>{item.name}</p>
          <p className='md:text-2xl text-xl mt-2'>{item.role}</p>
          <p className='mt-5  md:text-md  text-sm leading-7 font-poppins'>{item.about}</p>
          <div className='text-white flex lg:justify-start items-center justify-center gap-5 w-full mt-10'>
            <button className='bg-blue-600 hover:bg-blue-700  px-5 py-3 font-semibold rounded-sm cursor-pointer'
            onClick={()=>scrollToComponent("Project")}>View Projects</button>
            <button className='bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold  rounded-sm cursor-pointer'
             onClick={()=>scrollToComponent("Contact")}>Contact Me</button>
          </div>
        </div>
      ))}

    </div>
  )
}



export default HomeLeft
