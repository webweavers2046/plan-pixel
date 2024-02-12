"use client";



import { useContext, useEffect, useState } from "react";
import useAxios from "./useAxios";
import Task from "@/app/(withDashboardNavbarSidebar)/dashboard/tasks/Task";
import { taskContext } from "@/Providers/TaskDndProvider";
import useGlobalTaskData from "./useGlobalTaskData";

const useGetSocketData = () => {
    const xios = useAxios();
    const [alltasks, setAllTasks] = useState([]);

    useEffect(() => {
        xios.get("/tasks").then((data) => setAllTasks(data.data));
    }, [alltasks]);

    // console.log("all data by http initially", alltasks)
    return alltasks
};

export default useGetSocketData;
