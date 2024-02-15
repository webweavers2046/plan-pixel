import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import useAllTasks from './useAllTasks';

const useSingleWorkspace = (workSpaceId) => {
    const axiosPublic = useAxios();
    const {data : allTasks} = useAllTasks();
    const workspaceBasedCards = allTasks?.filter(card => card.workspace == workSpaceId)
    console.log(workspaceBasedCards);



    // const { data, refetch, isLoading, isPending } = useQuery({
    //     queryKey: ['workSpace', workSpaceId],
    //     queryFn: async () => {
    //         const data = await axiosPublic.get(`/workSpaces/${workSpaceId}`)
    //         return await data.data;
    //     }
    // })
    // return { data, refetch, isLoading, isPending };
    return workspaceBasedCards;


};

export default useSingleWorkspace;