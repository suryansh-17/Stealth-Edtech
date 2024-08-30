import React from "react";
import fanta from "../assets/Fanta.png";
function FreqCard() {
  return (
    <div className="w-[148px] h-[140px] bg-white p-1 rounded-md ml-3">
      <div>
        <img src={fanta} alt="" className="h-[76px]" />
      </div>
      <div className="p-1">
        <h1>Fanta- 1 PET</h1>
        <p className="text-sm">₹89</p>
      </div>
    </div>
  );
}

export default FreqCard;
