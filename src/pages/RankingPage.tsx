import { useState, useEffect } from "react";
import { Loader } from "@mantine/core";
interface RankingItem {
  name: string;
  score: number;
}

const RankingPage = () => {
  const [data, setData] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rahomaskan.com/api/ranking");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader color="blue" size="xl" type="dots" />
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RankingPage;
