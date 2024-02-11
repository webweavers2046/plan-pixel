import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSingleTask = (id) => {
    console.log(id);
   
    const axiosPublic = useAxios()

    const {data, refetch, isLoading, isPending} = useQuery({
        queryKey: ['task',id],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/singleTask/${id}`)
           return await data.data;
        }
    })
    // console.log('single task',data);

    return {data, refetch, isLoading, isPending};
};

export default useSingleTask;