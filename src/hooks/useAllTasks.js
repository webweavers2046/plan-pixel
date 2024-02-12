import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAllTasks = () => {

    const axiosPublic = useAxios()

    const {data, refetch, isLoading} = useQuery({
        queryKey: ['AllTasks'],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/tasks`)
           return await data.data;
        }
    })
    // console.log('All tasks',data);

    return {data, refetch, isLoading};
};

export default useAllTasks;

