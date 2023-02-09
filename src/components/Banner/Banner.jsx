import React from "react";
import bannerImg from "../../assests/banner-img.png";

const Banner = () => {
  return (
    <div className="max-w-[1200px] m-auto ">
      <div className="grid grid-cols-2 gap-4 pt-[60px] ">
        <div className="mt-12">
          <h1 className="text-[40px] font-bold">Get Started your </h1>
          <h2 className="text-[40px] font-bold">
            Exiciting <span className="text-[#C00093]">journy</span>{" "}
          </h2>
          <h2 className="text-[40px] font-bold">with us</h2>
          <p className="w-[350px] pt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In distinctio labore amet fugiat unde vitae eos.
            Adipisci saepe ex vitae.
          </p>
          <div className="pt-8">
            <button className="btn btn-secondary">Discover Now</button>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
