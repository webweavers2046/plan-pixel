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
  // const [activeWrokspace, setActiveWorkspace] = useState([]);
  const [clickedWorkspaceId, setClickedWorkspaceId] = useState([])
  const [isWorkspaceSwitched, setSwitchWorkspace] = useState(false)
  

//activeWorkspace,userWokspaceList, activeWorkspaceTasks, activeWorkspaceMembers
  const [activeWorkspace,setActiveWorkspace] = useState({})
  const [userWokspaceList,setUserWokspaceList] = useState([])
  const [activeWorkspaceTasks,setActiveWorkspaceTasks] = useState([])
  const [activeWorkspaceMembers,setActiveWorkspaceMembers] = useState([])

 console.log("global 30", activeWorkspace)
  

  const fetchLatestData = async () => {
    try {
      const userWorkspaces = await xios.get(`/api/active-workspace?userEmail=${user && user.email}`);
      console.log("Server Response:", userWorkspaces.data);
      setActiveWorkspace(userWorkspaces.data.activeWorkspace);
      setUserWokspaceList(userWorkspaces.data.userWokspaceList)
      setActiveWorkspaceMembers(userWorkspaces.data.activeWorkspaceMembers)
      setActiveWorkspaceTasks(userWorkspaces.data.activeWorkspaceTasks)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchLatestData();
  }, [user]);

  // This funciton will create a new task in the task collection
  const handleCreateTask = async (newTask, setOpenModal,activeWorkspaceId) => {
    const response = await xios.post(`/createTask/${activeWorkspaceId}/${user&&user.email}`, newTask)
    console.log(activeWorkspaceId)
    if (response?.data?.insertedId) {
        setNewTask(newTask);
        setOpenModal(false);
        toast.success("Created a new task", { position: "top-right" });
        await fetchLatestData()
      }
  };

  // Workspace data hanler
  const handleActiveWorkspace = async (e, _id) => {
    setClickedWorkspaceId(_id)
    console.log(user?.email)
    await xios.get(`/api/active-workspace?switchActiveWorkspace=${true}&workspaceId=${_id}&userEmail=${user?.email}`
    );

    // fetch the latest active workspace after switching
    fetchLatestData()
  };

  // when user click on the dropdown for workspace list fetch
  // workspace list from the database
  const handleDropdownClick = async (e) => {
    e.preventDefault();
  };

// Delete workspace
const handleDeleteWorkspace = async (e, _id,isDelete) => {
  e.preventDefault();
  // delete workspace from the database
  if (isDelete) {
    const response = await xios.delete(
      `deleteWorkspace/${_id}/${user && user.email}`
    );
    if (response.data) {
      fetchLatestData()
      toast.success(response.data.message,{position:"top-right"});
    }
  
  }
};

const handleDeleteMembers = async() => {

}



  const data = {
    activeWorkspace, 
    userWokspaceList, 
    activeWorkspaceTasks,
    activeWorkspaceMembers,
    fetchLatestData,
    handleDeleteMembers,

    handleCreateTask,
    newTask,
    workspaceBasedTasks,
    workspaceBasedMembers,
    handleActiveWorkspace,
    setNewTask,
    handleDropdownClick,
   
    clickedWorkspaceId,
    setSwitchWorkspace,
    isWorkspaceSwitched,
    handleDeleteWorkspace
  };



  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
};

export default GlobalContext;
