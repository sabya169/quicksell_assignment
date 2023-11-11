import { useQuery, useMutation } from "react-query";

const STALE_TIME = 60000;
const CACHE_TIME = 60000;

export const useGetDataQuery = () => {
  const getData = useQuery({
    refetchOnWindowFocus: false,
    retry: false,
    queryKey: ["customApiData"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data (status ${response.status})`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("API request failed:", error);
        throw error;
      }
    },
    enabled: false,
    onSuccess: (data) => {
      // console.log("Data received:", data);
    },
    onError: (error) => {
      // console.error("Error in useGetDataQuery:", error);
    },
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const mutation = useMutation(getData.refetch);

  return { ...getData, refetch: mutation.mutate };
};
