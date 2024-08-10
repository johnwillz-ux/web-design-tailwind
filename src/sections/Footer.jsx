import React from "react";
import { footerLogo } from "../assets/images";
import { facebook, instagram, twitter } from "../assets/icons";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around gap-7 w-full min-h-[80%] max-lg: ">


      <img src={footerLogo} alt="" width={120}/>




      <p className="text-gray-300 text-center">
        Get shoes ready for the new term at your nearest Nike store. Find Your
        perfect Size in Store. Get Rewards.
      </p>



      <div className="flex gap-4 ">
        <div className="bg-white p-2 rounded-full">
          <img src={facebook} alt={facebook} className="" />
        </div>

        <div className="bg-white p-2 rounded-full">
        
          <img src={twitter} alt={twitter} />
        </div>

        <div className="bg-white p-2 rounded-full">
        
          <img src={instagram} alt={instagram} />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
