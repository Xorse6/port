import React from 'react'
import { latest } from '../assets/assets'; 
import Title from './Title'
import ProductDesign from './ProductDesign';

const Latest = () => {
  return (
    <div className='my-10 '>
      
        <div className='text-3xl py-8 text-center'>
            <Title text1={'LATEST'} text2={'SERVICES'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Developing impactful projects that blend technology, creativity, and user-focused solutions
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latest.map((item, index) => (
              <ProductDesign 
                key={index} 
                sImage={item.lImage} 
                sName={item.lName} 
                sDesc={item.lDesc} 
              />
            ))
          }
        </div>
      
    </div>
  )
}

export default Latest;
