import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Styles.css';
import img1 from "../../../images/project_01.png"
import img2 from "../../../images/project_02.png"
import img3 from "../../../images/project3.png"
import img4 from "../../../images/NotesApp.png"
import img5 from "../../../images/Portfolio.png"

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import Project1 from './Project1';

export default function Swipers() {
    const Data = [
        {
            Text: 'The CRUD functionality allows users to seamlessly manage data with Create, Read, Update, and Delete operations. Users can add new entries, view existing data, modify information, and remove items as needed. This functionality is built using Node.js for server-side logic, providing a robust and efficient backend.',
            Img: img1,
            linkG: 'https://github.com/arul9976/Todoapp',
            linkW: 'https://todoapp-0dpq.onrender.com/Dashboard'
        },
        {
            Text: 'This full-stack project showcases the power of Node.js for server-side logic, Tailwind css for styling, and JavaScript for dynamic client-side functionality. The integration of these technologies, coupled with effective version control using Git, results in a robust and scalable application.',
            Img: img2,
            linkG: 'https://github.com/arul9976/Cryptotrackerapp',
            linkW: 'https://arul9976.github.io/Cryptotrackerapp/'
        },
        {
            Text: 'I created a login page project from scratch that demonstrates my skills in HTML, CSS, and JavaScript. The page is clean, user-friendly, and secure, with features such as password encryption and input validation. I am proud of this project as it showcases my ability to create functional and visually appealing web pages.',
            Img: img3,
            linkG: 'https://github.com/arul9976/Login',
            linkW: 'https://todoapp-0dpq.onrender.com/Login'
        },
        {
            Text: 'The CRUD functionality allows users to seamlessly manage data with Create, Read, Update, and Delete operations. Users can add new entries, view existing data, modify information, and remove items as needed. This functionality is built using Java SpringBoot for server-side logic, providing a robust and efficient backend.',
            Img: img4,
            linkG: 'https://github.com/arul9976/NotesApp',
            linkW: 'https://arul9976.github.io/NotesApp/'
        },
    {
        Text: 'This portfolio website is a project that I created during my beginner stage of learning web development using HTML, CSS, and JavaScript. It may not be my latest work, but it showcases my early efforts and progress in this field.',
        Img: img5,
        linkG: 'https://github.com/arul9976/My_PortFolio',
        linkW: 'https://arul9976.github.io/My_PortFolio/'
    }]
    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                {
                    Data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='animate-slide-top relative z-20'>
                                <Project1 Text={item.Text} Img={item.Img} linkW={item.linkW} linkG={item.linkG} />
                            </SwiperSlide>
                        )


                    })
                }

            </Swiper>
        </>
    );
}