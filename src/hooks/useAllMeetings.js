import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllMeetings = () => {
    const axiosPublic = useAxios()

    const {data, refetch, isLoading} = useQuery({
        queryKey: ['AllMeetings'],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/api/meetings`)
           return  data.data;
        }
    })
    // console.log('All tasks',data);

    return {data, refetch, isLoading};
    
};

export default useAllMeetings;