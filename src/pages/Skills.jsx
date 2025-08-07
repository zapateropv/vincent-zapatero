import React from 'react'
import StackIcon from "tech-stack-icons";
const Skills = () => {
    return (
        <div className='md:flex md:flex-col md:justify-baseline md:items-center
    xs:flex xs:flex-col xs:items-center max-w-200 m-auto  lg:mt-0 xs:mt-50'>
            <div>
                <h1 className='md:text-5xl  font-poppins font-semibold text-center xs:text-4xl'>Techstack & Tools</h1>
            </div>
            <div className='lg:flex lg:justify-center lg:items-center gap-10
      xs:flex xs:flex-wrap xs:items-center xs:justify-center m-10'>

                <StackIcon name="html5" className='w-15 h-15 cursor-pointer ' />
                <StackIcon name="css3" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="js" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="react" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="tailwindcss" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="c#" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="git" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="npm" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="vscode" className='w-15 h-15 cursor-pointer' />
                <StackIcon name="github" className='w-15 h-15 cursor-pointer'/>
            </div>
        </div>
    )
}

export default Skills
