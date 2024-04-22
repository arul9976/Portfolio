import React from 'react'
import BgParticles from '../../utils/BgParticles'
import { loadSlim } from '@tsparticles/slim'

const Myskill = () => {
    return (
        <>
            <div className='fixed'>{BgParticles(loadSlim)}</div>
            <div className='animate-slide-bottom text-black relative z-20 md:grid-cols-2 gap-4 grid place-items-center w-full h-full'>
                <div className='w-3/4 h-3/4 max-md:h-full max-md:flex max-md:justify-end max-md:flex-col'>
                    <div style={{ '--clr': '#32aa82', '--clr-1': '#f87171' }} className="w-full md:h-4/5 h-2/3 bg-conic p-3 rounded-md">
                        <b className='text-fontSize-xl'>Software Devoloper</b>
                        <p className='text-fontSize-lg'>I enjoy writing clean code and creating useful products.</p>
                        <p className='font-bold text-fontSize-md font-pt-sans text-left ml-5 mt-5'>I CODE IN</p>
                        <p className='font-semibold text-justify text-fontSize-lg ml-10'>
                            Python, Java, Javascript, NodeJs, Springboot, MongoDB
                        </p>
                    </div>
                </div>
                <div className='w-3/4 h-3/4 max-md:h-full md:flex md:justify-end md:flex-col'>
                    <div style={{ '--clr': '#d15858', '--clr-1': '#32aa82' }} className="w-full bg-conic max-md:h-2/3 h-4/5 p-3">
                        <b className='text-fontSize-xl'>Frondend Devoloper</b>
                        <p className='text-fontSize-lg '>It's fun for me to bring new concepts to life. I consider myself fortunate to be a frontend developer because my work has a direct impact on the user's life.</p>
                        <p className='font-bold text-fontSize-md font-pt-sans text-left ml-5 mt-5'>Skills</p>
                        <p className='font-semibold text-fontSize-lg text-justify ml-10'>
                            Html, Css, Js, React, Redux, Sass, TailwindCss, Bootstrap
                        </p>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-5 left-[10%] text-white">
                <b className='text-8xl opacity-[.3]'>Skills</b>
            </div>
        </>
    )
}

export default Myskill