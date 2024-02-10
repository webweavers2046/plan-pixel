import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUser = (email) => {
    const axiosPublic = useAxios();

    const {data, refetch} = useQuery({
        queryKey: ['profile',email],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/users/${email}`)
           return await data.data;
        }
    })
    console.log('user data',data);

    return {data, refetch};
};

export default useUser;