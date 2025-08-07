import React from 'react'
import portfolio from '/src/assets/vincent.jpg'
import eugene from '/src/assets/eugene.png'

const Home = ({about}) => {
  return (
   <>
    <div className='lg:flex lg:flex-row lg:justify-around lg:items-center lg:max-w-300 lg:m-auto lg:h-screen
    xs:flex-col xs:m-auto xs:flex xs:items-center xs:p-10 relative z-10   xs:mt-10   '>
        <div >
            <div className='max-w-200 text-center'>
                <h1 className='md:text-7xl xs:text-6xl font-bold font-archivo text-blue-900'>Vincent Zapatero</h1>
                <h2 className='font-semibold mb-5 text-3xl mt-2 '>Front-End Developer</h2>
                <p className='md:text-lg xs:md xs:mb-10 max-w-150 font-roboto'>{about}</p>
            </div>
           
        </div>
        <div>
            <img src={eugene} className='md:w-70 md:h-70 xs:w-50 xs:h-50 rounded-xl md:ml-5   border-white border-2'/>
        </div>
    </div>
   </>
  )
}

export default Home
