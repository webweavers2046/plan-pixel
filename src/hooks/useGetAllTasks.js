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

import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useGetSocketData = () => {
    const xios = useAxios();
    const [alltasks = [], setAllTasks] = useState([]);

    useEffect(() => {
        xios.get("/tasks").then((data) => setAllTasks(data.data));
    }, []);

    return alltasks.length > 0 ? alltasks : [];
};

export default useGetSocketData;
