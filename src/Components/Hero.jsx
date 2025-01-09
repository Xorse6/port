import React from "react";
import heroImage from "../assets/IMG_2800.png";
import { icons } from '../assets/assets';
import cv from "../assets/cv.pdf"; 

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 relative'>
      {/* Hero left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-3 sm:py-0'>
        <div className='text-[#414141] mx-3'>
          <div className='flex gap-2 items-center'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text'>
              HI THERE
            </p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-7xl leading-relaxed animate-slide-in-left'>
            I&apos;M XORSE WISDOM <br /> BONUEDI
          </h1>

          <div className="flex items-center gap-2">
            <p className='font-normal text-sm md:text-base mt-5'>
              Transforming Ideas into Seamless and Visually Stunning Results
            </p>
          </div>

          <div className='grid grid-cols-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 gap-y-6 mt-12 '>
            {icons.map((item, index) => (
              <div key={index}>
                <img
                  src={item.sIcon}
                  alt=""
                  className='w-10 hover:-translate-y-6 hover:transition-all cursor-pointer '
                />
              </div>
            ))}
          </div>

          <div className='flex gap-7 mt-12'>
            <a
              // href={cv} 
              // download="Xorse_W_Bonuedi_CV.pdf"
              className='bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out'
            >
              Download CV
            </a>
            <a
              href=""
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out'
            >
              My GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Hero right */}
      <img
        src={heroImage}
        className='w-full h-100 sm:w-1/2 hover:-translate-y-6 hover:transition-all cursor-pointer'
      />
    </div>
  );
};

export default Hero;

