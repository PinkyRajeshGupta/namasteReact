import { useEffect, useState, useContext } from "react";
import ProductCard, { withPromotedlabel } from "./ProductCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
const Body = () => {
  const [product, setProduct] = useState([]);
  const [filterproduct, setfilterproduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const Promotedrescard = withPromotedlabel(ProductCard);

  const searchProduct = async () => {
    debugger;
    const response = await fetch(API_URL);
    const data = await response.json();
    setProduct(data?.products);
    setfilterproduct(data?.products);
    // console.log(data.products);
  };

  const { loggedinUser, setuserName } = useContext(UserContext);

  useEffect(() => {
    searchProduct();
  }, []);

  //conditional rendering
  // if (product.length === 0) {
  //   return <Shimmer />;
  // }

  return filterproduct.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-5 p-4">
          <input
            type="text"
            className="border-2 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-1 bg-slate-400 rounded"
            onClick={() => {
              filteredlist = product.filter((res) =>
                res.brand.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterproduct(filteredlist);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-5 p-4">
          <button
            className="border-1 bg-slate-400 rounded m-5 p-4 h-2px"
            onClick={() => {
              const filteredlist = product.filter((res) => res.rating > 4.5);
              filterproduct(filteredlist);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="m-5 p-4">
          <label>User Name</label>
          <input
            className=" border-2"
            value={loggedinUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {filterproduct.map((product, index) => (
          <Link key={product?.id} to={`/product/${product.id}`}>
            {product.rating > 4 ? (
              <Promotedrescard
                resname={product?.brand}
                title={product?.category + " :" + product.title}
                cardimage={product?.thumbnail}
                rating={product?.rating}
                price={product?.price}
              />
            ) : (
              <ProductCard
                // key={product?.id}
                resname={product?.brand}
                title={product?.category + " :" + product.title}
                cardimage={product?.thumbnail}
                rating={product?.rating}
                price={product?.price}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
