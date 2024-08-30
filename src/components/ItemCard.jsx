import React from "react";
import ItemCounter from "./ItemCounter";

function ItemCard({ img, itemName, calorie, price }) {
  return (
    <div className="bg-white flex h-[100px] p-[10px] rounded-[10px]">
      <div className="flex-shrink-0">
        <img src={img} alt={itemName} className="h-[80px] w-[80px]" />
      </div>
      <div className="p-1">
        <h1>{itemName}</h1>
        <p className="text-xs text-[#9E9EA8]">{calorie}</p>
        <div className="flex mt-3 pb-2">
          <span>₹{price}</span>
          <div className="flex ml-36">
            <ItemCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
