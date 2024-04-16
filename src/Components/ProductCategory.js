import React, { useState } from "react";
import ItemList from "./ItemList";

const ProductCategory = ({ key, showItems, setshowIndex }) => {
  // const [showItems, setshowItems] = useState(false);
  // const handelClick = () => {
  //   setshowItems(!showItems);
  // };
  return (
    <div className="w-1/2  flex flex-col  justify-between  mx-auto my-2">
      <div
        className="  bg-gray-500 shadow-lg p-4 "
        onClick={() => setshowIndex(key)}
      >
        <span className="font-bold text-lg">Header </span>
        <span>🔽</span>
      </div>
      <div className="">{showItems && <ItemList />}</div>
    </div>
  );
};
export default ProductCategory;
