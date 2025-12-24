import React from 'react'
import { contact, topContact } from '../Contact'

const LeftContact = () => {

    return (
        <div className='flex flex-col items-start justify-start  '>
            {topContact.map((item, index) => (
                <div className='max-w-150' key={index}>
                    <p className='text-white text-4xl font-archivo '>{item.title}</p>
                    <p className='text-gray-400  mt-2'>{item.description}</p>
                </div>
            ))}
            {contact.map((item, index) => (
                <div className='flex items-center gap-2 justify-start mt-5' key={index}>
                    <span className='bg-[#253451] p-2 rounded-full'>
                         {<item.icon className='text-white text-xl ' />}
                    </span>
                    <div className='flex flex-col items-start'>
                        <p className='text-white'>{item.title}</p>
                        <p className='text-gray-400'>{item.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LeftContact
