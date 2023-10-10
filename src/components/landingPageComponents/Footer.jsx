import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import image from './../../images/logo.jpg';

const Footer = () => {
  return (
    <div className="main-div bg-blue-900 text-white h-96" style={{ background: '#0F2354'}}>
      <div className="main-div-p1 h-80 flex justify-between p-4">
        <div className="flex flex-col">
          <img src={image} alt="Logo" className="h-20 w-24" />
          <p className="row max-w-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus a
            dicta aliquid aperiam quidem nobis nesciunt dolorem? Repellendus
            illum, laboriosam.
          </p>
        </div>
        <div className="col-span-2 mt-1">
          <h3 className="text-lg mb-10">Terms and Conditions</h3>
          <p>Term & Conditions</p>
          <p>Privacy & Policy</p>
        </div>
        <div className="col-span-2 mt-1">
          <h3 className="text-lg mb-10">Contact Us</h3>
          <p className="row">Feel Free to contact with us via call or message</p>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <p>+92-3363504242</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <p>syedh2958@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="main-div-p2 h-16 flex justify-between items-center p-4" style={{borderTop:'1px solid white'}}>
        <div>
          <span>Copy Right @ 2023 company pvt ltd</span>
        </div>
        <div>
          design 7 developed by zysoftec
        </div>
      </div>
    </div>
  );
};

export default Footer;
