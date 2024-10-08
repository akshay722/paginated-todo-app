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
        const response = await fetch(`${API_BASE_URL}/${endpoint}`); // Fetch data from the endpoint
        const json = await response.json(); // Parse response as JSON
        setData(json); // Update state with the fetched data
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false); // Set loading state to false once the request is complete
      }
    };

    fetchData();
  }, [endpoint]);

  // Return the fetched data and loading state
  return { data, isLoading, setData };
}
