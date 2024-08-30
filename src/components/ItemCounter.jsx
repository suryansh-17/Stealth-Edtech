import React, { useState } from "react";

function ItemCounter() {
  const count = useState(0);
  return (
    <div className="h-[28px] w-[88px] bg-[#FEF3F0] border rounded-md border-[#f05a26]">
      <button className="text-[#f05a26]">-</button>
      <span>{count}</span>
      <button className="text-[#f05a26]">+</button>
    </div>
  );
}

export default ItemCounter;
