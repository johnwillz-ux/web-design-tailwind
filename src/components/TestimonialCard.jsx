import React from "react";
import { star } from "../assets/icons";

const TestimonialCard = ({ imageURL, text, rate, name }) => {
  return (
    <div className="flex justify-center flex-col items-center gap-4 mt-20">
      <img src={imageURL} alt={imageURL} width={100} className="rounded-full" />
      <p className="info-text text-center w-2/4 max-lg:max-w-full">{text}</p>

      <div className="flex gap-1">
        <img src={star} alt={star} /> <p className="info-text"> ({rate})</p>
      </div>

      <p className="font-palanquin text-3xl font-bold leading-normal">{name}</p>
    </div>
  );
};

export default TestimonialCard;
