import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useComments = (cardId) => {
    const axiosPublic = useAxios();
    // console.log(cardId);

    const {data, refetch} = useQuery({
        queryKey: ['comments',cardId],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/card-comments/${cardId}`)
           return await data.data;
        }
    })
    // console.log('comments data',data);

    return {data, refetch};
};

export default useComments;