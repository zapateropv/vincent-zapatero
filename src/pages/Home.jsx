import React from 'react'
import HomeLeft from '../components/HomeLeft'
import HomeRight from '../components/HomeRight'
import { forwardRef } from 'react'

const Home = forwardRef((props, ref, ) => {
  return (
    <div className='flex items-center justify-center flex-wrap-reverse
       h-screen md:gap-10  gap-1 m-1 
    ' ref={ref}>
     <HomeLeft scrollToComponent={props.scrollToComponent}/>
     <HomeRight />
     
    </div>
  )
})

export default Home
