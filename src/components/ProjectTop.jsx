import React from 'react'
import {ProjectHeader} from '../Projects.js'

const ProjectTop = () => {
  return (
    <div>
      {ProjectHeader.map((item, index) => (
        <div className='text-white text-center mt-40' key={index}>
            <p className='font-archivo text-4xl'>{item.title}</p>
            <p className=' text-gray-300 mt-4'>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectTop
