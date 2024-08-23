import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const btnNameTrigger = "Logout";
  const onlineStatus = useOnlineStatus();

  return (
    <header>
      <div className="header">
        <Link to="/" className="logo">
          <img src={LOGO_URL} alt="logo" />
        </Link>
        <span>Online Status : {onlineStatus === true ? "🟢" : "🔴"}</span>
        <div className="header-right">
          <Link className="active" to="/">
            Home
          </Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>

          <button className="book-button">Cart</button>
          <button
            className="book-button"
            onClick={(e) => {
              btnName == "Login"
                ? setBtnName(btnNameTrigger)
                : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
