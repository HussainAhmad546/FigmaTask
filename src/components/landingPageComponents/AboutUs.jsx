import React from 'react';
import shaadi from '../../images/shadi.jpg';

const Section2 = () => {
  return (
    <div className='main2 bg-cover bg-left flex' style={{ backgroundImage: `url(${shaadi})`, height: '600px', width: '100%' }}>
      <div className='main2-left bg-white bg-opacity-75 w-96 p-10 ml-auto' style={{width:'500px'}}>
        <h1 className='text-3xl font-bold text-orange-500'>About us</h1>
        <h3 className='text-3xl font-bold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <p className='text-lg font-normal leading-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        </p>
      </div>
    </div>
  );
}

export default Section2;
