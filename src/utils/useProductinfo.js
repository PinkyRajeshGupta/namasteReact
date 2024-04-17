import { useEffect, useState } from "react";
import { API_URL } from "./constant";

const useProductinfo = (resId) => {
  const [productInfo, setproductinfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL + "/" + resId);
    const json = await data.json();
    // console.log(json);
    setproductinfo(json);
  };
  return productInfo;
};

export default useProductinfo;
