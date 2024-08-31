import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const btnNameTrigger = "Logout";
  const onlineStatus = useOnlineStatus();

  const userContext = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
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
          <Link to="cart">
            <button className="book-button cart-btn">
              <i className="material-icons">shopping_cart</i>
              <span className="count">{cartItems.length}</span>
            </button>
          </Link>
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
