"use client";

import useAxios from "@/hooks/useAxios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthProviders";
import Spinner from "@/components/Common/CommonModal/Spinner";

export const globalContext = createContext(null);


const GlobalContext = ({ children }) => {

  // manage all of your state here ..
  const [newTask, setNewTask] = useState("");
  const xios = useAxios();
  const { user } = useContext(AuthContext);
  
  const [clickedWorkspaceId, setClickedWorkspaceId] = useState([])
  const [isWorkspaceSwitched, setSwitchWorkspace] = useState(false)
  

const [activeWorkspace, setActiveWorkspace] = useState({});
const [userWokspaceList, setUserWokspaceList] = useState([]);
const [activeWorkspaceTasks, setActiveWorkspaceTasks] = useState([]);
const [activeWorkspaceMembers, setActiveWorkspaceMembers] = useState([]);
const [loading, setLoading] = useState(true);
let isMounted = true;


      console.log(activeWorkspaceTasks);

const fetchLatestData = async () => {
  try {
    const userWorkspaces = await xios.get(`/api/active-workspace?userEmail=${user && user.email}`);
    console.log("Server Response:", userWorkspaces.data);

    if (isMounted) {
      setActiveWorkspace(userWorkspaces.data.activeWorkspace);
      setUserWokspaceList(userWorkspaces.data.userWokspaceList);
      setActiveWorkspaceMembers(userWorkspaces.data.activeWorkspaceMembers);
      setActiveWorkspaceTasks(userWorkspaces.data.activeWorkspaceTasks);
      setLoading(false);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    setLoading(false);
  }
};

useEffect(() => {
  fetchLatestData();
  return () => {
    isMounted = false;
  };
}, [user]);

// if (loading) return <Spinner/>


  // This funciton will create a new task in the task collection
  const handleCreateTask = async (newTask, setOpenModal,activeWorkspaceId) => {
    const response = await xios.post(`/createTask/${activeWorkspaceId}/${user&&user.email}`, newTask)
    console.log(activeWorkspaceId)
    if (response?.data?.insertedId) {
        setNewTask(newTask);
        setOpenModal(false);
        toast.success("Created a new task", { position: "top-right" });
        fetchLatestData()
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
    console.log("form global", activeWorkspaceTasks)
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
    if(response?.data?.error){
      toast.error(response.data.error,{position:"top-right"})
    } else{
      toast.success(response.data.message,{position:"top-right"})
      fetchLatestData()
     }
  }
};

const handleDeleteMember = async(e,member,isDelete) => {

 const response = await xios.delete(`deleteMember/${activeWorkspace?._id}/${user&&user.email}/${member}`)
 if(response?.data?.error){
  toast.error(response.data.error,{position:"top-right"})
} else{
  toast.success(response.data.message,{position:"top-right"})
  fetchLatestData()
 }
}
console.log("activeWorkspace",activeWorkspaceTasks);
  const data = {
    activeWorkspace, 
    userWokspaceList, 
    activeWorkspaceTasks,
    activeWorkspaceMembers,
    fetchLatestData,
    handleDeleteMember,


    handleCreateTask,
    newTask,
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
