import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useArchivedTasks = () => {

    const axiosPublic = useAxios()

    const {data, refetch, isLoading} = useQuery({
        queryKey: ['ArchivedTasks'],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/api/read/archive-tasks`)
           return await data.data;
        }
    })
    console.log('Archived tasks',data);

    return {data, refetch, isLoading};
};

export default useArchivedTasks;

