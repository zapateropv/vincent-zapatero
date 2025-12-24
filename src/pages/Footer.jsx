import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='flex items-center justify-around bg-black p-5 text-white '>
      <p className='font-archivo md:text-2xl text-xl'>Vincent.dev</p>
      <p className='text-gray-300 md:text-md text-xs'>© {date} All rights reserved.</p>
    </div>
  )
}

export default Footer
