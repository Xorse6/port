import React from 'react'
import {serviceData } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-evenly gap-2 sm:gap-1 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 cursor-pointer'>
            
                {serviceData.map((item, index) => (
                    <div key={index} className='hover:scale-110 transition ease-in-out '>
                        <img src={item.sCompletedIcon} className='w-12 m-auto mb-5' />
                        <p className='font-semibold'>{item.sCompleted}</p>
                        <p className='text-gray-400'></p>
                    </div>
                ))}

                {serviceData.map((item, index) => (
                    <div key={index} className='hover:scale-110 transition ease-in-out '>
                        <img src={item.eYearsIcon} className='w-12 m-auto mb-5' />
                        <p className='font-semibold'>{item.eYears}</p>
                        <p className='text-gray-400'></p>
                    </div>
                ))}

                {serviceData.map((item, index) => (
                    <div key={index} className='hover:scale-110 transition ease-in-out '>
                        <img src={item.cServedIcon} className='w-12 m-auto mb-5' />
                        <p className='font-semibold'>{item.cServed}</p>
                        <p className='text-gray-400'></p>
                    </div>
                ))}
           
            
        </div>
  )
}

export default Policy;
