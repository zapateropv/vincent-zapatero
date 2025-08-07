import React from 'react'


import {Works} from '../Works.js'
const Project = () => {

  console.log(Works)
  return (
    <>
   <div className="flex flex-col items-center p-10 mt-20 mb-50">
  <div>
    <h1 className="md:text-5xl xs:text-4xl font-archivo mb-10 text-center">
      Recent Projects
    </h1>
  </div>

  <div className="flex flex-wrap justify-center gap-10">
    {Works.map((item, index) => (
      <div key={index} className="flex flex-col justify-center items-center max-w-[500px] border-2 border-gray-100 bg-gray-900 rounded-2xl shadow-xl pb-10">
        <a href={item.links} target='_blank'>
          <img src={item.image} className="w-[500px] cursor-pointer rounded-sm" ></img>
        </a>
        <h1 className="md:text-lg sm:text-md font-semibold  font-poppins mt-10 text-center text-white">{item.title}</h1>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Project
