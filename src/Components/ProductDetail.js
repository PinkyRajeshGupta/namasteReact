import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useProductinfo from "../utils/useProductinfo";
import ProductCategory from "./Productcategory.JS";

const ProductDetail = () => {
  //const [productinfo, setproductinfo] = useState([]);
  const [showIndex, setshowIndex] = useState(0);
  const [slideIndex, setslideIndex] = useState();
  const { resId } = useParams();

  const productinfo = useProductinfo(resId);

  // console.log(productinfo);
  // const data = async () => {
  //   const data = await fetch(`${API_URL}/${resId}`);
  //   const json = await data.json();
  //   setproductinfo(json);
  // };

  useEffect(() => {
    // data();
    setslideIndex(0);
  }, []);

  const setindex = (index) => {
    setslideIndex(index);
  };

  return productinfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center flex-col list-unstyled">
      <h1>ProductDetail</h1>
      {/* {console.log(productinfo.images)} */}

      <ul className="product-image-list">
        {productinfo.images.map((element, index) => (
          <li
            className={`prod-img ${slideIndex == index ? "active" : ""}`}
            key={index}
          >
            <img src={element} alt="img" />
          </li>
        ))}
      </ul>
      <div className="dot-div">
        {productinfo.images.map((element, index) => (
          <div
            key={index}
            className={`dot ${slideIndex == index ? "active" : ""}`}
            onClick={() => {
              setindex(index);
            }}
          ></div>
        ))}
      </div>
      <div className=" justify-center">
        {productinfo.images.map((element, index) => (
          <ProductCategory
            key={index}
            showItems={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
