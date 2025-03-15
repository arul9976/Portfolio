import React, { useState } from 'react'
import Swipers from './Swipers'

const Project = () => {

    const [stream, setStream] = useState('Server');

    return (
        <div className='w-full h-full text-white bg-black grid place-items-center'>
            <Swipers stream={stream} setStream={setStream} />
            <div className='fixed bottom-14 right-[5%]'><h1 className='text-9xl opacity-[.3]'>Slide Down</h1></div>

            <div className="flex justify-center  gap-4 mb-8">
                <button
                    onClick={() => setStream('Server')}
                    className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
            ${stream === 'Server'
                            ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    Java Projects
                    {stream === 'Server' && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                    )}
                </button>

                <button
                    onClick={() => setStream('Client')}
                    className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
            ${stream === 'Client'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    HTML/CSS Projects
                    {stream === 'Client' && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                    )}
                </button>

            </div>

        </div>
    )
}

export default Project