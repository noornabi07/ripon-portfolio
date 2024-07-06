import React from 'react';
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

import './Address.css'

const Address = () => {
    return (
      <div className="address_wrapper flex items-center justify-center mt-10 md:mt-20">
        <div className="address_content grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-20 xl:gap-56 px-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFillTelephoneInboundFill className="text-lg xl:text-3xl text-orange-500" />
            <h2 className="text-sm md:text-lg font-serif">Phone</h2>
            <h4 className="text-sm md:text-lg">01734992626</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <FaMapLocationDot className="text-lg md:text-3xl text-orange-500" />
            <h2 className="text-sm md:text-lg font-serif">Address</h2>
            <h4 className="text-sm md:text-lg">Dinajpur-Bangladesh</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <MdMarkEmailRead className="text-lg md:text-3xl text-orange-500" />
            <h2 className="text-sm md:text-lg font-serif">Email</h2>
            <h4 className="text-sm md:text-lg">rankagency289@gmail.com</h4>
          </div>
        </div>
      </div>
    );
};

export default Address;