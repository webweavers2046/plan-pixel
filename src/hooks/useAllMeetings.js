import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useGlobalContext from "./useGlobalContext";

const useAllMeetings = () => {
  const axiosPublic = useAxios();
  const { activeWorkspace } = useGlobalContext();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["AllMeetings"],
    queryFn: async () => {
      const data = await axiosPublic.get(`/api/meetings/${activeWorkspace._id}`);
      return data.data;
      
    },
  });
  
  return { data, refetch, isLoading };
};

export default useAllMeetings;
