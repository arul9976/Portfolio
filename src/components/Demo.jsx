import React from 'react'
import UpperText from '../utils/UpperText'
import Social from './Navbar/Social';

const Demo = ({ location }) => {
    console.log('render ', location);
    return (
        <>
            <div className={`${location === 'About' && 'animate-slide-left-n'} ${location === 'Projects' && 'animate-animate-top'} ${location === 'Skills' && 'animate-slide-bottom'} ${location === 'Resume' && 'animate-slide-right-n'} w-full h-screen text-white grid place-items-center`}>
                {UpperText(location)}
            </div>
            <Social />

        </>


    )
}

export default Demo