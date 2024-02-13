import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useSingleWorkspace = (workSpaceId) => {
    const axiosPublic = useAxios();



    const { data, refetch, isLoading, isPending } = useQuery({
        queryKey: ['workSpace', workSpaceId],
        queryFn: async () => {
            const data = await axiosPublic.get(`/workSpaces/${workSpaceId}`)
            return await data.data;
        }
    })


    return { data, refetch, isLoading, isPending };
};

export default useSingleWorkspace;