import myPic from '../../../images/arul.png'
import { Image } from '@chakra-ui/react';
const Profile = () => {
    console.log('render HomePage');
    return (
        <>
            <div className='relative text-white animate-animate-top z-10 w-full m-[auto] h-full grid place-items-center'>
                <div className={`transition-all animate-myAni max-md:animate-myAni-md grid grid-cols-2 w-4/5 h-0 max-md:grid-cols-1 max-md:grid-rows-2 max-md:h-full max-sm:w-4/5`}>
                    <div  className="relative font-pt-sans text-black border-y-2 border-l-2 border-black max-md:border-x-2 max-md:border-2 max-md:border-b-0">
                        <div className="translate-x-1/2 -translate-y-1/2 delay-about absolute top-1/2 w-full text-center right-2/4">
                            <p className="text-6xl max-md:text-4xl font-bold ">
                                Hi,
                            </p>
                            <p className="text-fontSize-md-h1 max-md:text-2xl font-semibold"> <span>I'm  </span>Arulkumar M.</p>
                            <p className='text-gray-500 text-fontSize-md max-md:text-fontSize-mxmd'>
                                A self-motivated, highly skilled, and self-driven aspiring Software Engineer at Zoho with the ability to adapt to any situation and the proven ability to grow oneself and others.
                            </p>
                        </div>
                    </div>
                    <div className="relative grid items-center justify-center text-white border-y-2 border-r-2 border-white max-md:border-x-2 max-md:border-2 max-md:border-t-0">
                        <Image className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-imgWidth-vw transition-all' src={myPic} />
                    </div>
                </div>
            </div>

            <div className="animate-myAni_1 fixed top-0 z-0 right-2/4 w-2/4 h-full bg-white max-md:top-0 max-md:h-2/4 max-md:w-impWidth transition-all duration-500 max-md:left-0"></div>
        </>

    )
}

export default Profile