import React from 'react'
import "reactjs-flip-card"
import ReactFlipCard from 'reactjs-flip-card'
const Project1 = ({ Text, Img, linkW, linkG }) => {
    const styles = {
        container: {
            width: '100%',
            height: 'min-content'

        },
        flipCardStyle: {
            display: 'grid',
            placeItems: 'center',


        },
        card: {
            width: '100%',
            height: 'min-content'
        },
        cardBack: {
            width: '100%',
            height: '260px',
            background: '#000'
        }
    }

    return (
        <div className='grid md:grid-cols-2 w-5/6 p-2 max-md:flex max-md:flex-col-reverse max-md:justify-center gap-2 max-md:h-min h-4/5 m-auto border-2 border-red-400 place-items-center'>
            <div className="flex flex-row justify-center items-center">
                <p className='h-full text-cs font-jose-sans'>
                    {Text}
                </p>
            </div>
            <div className={`flex justify-center items-center w-[100%] h-full cursor-pointer`}>
                <ReactFlipCard
                    frontStyle={styles.card}
                    backStyle={styles.cardBack}
                    containerStyle={styles.container}
                    flipCardStyle={styles.flipCardStyle}
                    frontComponent={<img src={Img} alt="" />}
                    backComponent={
                        <div className="w-full h-full flex justify-center items-center border-2 border-[#00cba9] gap-10">
                            <a href={linkW} target='_blank' className='grid place-items-center rounded-lg bg-red-400 w-24 h-12'>
                                Visit
                            </a>
                            {
                                linkG &&
                                <a href={linkG} target='_blank' className='grid place-items-center rounded-full border-2 border-[#00cba9] w-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </a>
                            }
                        </div>
                    }
                />

            </div>
        </div>
    )
}

export default Project1