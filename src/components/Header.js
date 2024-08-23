import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const btnNameTrigger = "Logout";
  const onlineStatus = useOnlineStatus();

  const userContext = useContext(UserContext);

  return (
    <header>
      <div className="header">
        <Link to="/" className="logo">
          <img src={LOGO_URL} alt="logo" />
        </Link>
        <span className="user">
          <span>{onlineStatus === true ? "🟢" : "🔴"}</span>&nbsp;
          <span>{userContext.LoggedInUser}</span>
        </span>
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
