"use client";

/*
import { socket } from "@/components/sockets/Sockets";
import { useState } from "react";

const useGetSocketData = () => {
 const [alltasks,setAllTasks] = useState([])
 
  socket.on("tasks", (tasks)=> {
    console.log("from the task file", tasks)
    setAllTasks(tasks)
  });

  return {alltasks}

};

export default useGetSocketData;

*/

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
    }, []);

    // console.log("all data by http initially", alltasks)
    return alltasks;
};

export default useGetSocketData;
