import { useEffect, useState } from "react";
import RestaurantCard from "./ProductCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [product, setProduct] = useState([]);
  const [filterproduct, setfilterproduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchProduct = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProduct(data?.products);
    setfilterproduct(data?.products);
    console.log(data.products);
  };

  useEffect(() => {
    searchProduct();
  }, []);

  //conditional rendering
  // if (product.length === 0) {
  //   return <Shimmer />;
  // }

  return product.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className=" search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = product.filter((res) => res.rating > 4.5);
            filterproduct(filteredlist);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {filterproduct.map((product, index) => (
          <Link key={product?.id} to={`/product/${product.id}`}>
            <RestaurantCard
              // key={product?.id}
              resName={product?.brand}
              title={product?.category + " :" + product.title}
              cardimage={product?.thumbnail}
              rating={product?.rating}
              price={product?.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
