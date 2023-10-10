import React from 'react';
import detail from './detail';

const OurPlan = () => {
  return (
    <div className='main bg-white-900 text-white w-full mx-auto'>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 p-8'>
          <h2 className='text-orange-500 text-3xl font-semibold'>Our Plans</h2>
          <h1 className='text-4xl font-bold text-black'>Explore Current Top Deals</h1>
          <p className='text-lg mt-4 text-black'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
          </p>
          <div className='bg-white w-70 h-36 rounded-lg mt-8 p-6'>
            <div className='flex'>
              <button className='bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold'>
                Monthly
              </button>
              <button className='border border-blue-900 text-blue-900 px-6 py-2 rounded-lg font-semibold'>
                Annual
              </button>
            </div>
            <ul className='left-8 top-8 text-lg h-32 text-black list-inside list-disc mt-10'>
              <li>View Mobile Number - 50 + 50 verified</li>
              <li>View Mobile Number - 50 + 50 verified</li>
              <li>View Mobile Number - 50 + 50 verified</li>
            </ul>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-between flex-wrap p-10'>
          {detail.map((val) => (
            <div
              className={`w-1/2 p-4 rounded-lg ${val.name === 'Basic' ? 'bg-orange-500' : 'bg-orange-200'}`}
              key={val.name}
            >
              <h3 className={`text-2xl font-semibold ${val.name === 'Basic' ? 'text-white' : 'text-black'}`}>
                {val.name}
              </h3>
              <h2 className='text-3xl font-bold'>{val.price} / 2 months</h2>
              <button className='bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold mt-2'>
                Save 10%
              </button>
              <div className='mt-4'>
                <span className={`text-lg ${val.name === 'Basic' ? 'text-white' : 'text-blue-900'}`}>
                  Get Started &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPlan;
