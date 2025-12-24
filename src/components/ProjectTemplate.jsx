import React from 'react'
import { Projects } from '../Projects.js'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectTemplate = () => {

    
    return (
        <div className='flex justify-center '>
            <div className='grid xs:grid-cols-1 sm:grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 p-4 md:p-6 lg:p-10 gap-8 mt-10  '>
                {Projects.map((item, index) => (
                    <div key={index} className='text-white group bg-[#0B1320] min-w-0  lg:w-120 md:w-90 w-full flex flex-col justify-start items-start  
                rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl cursor-pointer hover:scale-105 transition duration-300 ease-in'>
                        <div className='relative w-full'>
                            <img src={item.link} className='w-full h-60 rounded-tl-2xl rounded-tr-2xl' />
                            <Link className='absolute right-4 bottom-5 bg-[#253451] text-sm w-8 h-8 flex items-center 
                         justify-center rounded-full' to={item.root}>
                                <FaExternalLinkAlt className='text-white'
                                 />
                            </Link>
                        </div>
                        <div className='p-5'>
                            <p className='font-archivo text-xl md:text-2xl mb-3 text-wrap '>{item.title}</p>
                            <p className='text-gray-400 mb-3 text-wrap '>{item.description}</p>
                            <div className='flex items-center flex-wrap gap-5'>
                                {item.stack.map((item, index) => (
                                    <p className='bg-[#253451] rounded-2xl  p-2 text-sm' key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectTemplate
