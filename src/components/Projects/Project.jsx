import React from 'react'
import Swipers from './Swipers'

const Project = () => {
    return (
        <div className='w-full h-full text-white bg-black grid place-items-center'>
            <Swipers />

            <div className='fixed bottom-14 right-[5%]'><h1 className='text-9xl opacity-[.3]'>Slide Down</h1></div>
        </div>
    )
}

export default Project