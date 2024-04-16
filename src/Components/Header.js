import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header = () => {
  const [btnlogin, setbtnlogin] = useState("login");
  const online = useOnlineStatus;

  useEffect(() => {
    console.log("online");
  }, []);

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
            <Link to={"/cart"}>cart</Link>{" "}
          </li>
          <li className="p-5 m-5">
            <Link to={"/grocery"}>Grocery</Link>{" "}
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnlogin === "login"
                ? setbtnlogin("logout")
                : setbtnlogin("login");
            }}
          >
            {btnlogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
