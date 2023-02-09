import React from "react";

const SingleThing = ({ title, para, btn }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{para}</p>
        <div className="card-actions justify-start pt-4">
          <button className="btn  btn-primary">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default SingleThing;
