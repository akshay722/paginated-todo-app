import { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:8000/api";

// Custom hook for fetching data from an API
export default function useFetchAPI(endpoint: string) {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Asynchronous function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        const json = await response.json();
        setData(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false); // Set loading state to false once the request is complete
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, setData };
}
