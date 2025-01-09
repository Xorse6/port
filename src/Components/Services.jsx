import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../assets/assets'; 
import Title from './Title';

const Services = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/projectpage/${item._id}`, { state: { item } });
  };

  return (
    <div className="mt-4">
      <div className="text-3xl py-8 text-center">
        <Title text1={'TOP'} text2={'SKILLS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Delivering innovative solutions through technology, creativity, and impactful storytelling
        </p>
      </div>

      <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 ">
        {services.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)} className="cursor-pointer border border-gray-300 rounded pb-4 overflow-hidden">
            <img src={item.sImage} alt={item.sName} className="hover:scale-110 transition ease-in-out  " />
            <h3 className=" pt-3 pb-1 text-sm px-3 font-semibold  md:text-base uppercase">{item.sName}</h3>
            <p className=" text-sm font-normal px-3">{item.sSmallDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
