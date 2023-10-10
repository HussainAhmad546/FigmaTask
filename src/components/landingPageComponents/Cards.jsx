import React from 'react';
import { MdMessage, MdImage, MdNotifications } from 'react-icons/md';

const Cards = () => {
  return (
    <div className="w-full md:w-80%  mb-10">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        {/* First Card */}
        <div className="bg-orange-300 p-4 rounded-lg shadow-md md:h-150">
          <MdMessage className="text-2xl text-orange-500" />
          <div>
            <h2 className="text-xl font-semibold p-4">Find your best match</h2>
            <p className="text-lg">
              This is the content of Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-orange-500 p-4 rounded-lg shadow-md h-auto md:h-150">
          <MdMessage className="text-2xl text-white" />
          <div>
            <h2 className="text-xl font-semibold text-white p-4">Direct Communication</h2>
            <p className="text-lg text-white">
              This is the content of Card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-orange-300 p-4 rounded-lg shadow-md h-auto md:h-150">
          <MdImage className="text-2xl text-orange-500" />
          <div>
            <h2 className="text-xl font-semibold p-4">Add More Photos</h2>
            <p className="text-lg">
              This is the content of Card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="bg-orange-300 p-4 rounded-lg shadow-md h-auto md:h-150">
          <MdNotifications className="text-2xl text-orange-500" />
          <div>
            <h2 className="text-xl font-semibold p-4">Get Notified</h2>
            <p className="text-lg">
              This is the content of Card 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
