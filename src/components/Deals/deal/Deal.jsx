import React from "react";
import { AiFillStar } from "react-icons/ai";

const Deal = ({ title, country, dollar, rating }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <h5 className="flex justify-center items-center">
            <AiFillStar className="text-[#FFC107]" />
            <span className="pl-2">{rating}</span>
          </h5>
        </div>
        <div className="flex ">
          <h3 className="font-medium pr-8">{country}</h3>
          <h3 className="font-medium">${dollar}</h3>
        </div>
      </div>
    </div>
  );
};

export default Deal;
