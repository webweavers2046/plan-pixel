"use client";

import useAxios from "@/hooks/useAxios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const globalContext = createContext(null);

const GlobalContext = ({ children }) => {

// manage all of your state here ..
  const [newTask, setNewTask] = useState("")
  const xios = useAxios();
// This funciton will create a new task in the task collection
  const handleCreateTask = (newTask, setOpenModal) => {

    // Calling it above for faster overview
    setNewTask(newTask)
    xios.post("/createTask", newTask).then((res) => {
      console.log(res.data);
      if (res?.data?.insertedId) {
        setOpenModal(false);
        toast.success("Created a new task", { position: "top-right" });
      }
    });
  };


  const data = {
    handleCreateTask,
    newTask
  };

  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
};

export default GlobalContext;
