import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnlogin, setbtnlogin] = useState("login");
  const online = useOnlineStatus;
  const { loggedinUser } = useContext(UserContext);
  //subscribing to store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems, "cartitem");
  return (
    <div className="flex h-30 justify-between">
      <div>
        <img className="h-20 " src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex  flex-row ">
          <li className="p-5 m-5">online: {online ? "✅" : "🔴"}</li>
          <li className="p-5 m-5">
            <Link to={"/"}> Home </Link>
          </li>
          <li className="p-5 m-5">
            <Link to={"/about"}> About Us</Link>
          </li>
          <li className="p-5 m-5">
            <Link to={"/contact"}> Contact us </Link>
          </li>
          <li className="p-5 m-5">
            <Link to={"/cart"}>cart ({cartItems.length})</Link>
          </li>
          <li className="p-5 m-5">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnlogin === "login"
                ? setbtnlogin("logout")
                : setbtnlogin(`login:`);
            }}
          >
            {btnlogin} {loggedinUser}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
