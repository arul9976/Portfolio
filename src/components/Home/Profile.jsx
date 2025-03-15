import MyImage from './MyImage';

const Profile = () => {
    return (
        <>
            <div className='relative text-white animate-animate-top z-10 w-full m-[auto] h-full grid place-items-center border-white-900'>
                <div className={`transition-all animate-myAni max-md:animate-myAni-md grid grid-cols-2 w-4/5 h-0 max-md:grid-cols-1 max-md:grid-rows-2 max-md:h-full max-sm:w-4/5`}>
                    <div className="relative font-pt-sans text-black border-y-2 border-l-2 border-black max-md:border-x-2 max-md:border-2 max-md:border-b-0">
                        <div className="translate-x-1/2 -translate-y-1/2 delay-about absolute top-1/2 w-full text-center right-2/4">
                            <p className="text-6xl max-md:text-4xl font-bold ">
                                Hi,
                            </p>
                            <div className="text-[3.5rem] md:text-[3.0rem] w-max mx-auto flex items-center justify-center font-semibold gap-3">
                                <span className="flex-1">I'm</span>
                                <div>
                                    <p className="h-full flex-2 overflow-hidden whitespace-nowrap border-r-2 border-gray-500 animate-typing animate-blink">
                                        Arulkumar M.
                                    </p>
                                </div>
                            </div>
                            <p className='text-gray-500 mt-8 animate-fade-in text-fontSize-x-sm'>
                                Backend Developer, Excited to learn new technologies and grow in my skills.
                            </p>
                            {/* <p class="text-gray-500 h-full text-fontSize-md max-w-full overflow-hidden whitespace-nowrap border-r-2 border-gray-500 animate-typing animate-blink">
                                Backend Developer, Excited to learn new technologies and grow in my skills.
                            </p> */}
                        </div>
                    </div>
                    <div className="relative grid items-center justify-center text-white border-y-2 border-r-2 border-white max-md:border-x-2 max-md:border-2 max-md:border-t-0">
                        <MyImage />
                    </div>
                </div>
            </div>

            <div className="animate-myAni_1 fixed top-0 z-0 right-2/4 w-2/4 h-full bg-white max-md:top-0 max-md:h-2/4 max-md:w-impWidth transition-all duration-500 max-md:left-0"></div>
        </>

    )
}

export default Profile