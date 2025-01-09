import React from 'react';
import logo from '../assets/blk-logo.png'; 

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-100 to-red-100 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 animate-bounce"
        />
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;


