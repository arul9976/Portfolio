import React, { useContext, useState } from 'react'
import { ProfileContext } from '../../utils/Utill_Togg'
import SocialPopup from './SocialPopup';

const Social = () => {
    const { TogglePro } = useContext(ProfileContext);
    const [isOpen, setIsOpen] = useState(false);

    const svgs = [
        'https://yt3.googleusercontent.com/ytc/AIdro_mLyU-etiQ2Xe9L4eZmxr-UNWwvi1fiY6bJG6w-XsxNBQ=s900-c-k-c0x00ffffff-no-rj',
        'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png',
        'https://png.pngtree.com/element_our/png/20180827/linkedin-social-media-icon-png_71812.jpg',
    ]
    const urls = [
        '',
        'https://github.com/arul9976/',
        'https://www.linkedin.com/in/arul-kumar-m-494791254/',
    ]

    return (
        <div className={`max-mini:transition-all max-mini:duration-100 ${TogglePro ? 'max-mini:w-[310px]' : 'max-mini:w-[300px]'} max-mini:pl-8 max-mini:right-0 w-min max-mini:h-[13%] h-4/6 pt-6 text-white z-[25] absolute bottom-0 right-4 `}>
            <div className="mini:after:animate-line-ani-h max-mini:after:animate-line-ani-w max-mini:after:right-0 mini:after:bottom-20 mini:h-4/5 mini:justify-center flex mini:flex-col gap-5 relative  after:absolute after:content-[''] after:max-mini:w-[400px] after:max-mini:h-1.5 after:w-1.5 after:h-[500px] after:bg-[#00cba9] after:right-1/2 after:bottom-1/2 after:translate-x-1/2 after:translate-y-1/2">

                {svgs.map((item, index) => {
                    if (index == 0) {
                        return <SocialPopup isOpen={isOpen} setIsOpen={setIsOpen} iUrl={item} />
                    }
                    return (
                        <a key={index} style={{ '--in-dex': index }} target='_blank' href={urls[index]} className='delay-social cursor-pointer overflow-hidden hover:bg-[#00cba9] hover:border-red-400  mini:animate-animate-opc-1 max-sm:animate-animate-opc-2 z-30 w-svgWidth-vw border-2 border-[#00cba9] bg-red-500 p-2 rounded-full'>
                            <img src={item} className='shadow-lg 
                  hover:scale-[1.8] transform transition-all duration-300 scale-[1.5]' alt="" />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Social