import resListData from "../utils/mockData";
import Restraurentcard from "./Restraurentcard";
import { useState } from "react";

const Body = () => {
  const [restraurantList, setRestraurantList] = useState(resListData);
  return (
    <div className="main">
      <br></br>
      <div className="res-filter">
        <div className="filter">
          <button
            className="book-button"
            onClick={() => {
              console.log("restraurantList", restraurantList);
              const filteredList = restraurantList.filter(
                (resFilterData) => resFilterData.info.avgRatingString >= "4"
              );
              console.log("data", filteredList);
              setRestraurantList(filteredList);
            }}
          >
            Top Rated Restraurant
          </button>
        </div>
      </div>
      <div className="res-list">
        {restraurantList.map((restraurant) => (
          <Restraurentcard key={restraurant.info.id} resList={restraurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
