import React from "react";
import Deal from "./deal/Deal";

const Deals = () => {
  return (
    <div className="max-w-[1200px] m-auto py-[80px] bg-[#FEFCFB]">
      <div className="text-center">
        <h2 className="text-[40px] font-bold pb-4">
          Exclusive<span className="text-[#C00093]">deals and discounts</span>{" "}
        </h2>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum fugiat maiores?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="flex justify-between pt-[80px]">
        <Deal title="Madrid" country="Spain" dollar="850" rating="4.8" />
        <Deal title="Madrid" country="German" dollar="650" rating="4.3" />
        <Deal title="Madrid" country="America" dollar="460" rating="4.6" />
      </div>
    </div>
  );
};

export default Deals;
