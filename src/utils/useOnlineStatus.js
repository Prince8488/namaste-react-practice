import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
      console.log("You are not connected to the network", event);
    });
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
      console.log("You are now connected to the network", event);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
