// hooks/useUser.ts
import { useEffect } from "react";
import { useSetState } from "@mantine/hooks";
import WebApp from "@twa-dev/sdk";
const userdata = WebApp.initDataUnsafe;

const useUser = () => {
  const [user, setUser] = useSetState({
    userid: 0,
    name: "",
    fire: 0,
    wind: 0,
    earth: 0,
    water: 0,
    tree: 0,
    light: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = userdata?.user?.id || 208627;
      try {
        const response = await fetch(
          `https://api.rahomaskan.com/api/score?tgid=${userId}`,
        );
        const data = await response.json();
        const userData = data[0];
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  });

  return user;
};

export default useUser;
