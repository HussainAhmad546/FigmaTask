import React from 'react';
import image from './../../images/logo.jpg'

const Navbar = () => {
  return (
    <nav className="bg-white-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl flex items-center">
        <img src={image} alt="YourLogo" className="w-20 h-10" />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-white-500 text-black font-bold px-4 py-2 rounded-md">
            Browse Profile
          </button>
          <button className="bg-white-500 text-black font-bold px-4 py-2 rounded-md">
            Member Login
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Register Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
