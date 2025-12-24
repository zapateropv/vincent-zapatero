import React from 'react'
import NavbarLeft from '../components/NavbarLeft'
import NavbarRight from '../components/NavbarRight'

const Navbar = ({scrollToComponent}) => {
  
  return (
    <div className='flex items-center justify-around p-5 font-bold text-white bg-[#0B1320] '>
     <NavbarLeft scrollToComponent={scrollToComponent}/>
     <NavbarRight scrollToComponent={scrollToComponent}/>

    </div>
  )
}

export default Navbar
