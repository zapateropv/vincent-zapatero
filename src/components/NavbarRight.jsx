import React from 'react'
import {navbar} from '../navbar.js'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState,useRef } from 'react';


const NavbarRight = ({scrollToComponent}) => {


  const [toggle, setToggle] = useState(false);

    const toggleClick = () => {
        setToggle(!toggle)
    }
  return (
    <div className='flex'>
      <ul className='md:flex gap-10  hidden'>
        {navbar.map((item, index) => (
            <li key={index} 
                className='cursor-pointer font-poppins '
               onClick={()=>scrollToComponent(item.refKey)}
               >
                    {item.label}
            </li>
        ))}
      </ul>
       <GiHamburgerMenu className='md:invisible visible' 
       onClick={()=> toggleClick()}/>
       <div className={`absolute bg-[#0B1320] w-full p-5 gap-5 left-0 top-20 flex flex-col items-start justify-center
    transform transition-all duration-300 ease-in-out
    ${toggle ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
          {navbar.map((item, index) => (
            <p key={index} 
                className='cursor-pointer font-normal  '
                onClick={()=>scrollToComponent(item.refKey)}>
                    {item.label}
            </p>
        ))}
       </div>
    </div>
  )
}

export default NavbarRight
