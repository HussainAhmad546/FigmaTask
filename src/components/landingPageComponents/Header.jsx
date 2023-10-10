import React from 'react';
import image2 from './../../images/Couple.jpg';

const Header = () => {
  return (
    <div
      className="bg-cover bg-center h-620px w-full flex flex-col justify-end"
      style={{ backgroundImage: `url(${image2})`, height: '600px' }}
    >
      <div className="w-200 mx-auto">
        <div className="bg-orange-500 p-4 text-white border-1 border-dotted border-white rounded" style={{marginBottom:'30px',border:'1px dotted white'}}>
          <h1 className="text-4xl font-bold mb-4">Looking for a Partner</h1>
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold" htmlFor="lookingFor">
                Looking for
              </label>
              <select
                id="lookingFor"
                className="px-10 py-1 border rounded-md text-black"
              >
                <option value="" disabled selected>
                  Female
                </option>
                <option value="Boy">Boy</option>
                <option value="Girl">Girl</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold" htmlFor="age">
                Age
              </label>
              <div className="flex space-x-2">
                <select
                  id="age"
                  className="px-4 py-1 border rounded-md text-black"
                >
                  <option value="" disabled selected>
                    18
                  </option>
                  {Array.from({ length: 19 }, (_, i) => (
                    <option key={i} value={18 + i}>
                      {18 + i}
                    </option>
                  ))}
                </select>
                <span className="flex items-center">to</span>
                <select
                  id="ageTo"
                  className="px-4 py-1 border rounded-md text-black"
                >
                  <option value="" disabled selected>
                    36
                  </option>
                  {Array.from({ length: 19 }, (_, i) => (
                    <option key={i} value={18 + i}>
                      {18 + i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold" htmlFor="religion">
                Religion
              </label>
              <select
                id="religion"
                className="px-10 py-1 border rounded-md text-black"
              >
                <option value="" disabled selected>
                  Any
                </option>
                <option value="Any">Any</option>
                <option value="Christian">Christian</option>
                <option value="Muslim">Muslim</option>
                <option value="Hindu">Hindu</option>
              </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mt-4" style={{ background: '#0F2354', width: '150px' }}>
              Search Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

