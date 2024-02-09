"use client";

import useAxios from "@/hooks/useAxios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthProviders";

export const globalContext = createContext(null);

const GlobalContext = ({ children }) => {
  // manage all of your state here ..
  const [newTask, setNewTask] = useState("");
  const xios = useAxios();
  const { user } = useContext(AuthContext);
  const [workspaceBasedTasks, setWorkspaceTasks] = useState([]);
  const [workspaceBasedMembers, setWorkspaceMembers] = useState([]);
  const [activeWrokspace, setActiveWorkspace] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);

  // getting the workspace that recently was active
  useEffect(() => {
    xios.get(`/active-workspace`).then((res) => {
      // Sorting tasks by position and updatedAt for consistent display
      const sortedTasks = res.data?.sort((a, b) => {
        if (a.position !== b.position) {
          return a.position - b.position;
        }
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });

      setActiveWorkspace(sortedTasks);
    });
  }, []);

  useEffect(() => {
    // All workspaces list in initial load
    xios
      .get(`/userWokspaces/${user ? user.email : "shakilahmmed8882@gmail.com"}`)
      .then((res) => {
        setWorkspaces(res.data);
      });
  }, []);

  useEffect(() => {
    // All workspaces task in initial load
    xios.get(`/active-workspace`).then((res) => {
      setWorkspaceTasks(res.data);
    });
  }, []);

  // This funciton will create a new task in the task collection
  const handleCreateTask = (newTask, setOpenModal) => {
    // Calling it above for faster overview
    // console.log(newTask);
    xios.post("/createTask", newTask).then((res) => {
      // console.log(res.data);
      if (res?.data?.insertedId) {
        setNewTask(newTask);
        setOpenModal(false);
        toast.success("Created a new task", { position: "top-right" });
      }
    });
  };

  // Workspace data hanler

  const handleActiveWorkspace = async (e, _id) => {
    console.log("workspace id", _id);
    const alltasksAndMembersInIt = await xios.get(
      `/active-workspace?workspaceId=${_id}`
    );
    if (alltasksAndMembersInIt.data) {
      setWorkspaceTasks(alltasksAndMembersInIt.data.tasks);
      setWorkspaceMembers(alltasksAndMembersInIt.data.members);
      setActiveWorkspace(alltasksAndMembersInIt.data.updatedWorkspace);
    }
  };

  // when user click on the dropdown for workspace list fetch
  // workspace list from the database
  const handleDropdownClick = async (e) => {
    e.preventDefault();
    const userWorkspaces = await xios.get(
      `/userWokspaces/${user.email ? user.email : "shakilahmmed8882@gmail.com"}`
    );
    setWorkspaces(userWorkspaces.data);
  };

  console.log(workspaceBasedTasks);
  const data = {
    handleCreateTask,
    newTask,
    workspaceBasedTasks,
    workspaceBasedMembers,
    handleActiveWorkspace,
    setNewTask,
    activeWrokspace,
    handleDropdownClick,
    workspaces,
  };
  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
};

export default GlobalContext;
