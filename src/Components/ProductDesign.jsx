import React from 'react';

import { Link } from 'react-router-dom';

const ProductDesign = ({ id, sImage, sName, sDesc }) => {
  return (
    <div className='border border-gray-300 rounded pb-4'>
      <Link  className='cursor-pointer text-gray-700'>
        <div className="overflow-hidden mb-3">
          <img src={sImage} alt={sName} className='hover:scale-110 transition ease-in-out' />
        </div>
        <p className='pt-3 pb-1 text-sm px-3 font-semibold  md:text-base '>{sName}</p>
        <p className='text-sm font-normal px-3'>{sDesc}</p>
      </Link>
    </div>
  );
}

export default ProductDesign;
