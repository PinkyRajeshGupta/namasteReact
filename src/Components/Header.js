import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnlogin, setbtnlogin] = useState("login");

  useEffect(() => {
    console.log("useeffect");
  }, []);

  return (
    <div className="header">
      <div className="log-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nave-item">
        <ul>
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <Link to={"/about"}> About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}> Contact us </Link>
          </li>
          <li>
            <Link to={"/cart"}>cart</Link>{" "}
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
