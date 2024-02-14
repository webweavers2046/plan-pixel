import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useSingleWorkspace from "./useSingleWorkspace";

const useCardTasks = (cardId) => {
    const axiosPublic = useAxios();

    const {data, refetch, isLoading, isPending} = useQuery({
        queryKey: ['cards',cardId],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/cardTasks/${cardId}`)
           return await data.data;
        }
    })
    // console.log(data);
    

    return {data, refetch, isLoading, isPending};
};

export default useCardTasks;