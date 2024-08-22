import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const btnNameTrigger = "Logout";
  return (
    <header>
      <div className="header">
        <a href="#" className="logo">
          <img src={LOGO_URL} alt="logo" />
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>

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
