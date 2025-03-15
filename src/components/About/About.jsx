import { loadSlim } from '@tsparticles/slim';
import BgParticles from '../../utils/BgParticles';
import Social from '../Navbar/Social';
import MyImage from '../Home/MyImage';
const About = () => {
    return (
        <>
            <div className='fixed top-0 right-0'>{BgParticles(loadSlim)}</div>
            <div className='w-full h-full relative z-[0]  animate-slide-left-n'>

                <div className="h-full grid max-md:grid-rows-Row_mxmd md:grid-cols-2 md:text-white place-items-center">
                    <div className='font-jose-sans flex flex-col mt-2 w-5/6 max-sm:w-[90%] bg-[#000] rounded-xl h-max py-1 px-1 md:h-min items-center justify-center gap-3 border-2 border-red-400'>
                        <p className='text-fontSize-lg max-md:text-fontSize-lg-mxmd'>I’m a software trainee passionate about becoming a developer, with a deep interest in coding and growing skills in front-end and back-end development.</p>
                        <p></p>
                        <p className='text-fontSize-lg max-md:text-fontSize-lg-mxmd'>My goal is to master advanced concepts in software development to deepen my understanding and enhance my skills in the field.</p>
                        <p></p>
                    </div>
                    <div className='text-center min-w-[13rem] max-w-[25rem]'>
                        <MyImage />
                    </div>
                </div>
            </div>
            <Social />
        </>

    )
}

export default About