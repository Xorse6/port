
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '../assets/assets';
import Title from '../Components/Title';

const ProjectPage = () => {
  const location = useLocation();
  const { item: initialItem } = location.state || {};

  // Set the initial item to the one passed via state
  const [currentItem, setCurrentItem] = useState(initialItem);

  if (!currentItem) {
    return <p>No project data found!</p>;
  }

  // Filter out the current project to get the rest
  const otherServices = services.filter((service) => service._id !== currentItem._id);

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 mb-10">
      {/* Display Current Project Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Project Image */}
        <div className="w-full sm:w-[55%]">
          <img src={currentItem.sImage} alt={currentItem.sName} className="w-full h-auto " />
        </div>

        {/* Project Info */}
        <div className="flex-1">
          <h1 className="font-medium mt-2 text-2xl text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text uppercase">
            {currentItem.sName}
          </h1>
          <p className="mt-5 text-gray-700 font-semibold">{currentItem.sDesc}</p>

          <div>
            <h1 className="font-medium mt-7 text-2xl text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text uppercase">
              {currentItem.sSkillDesc || "No skill description provided."}
            </h1>

            {/* Skill Images Grid */}
            <div className="mt-5 grid grid-cols-6 sm:grid-cols-5 gap-2">
              {currentItem.sSkillImages && currentItem.sSkillImages.length > 0 ? (
                currentItem.sSkillImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${currentItem.sName} skill ${index + 1}`}
                    className="w-28 h-auto rounded-md hover:scale-110 transition-transform cursor-pointer"
                  />
                ))
              ) : (
                <p>No additional images available for this project.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t pt-8">
        <div className="text-3xl py-8 text-center">
          <Title text1={'RELATED'} text2={'SKILLS'} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            Delivering innovative solutions through technology, creativity, and impactful storytelling
          </p>
        </div>

        {/* Display Other Services */}
        <div className="grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 gap-y-4">
          {otherServices.map((service) => (
            <div
              key={service._id}
              className="border border-gray-300 rounded pb-4 cursor-pointer"
              onClick={() => setCurrentItem(service)} // Update the current item
            >
              <div className="overflow-hidden mb-3">
                <img
                  src={service.sImage}
                  alt={service.sName}
                  className="hover:scale-110 transition ease-in-out"
                />
              </div>
              <p className="pt-3 pb-1 text-sm px-3 font-semibold md:text-base">
                {service.sName}
              </p>
              <p className="text-sm font-normal px-3">{service.sSmallDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;


