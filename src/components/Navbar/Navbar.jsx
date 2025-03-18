import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import UpperText from '../../utils/UpperText'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ProfileContext } from '../../utils/Utill_Togg'
import './Nav.scss'
const Navbar = () => {
    const { TogglePro, ToggleBtn } = useContext(ProfileContext)
    const location = useLocation();
    const navs = ['about', 'skills', 'projects', 'MyInfo']
    const sendMail = () => {
        const emailAddress = "arulkumar0172004@gmail.com"
        const subject = "Hello"

        // const HandleMail = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`
        const HandleMail = `https://mail.zoho.com/zm/#compose`
        return HandleMail;
    }
    return (
        <>
            <div className="fixed z-[1] w-full h-min right-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fillOpacity="1" d="M0,192L80,176C160,160,320,128,480,101.3C640,75,800,53,960,74.7C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <div className='w-full relative'>
                <div className={`max-md:fixed md:animate-slide-left-n  max-md:top-4 max-md:right-1/2 max-md:translate-x-1/2 z-30 absolute left-1 top-0 mt-1 text-2xl ${TogglePro && 'max-md:hidden'}`}>
                    <Link to={'/'} onClick={TogglePro && ToggleBtn}>
                        <div className="flex flex-row-reverse item-center justify-center gap-2">
                            <div className='flex items-center'>Port<span className='text-red-400 font-semibold'>F</span>olio</div>
                            <div className="max-md:fixed max-md:top-12 cursor-pointer bg-red-400 rounded-full p-2 grid place-items-center max-md:right-1/2 max-md:translate-x-1/2">
                                <ArrowBackIcon />
                            </div>
                        </div>

                    </Link>
                </div>
                <div className={`${(location.pathname !== '/' || TogglePro) && 'max-md:hidden'} absolute z-30 right-1 top-2 flex list-none gap-2 items-center justify-center transition-all duration-300`}>
                    {
                        navs.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item !== "resume" &&
                                        <NavLink to={item !== "resume" && UpperText(item)}>
                                            <li style={{ '--pos-X': 'left-2', '--de-lay': index }} className={`md:animate-myAni-slide-top flex justify-center items-center md:delay-home md:transition-all md:duration-500  ${`max-md:fixed ${index === 0 && 'max-md:animate-slide-left max-md:-left-4 max-md:top-28 max-md:-rotate-90'} ${index === 1 && 'max-md:animate-slide-top max-md:right-2 max-md:top-16 '} ${index === 2 && 'max-md:animate-slide-bottom max-md:left-2 max-md:bottom-36 '}`} cursor-pointer mx-2 px-2 py-1 font-semibold hover:border-b-2 hover:border-b-red-400 transition-all duration-100`}>
                                                {UpperText(item)}
                                            </li>
                                        </NavLink>
                                    }
                                    {item === "resume" &&
                                        <li style={{ '--pos-X': 'left-2', '--de-lay': index }} className={`md:animate-myAni-slide-top flex justify-center items-center md:delay-home md:transition-all md:duration-500  ${`max-md:fixed ${index === 3 && 'max-md:animate-slide-right max-md:rotate-90 max-md:-right-2 max-md:bottom-28 '}`} cursor-pointer mx-2 px-2 py-1 font-semibold hover:border-b-2 hover:border-b-red-400 transition-all duration-100`}>
                                            <a className='flex max-md:flex-row justify-center items-center' target='_blank' href={'https://drive.google.com/file/d/1uoNLrZsNxiaOuq55MSwQdGVX7XXKS5uH/view?usp=sharing'} download='MyResume0524.pdf'>
                                                {UpperText(item)}
                                                <svg xmlns="http://www.w3.org/2000/svg" className='max-md:-rotate-[90deg] m-1 bi bi-download' width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                                </svg>
                                            </a>
                                        </li>
                                    }
                                </div>
                            )
                        })
                    }
                    {/* <div className={`${(location.pathname !== '/' || TogglePro) && 'max-md:hidden'} md:animate-slide-right-n max-md:fixed max-md:top-3/4 max-md:right-1/2 max-md:translate-x-1/2 max-md:translate-y-1/2 grid place-items-center w-28 h-10 rounded-2xl border-2 font-semibold border-red-400 hover:bg-red-400`}>
                        <a target='_blank' href={sendMail()}>Say Hello</a>
                    </div> */}
                </div>


            </div>
        </>
    )
}

export default Navbar