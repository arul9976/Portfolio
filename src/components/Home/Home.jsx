import React, { useContext } from 'react'
import fvi from "/svgs/code.gif"
import Profile from './Profile';
import { ProfileContext } from '../../utils/Utill_Togg';
import Social from '../Navbar/Social';
const Home = () => {
    const { TogglePro, ToggleBtn } = useContext(ProfileContext);
    return (
        <>
            <Social />

            <div className={`animate-animate-opc fixed z-[1500] bottom-1/2 right-1/2 translate-y-[50%] translate-x-[50%] transition-all duration-1000 ${TogglePro && 'bottom-16 right-12  md:bottom-20 md:right-20'}`}>
                <div onClick={ToggleBtn} className={`${TogglePro ? 'w-20 animate-spin-single h-20' : 'rotate-[-360deg]'}  transition-all duration-1000 w-32 max-sm:w-20 relative rounded-full h-32 max-sm:h-20 p-1.5 after:absolute after:content-normal after:bg-gradient-to-r from-[#e70dcd] via-red-400 to-[#06f5d5] after:w-full cursor-pointer after:h-full after:top-0 after:right-0 after:blur-sm after:rounded-full after:animate-spin-slow`}>
                    <img className='w-11/12 bg-[#1a1a1a] rounded-full z-[1501] absolute right-1/2 translate-x-1/2' src={fvi} alt="" />
                </div>
            </div>
            {
                TogglePro && (
                    <Profile />
                )
            }
            {!TogglePro && <div className="fixed bottom-[40%] right-[50%] translate-x-1/2 translate-y-1/2 text-white">
                <b className='shadowText text-7xl opacity-[.3]'>Click Me</b>
            </div>}
        </>
    )
}

export default Home