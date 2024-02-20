import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import useAllTasks from './useAllTasks';

const useSingleWorkspace = (workSpaceId) => {
    const axiosPublic = useAxios();
    console.log(workSpaceId);

    const { data, refetch, isLoading, isPending } = useQuery({
        queryKey: ['workSpace', workSpaceId],
        queryFn: async () => {
            const data = await axiosPublic.get(`/single-workspace/${workSpaceId}`)
            return await data.data;
        }
    })
    return { data, refetch, isLoading, isPending };

};

export default useSingleWorkspace;