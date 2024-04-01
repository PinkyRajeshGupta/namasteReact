import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const ProductDetail = () => {
  const [productinfo, setproductinfo] = useState([]);
  const [slideIndex, setslideIndex] = useState();
  const { resId } = useParams();

  const data = async () => {
    const data = await fetch(`${API_URL}/${resId}`);
    const json = await data.json();
    setproductinfo(json);
  };

  useEffect(() => {
    data();
    setslideIndex(0);
  }, []);

  const setindex = (index) => {
    setslideIndex(index);
  };

  return productinfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Product">
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
            class={`dot ${slideIndex == index ? "active" : ""}`}
            onClick={() => {
              setindex(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
