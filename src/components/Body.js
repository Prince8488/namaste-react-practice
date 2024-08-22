import Restraurentcard from "./Restraurentcard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_API } from "../utils/constants";

const Body = () => {
  const [restraurantList, setRestraurantList] = useState([]);
  const [filterRestraurant, setFilterRestraurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    restraurantAPI();
  }, []);

  const restraurantAPI = async () => {
    const data = await fetch(RES_LIST_API);
    const jsonData = await data.json();
    setRestraurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestraurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restraurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <br></br>
      <div className="res-filter">
        <div className="filter">
          <div className="search-container">
            <form action="/action_page.php">
              <div className="bar">
                <input
                  className="searchbar"
                  placeholder="Search your favourite restaurants...."
                  type="text"
                  title="Search"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
                <a
                  href="#"
                  onClick={() => {
                    const filterResSearch = restraurantList.filter(
                      (filterRes) =>
                        filterRes.info.name
                          .toLocaleLowerCase()
                          .includes(searchText.toLocaleLowerCase())
                    );
                    setFilterRestraurant(filterResSearch);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    className="voice"
                    viewBox="0 0 16 16"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="#000"
                        d="M14 12.94 10.16 9.1c1.25-1.76 1.1-4.2-.48-5.78a4.49 4.49 0 0 0-6.36 0 4.49 4.49 0 0 0 0 6.36 4.486 4.486 0 0 0 5.78.48L12.94 14 14 12.94ZM4.38 8.62a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </form>
          </div>
          <br></br>
          <button
            className="book-button"
            onClick={() => {
              const filteredList = restraurantList.filter(
                (resFilterData) => resFilterData.info.avgRatingString >= "4.5"
              );
              setFilterRestraurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <br></br>
      <div className="res-list">
        {filterRestraurant.map((restraurant) => (
          <Link
            key={restraurant.info.id}
            to={"restraurants/" + restraurant.info.id}
          >
            <Restraurentcard resList={restraurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
