import { useQuery } from "react-query";

const fetchApiData = async () => {
  const response = await fetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );
  if (!response.ok) {
    throw new Error("Network request failed");
  }
  return response.json();
};

const useQueryHook = () => {
  const { data, isLoading, isError } = useQuery("customApiData", fetchApiData);

  console.log(data);

  return { data, isLoading, isError };
};

export default useQueryHook;
