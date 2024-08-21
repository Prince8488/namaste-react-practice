import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <header>
      <div className="header">
        <a href="#" className="logo">
          <img src={LOGO_URL} alt="logo" />
        </a>
        <div className="header-right">
          {/* 
        <div className="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search">
          </form>
        </div> */}

          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>

          <button className="book-button">Cart</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
