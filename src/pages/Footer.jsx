import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <div className='bg-blue-900 max-h-15 md:flex md:flex-row md:justify-around md:items-center p-5 
    xs:flex xs:flex-col xs:items-center xs:justify-center font-poppins text-white '>
      <div>
        <p className='cursor-pointer'>©{year} Vincent Zapatero</p>
      </div>
      <div className='md:flex md:justify-between md:items-center gap-5
      xs:flex'>
       <a href='https://github.com/zapateropv' target='_blank'><p className='cursor-pointer hover:text-green-900'>GitHub</p></a> 
        <p className='cursor-pointer hover:text-green-900'>Facebook</p>
        <p className='cursor-pointer hover:text-green-900'>LinkedIn</p>
      </div>
    </div>
  )
}

export default Footer
