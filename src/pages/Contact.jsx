import React from 'react'
import LeftContact from '../components/LeftContact'
import RightContact from '../components/RightContact'
import { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
    return (
        <div >
            <p className='text-center text-white font-archivo text-2xl md:text-5xl mt-10'>Get in Touch</p>

            <div className="flex justify-center items-start gap-8 flex-wrap p-10" ref={ref}>
                <LeftContact />
                <RightContact />
            </div>
        </div>
    )
})

export default Contact
