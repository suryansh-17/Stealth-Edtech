import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";

function Topbar() {
  return (
    <>
      <div className="w-full bg-white h-[56px] flex ">
        <div className="items-center flex">
          <IoArrowBackSharp />
        </div>

        <div className="justify-center flex-col items-center text-center m-auto">
          <p className="text-[14px] text-[#403C3C] font-bold">Checkout</p>
          <p className="text-[10px] text=[#9E9EA8]">POPEYS | JP NAGAR</p>
        </div>
      </div>
    </>
  );
}

export default Topbar;
