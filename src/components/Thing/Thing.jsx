import React from "react";
import SingleThing from "./singleThing/SingleThing";

const Thing = () => {
  return (
    <div className="max-w-[1200px] m-auto py-[80px]">
      <div className="text-center">
        <h2 className="text-[40px] font-bold pb-4">
          Things you need<span className="text-[#C00093]">to do</span>{" "}
        </h2>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum fugiat maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="pt-[80px] flex justify-between">
        <SingleThing
          title="Sign UP"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, laboriosam."
          btn="Click"
        />
        <SingleThing
          title="Sign UP"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, laboriosam."
          btn="Click"
        />
        <SingleThing
          title="Sign UP"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, laboriosam."
          btn="Click"
        />
      </div>
    </div>
  );
};

export default Thing;
