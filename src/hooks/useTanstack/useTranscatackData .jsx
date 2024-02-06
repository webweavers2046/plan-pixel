import { useQuery } from "@tanstack/react-query";
import apiConnector from "../useAxios";

const useTranscatackData = (endpoint, key) => {
  const xios = apiConnector();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await xios.get(endpoint);
      return res.data;
    },
  });

  return { data, isLoading, error, refetch };
};

export default useTranscatackData;
