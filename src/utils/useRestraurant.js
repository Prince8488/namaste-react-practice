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
    setResInfo(
      resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  };
  return resInfo;
};
export default useRestraurant;
