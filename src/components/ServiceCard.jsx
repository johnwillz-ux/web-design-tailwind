import React from "react";

const ServiceCard = ({ serviceProp }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center bg-coral-red rounded-full mb-3">
        <img src={serviceProp.imgURL} alt="" height={24} width={24} />
      </div>

      <h3 className="font-palanquin text-3xl font-bold leading-normal">
        {serviceProp.label}
      </h3>
      <p className="mt-3 break-words leading-normal text-slate-gray text-lg font-montserrat">
        {serviceProp.subtext}
      </p>
    </div>
  );
};

export default ServiceCard;

