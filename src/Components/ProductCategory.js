import React, { useState } from "react";
import ItemList from "./ItemList";

const ProductCategory = ({ key, showItems, setshowIndex, index }) => {
  // const [showItems, setshowItems] = useState(false);
  // const handelClick = () => {
  //   setshowItems(!showItems);
  // };

  return (
    <div className="w-1/2  flex flex-col  justify-between  mx-auto my-2">
      <div
        className="  bg-gray-500 shadow-lg p-4 "
        onClick={() => setshowIndex(index)}
      >
        <span className="font-bold text-lg">Header </span>
        <span>🔽</span>
      </div>
      <div className="">
        {showItems && <ItemList key={key} index={index} />}
      </div>
    </div>
  );
};
export default ProductCategory;
