import React from 'react'
import myPic from '/profile/MyImagePicsArt.jpg';
import { Image } from '@chakra-ui/react';
const MyImage = () => {
  return (
    <div className="relative flex justify-center m-auto">
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <div className="absolute inset-0 bg-blue-200 rounded-full transform scale-110 opacity-20" />
        <Image
          src={myPic}
          alt="Arulkumar M. Profile"
          className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg 
                          transform transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default MyImage