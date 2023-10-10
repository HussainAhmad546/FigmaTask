import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import backgroundImage from '../../images/couple2.jpg'

const AppDownload = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '600px',
      }}
    >
      <div className="absolute inset-0 bg-black-200 bg-opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Download India's best<br></br> Metermomy Website</h1>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
          nunc et velit auctor tincidunt.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded-full flex items-center space-x-2">
            <FaGooglePlay className="h-6 w-6" />
            <span className="font-semibold">Download from Play Store</span>
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full flex items-center space-x-2">
            <FaApple className="h-6 w-6" />
            <span className="font-semibold">Download from App Store</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
