// "use client";
// import { useContext, useEffect, useState } from "react";
// import useAxios from "./useAxios";
// import Task from "@/app/(withDashboardNavbarSidebar)/dashboard/tasks/Task";
// import { taskContext } from "@/Providers/TaskDndProvider";
// import useGlobalTaskData from "./useGlobalTaskData";

// const useGetSocketData = () => {
//     const xios = useAxios();
//     const [alltasks, setAllTasks] = useState([]);

//     useEffect(() => {
//         xios.get("/tasks").then((data) => setAllTasks(data.data));
//     }, [alltasks]);

//     // console.log("all data by http initially", alltasks)
//     return alltasks
// };

// export default useGetSocketData;
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

