// hooks/useUser.ts
import { useState, useEffect } from "react";
import { useSetState } from "@mantine/hooks";
import WebApp from "@twa-dev/sdk";
const userdata = WebApp.initDataUnsafe;

const useUser = () => {
  const [user, setUser] = useSetState({
    userid: 0,
    name: "َکاربر",
    fire: 0,
    wind: 0,
    earth: 0,
    water: 0,
    tree: 0,
    light: 0,
    invited_count: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch user data
  const fetchUserData = async () => {
    const userId = userdata?.user?.id || 208627;
    try {
      const response = await fetch(
        `https://api.rahomaskan.com/api/score?tgid=${userId}`,
      );
      const data = await response.json();
      const userData = data[0];
      setUser(userData);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setIsLoading(false); // Also set loading to false in case of error
    }
  };

  // Call fetchUserData initially to load user data
  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to refresh user data
  const refresh = () => {
    setIsLoading(true); // Set loading to true before fetching new data
    fetchUserData(); // Fetch the latest user data
  };

  return { user, isLoading, refresh }; // Return the refresh function
};

export default useUser;
