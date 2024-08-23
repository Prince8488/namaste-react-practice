import { useEffect, useState } from "react";
import { RES_MENU_API } from "./constants";

const useRestraurant = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const resMenu = await data.json();
    const filterResData =
      resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (res) =>
          res?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setResInfo(filterResData);
  };
  return resInfo;
};
export default useRestraurant;
