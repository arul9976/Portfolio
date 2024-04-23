import { loadSlim } from '@tsparticles/slim';
import BgParticles from '../../utils/BgParticles';
import MyImg2 from "/images/arul.png"
import Social from '../Navbar/Social';
const About = () => {
    return (
        <>
            <div className='fixed top-0 right-0'>{BgParticles(loadSlim)}</div>
            <div className='w-full h-full relative z-[21]  animate-slide-left-n'>

                <div className="h-full grid max-md:grid-rows-Row_mxmd md:grid-cols-2 md:text-white place-items-center">
                    <div className='font-jose-sans flex flex-col mt-2 w-5/6 max-sm:w-[90%] h-3/5 py-1 px-1 md:h-4/5 items-center justify-center gap-3 border-2 border-red-400'>
                        <p className='text-fontSize-lg max-md:text-fontSize-lg-mxmd'> I am a software developer with a passion for programming. I specialize in both front-end and back-end development and I am constantly striving to improve my skills.</p>
                        <p className='text-fontSize-lg max-md:text-fontSize-lg-mxmd'>I am a trainee at Zoho Corporation where I am gaining valuable experience and honing my programming skills. I love the challenge of solving complex problems and I am always pushing myself to learn new technologies and programming languages..</p>
                        <p className='text-fontSize-lg max-md:text-fontSize-lg-mxmd'>I take pride in my ability to create responsive and dynamic web interfaces that leave a lasting impression on users. I aim to showcase my passion for coding and my commitment to delivering high-quality products that meet the needs of my clients.</p>
                    </div>
                    <div className='text-center min-w-[13rem] max-w-[25rem]'>
                        <img className='w-full h-full' src={MyImg2} alt="" />
                    </div>
                </div>
            </div>
            <Social />
        </>

    )
}

export default About