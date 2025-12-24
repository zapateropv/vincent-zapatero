import React from 'react'

const NavbarLeft = ({scrollToComponent}) => {
  return (
    <div>
      <p className=' font-poppins font-bold text-2xl cursor-pointer'
      onClick={()=>scrollToComponent("About")}>Vincent.dev</p>
    </div>
  )
}

export default NavbarLeft
