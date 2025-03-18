
import React, { useEffect, useRef } from 'react';

import zMail from "/images/zMail.png";
const SocialPopup = ({ isOpen, setIsOpen, iUrl }) => {



  const socialLinks = [
    {
      url: 'https://yt3.googleusercontent.com/o2ZqEC0ikdIPqdJX7HeMk9ZJ11DeW2yrDvcCoNgNczrGcuRCcQsejp8LXuyvDK9Qod6164GT=s900-c-k-c0x00ffffff-no-rj',
      label: 'ZSTTK404/24',
      // color: 'hover:bg-red-400/20'
    },
    {
      url: zMail,
      label: 'arulkumar.m@zohocorp.com',
      // color: 'hover:bg-blue-400/20'
    }
  ];

  function useClickOutside(callback) {
    const ref = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [callback]);

    return ref;
  }

  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div className="relative z-50" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-15 h-15 rounded-full 
                  flex items-center justify-center text-white shadow-lg max-md:w-[50px]
                  hover:scale-110 transform transition-all duration-300 border-2 border-[#00cba9] hover:border-red-400"
      >
        <img className='rounded-full w-full' src={iUrl} alt="" />
      </button>

      <div 
        className={`absolute bottom-16 right-[-90%] w-[max-content] flex flex-col gap-4 transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            target="_blank"
            className={`group flex items-center gap-3 px-4 py-2 bg-white hover:bg-white rounded-full 
              ${social.color} transform transition-all duration-300
              hover:-translate-y-1 cursor-pointer
              ${isOpen ? 'scale-100' : 'scale-0'}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <img src={social.url} className='bg-red-100 w-6 h-6' alt="" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialPopup;