import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Styles.css';
import img1 from "/images/project_01.png"
import img2 from "/images/project_02.png"
import img3 from "/images/project3.png"
import img4 from "/images/NotesApp.png"
import img5 from "/images/Portfolio.png"
import img6 from "/images/MemoryGame.png"
import wordMazeImg from "/images/wordmaze.png"
import zTL from "/images/zTL.png"
import hashMapImg from "/images/hashMapImg.jpg"
import CodeFusionImg from "/images/CodeFusion1.png"

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import FlipCart from './FlipCart';

export default function Swipers({ stream, setStream }) {


    const Data =
    {
        "Server": [
            {
                Text: 'A custom HashMap in Java is a user-defined key-value store with a hash function',
                Img: hashMapImg,
                linkG: 'https://github.com/arul9976/CustomHashMap',
                // linkW: 'https://bit.ly/MyTodoApp'
            },
            {
                Text: 'A real-time web code editor with Docker-based isolation spaces, providing secure coding environments for each user. It features integrated chat functionality for collaboration, leveraging Docker containers to ensure dependency isolation and scalability.',
                Img: CodeFusionImg,
                linkG: 'https://github.com/arul9976/CodeFusion/tree/team',
                linkW: 'https://bit.ly/MyTodoApp'
            },
            {
                Text: 'The to-do app uses CRUD to let users manage tasks with Create, Read, Update, and Delete. It’s built with Node.js',
                Img: img1,
                linkG: 'https://github.com/arul9976/Todoapp',
                linkW: 'https://bit.ly/MyTodoApp'
            },



        ],

        "Client": [
            {
                Text: "This is an zTimeLine That Shows ours Zoho's MileStones!",
                Img: zTL,
                linkG: 'https://github.com/arul9976/wordMaze',
                linkW: 'https://arul9976.github.io/zTimeLine/'

            },
            {
                Text: "This is an WordMaze Game using Vannila Javascript. Test your memory with our fun and challenging puzzle game!",
                Img: wordMazeImg,
                linkG: 'https://github.com/arul9976/wordMaze',
                linkW: 'https://arul9976.github.io/WordMaze/'

            },
            {
                Text: "This is an Memory Game using Vannila Javascript. Test your memory with our fun and challenging memory game! See how many pairs you can match before the time runs out.",
                Img: img6,
                linkG: 'https://github.com/arul9976/Memory_Game',
                linkW: 'https://arul9976.github.io/Memory_Game/'
            }
        ]
    }

    // {
    //     Text: 'This full-stack project showcases the power of Node.js for server-side logic, Tailwind css for styling, and JavaScript for dynamic client-side functionality. The integration of these technologies, coupled with effective version control using Git, results in a robust and scalable application.',
    //     Img: img2,
    //     linkG: 'https://github.com/arul9976/Cryptotrackerapp',
    //     linkW: 'https://arul9976.github.io/Cryptotrackerapp/'
    // },
    // {
    //     Text: 'I created a login page project from scratch that demonstrates my skills in HTML, CSS, and JavaScript. The page is clean, user-friendly, and secure, with features such as password encryption and input validation. I am proud of this project as it showcases my ability to create functional and visually appealing web pages.',
    //     Img: img3,
    //     linkG: 'https://github.com/arul9976/Login',
    //     linkW: 'https://todoappbackend-10085207710.development.catalystappsail.com/Login'
    // },
    // {
    //     Text: 'The CRUD functionality allows users to seamlessly manage data with Create, Read, Update, and Delete operations. Users can add new entries, view existing data, modify information, and remove items as needed. This functionality is built using Java SpringBoot for server-side logic, providing a robust and efficient backend.',
    //     Img: img4,
    //     linkG: 'https://github.com/arul9976/NotesApp',
    //     linkW: 'https://arul9976.github.io/NotesApp/'
    // },
    // {
    //     Text: 'This portfolio website is a project that I created during my beginner stage of learning web development using HTML, CSS, and JavaScript. It may not be my latest work, but it showcases my early efforts and progress in this field.',
    //     Img: img5,
    //     linkG: 'https://github.com/arul9976/My_PortFolio',
    //     linkW: 'https://arul9976.github.io/My_PortFolio/'
    // },


    return (
        <>
            <Swiper
                direction={'horizontal'}
                slidesPerView={2}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper flex flex-row"
            >
                {
                    Data[stream].map((item, index) => {
                        return (
                            <SwiperSlide key={index} style={{ display: 'flex !important', flexDirection: 'row !important' }} className='animate-slide-top relative z-20'>
                                <FlipCart Text={item.Text} Img={item.Img} linkW={item.linkW} linkG={item.linkG} />
                            </SwiperSlide>
                        );

                    })
                }

            </Swiper>
        </>
    );
}