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
  // const {allWorkspaceTasks} = useContext(ablyContext)
  
  
  const [clickedWorkspaceId, setClickedWorkspaceId] = useState([])
  const [isWorkspaceSwitched, setSwitchWorkspace] = useState(false)
  
  // Workspace related states
  const [activeWorkspace, setActiveWorkspace] = useState({});
  const [userWokspaceList, setUserWokspaceList] = useState([]);
  const [activeWorkspaceTasks, setActiveWorkspaceTasks] = useState([]);
  const [activeWorkspaceMembers, setActiveWorkspaceMembers] = useState([]);
  const [clickBaseFilterTaskId,setClickBaseFilterTaskId] = useState("")
  const [isUserHistoryStored,setIsUserHistoryStored] = useState(false)
  const [searchQueryFromHistory,setSearchQueryFromHistory] = useState("")

  // Archived tasks state
  const [archivedTasks,setArchivedTasks] =  useState([])
  const [archiveTaskId, setArchiveTaskId] = useState("")
  const [isTogglerEnabled,setIsTogglerEnabled] = useState(false)

  //Add member openning a modal
  const [WillAddMember, setWillAddMember] = useState(false);


  // Tab view 
  const [isActive,setIsActive] = useState("archived-tasks")

  const [loading, setLoading] = useState(true);
  let isMounted = true;
  const [userSearchHistory,setUserSearchHistory] = useState([])

// this function fetch the latest data 
const fetchLatestData = async () => {
  try {
    const userWorkspaces = await xios.get(`/api/active-workspace?userEmail=${user && user.email}`);

            // Only when component mounted trigger to set the latest data
            if (isMounted) {
                setActiveWorkspace(userWorkspaces.data.activeWorkspace);
                setUserWokspaceList(userWorkspaces.data.userWokspaceList);
                setActiveWorkspaceMembers(
                    userWorkspaces.data.activeWorkspaceMembers
                );
                setActiveWorkspaceTasks(
                    userWorkspaces.data.activeWorkspaceTasks
                );
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

// this funciton fetch the latest user search history
const fetchUserSearchHistory= async () => {
  const response = await xios.get(`/api/user/search-history/${user&&user.email}`)
  if(isMounted){
    setUserSearchHistory(response.data)
    console.log("this is the response we found after the get fetch request")
  }
}


// get all the arvhived data
const fetchArchivedData = async()=>  {
  const response = await xios.get("/api/read/archive-tasks")
  setArchivedTasks(response.data)
}

// fetch lates workspace related content and user history based on dependencies 
useEffect(() => {
  fetchLatestData();
  fetchUserSearchHistory()
  fetchArchivedData()
  return () => {
    isMounted = false;
  };
  
  // dependencies 
}, [
  user,
  clickBaseFilterTaskId,
  isUserHistoryStored,
  searchQueryFromHistory,
]);


// useEffect(()=> {
//   const currentUserEmail = user && user?.email
//   const activeWorkspaceId = activeWorkspace?._id


//   const filteredTasks = allWorkspaceTasks?.filter(task =>
//     task.workspace === activeWorkspaceId && task?.archived === false && 
//     (task.creator === currentUserEmail || task.members.includes(currentUserEmail)) 
//   );


//   // console.log(filteredTasks)
//   // setActiveWorkspaceTasks(filteredTasks)
// },
// // [allWorkspaceTasks])
// [])

// if (loading) return <Spinner/>


    // This funciton will create a new task in the task collection
  
    const handleCreateTask = async (
        newTask,
        setOpenModal,
        activeWorkspaceId
    ) => {
        const response = await xios.post(
            `/createTask/${activeWorkspaceId}/${user && user.email}`,
            newTask
        );
        console.log(activeWorkspaceId);
        if (response?.data?.insertedId) {
            setNewTask(newTask);
            setOpenModal(false);
            toast.success("Created a new task", { position: "top-right" });
            fetchLatestData();
        }
    };

  // Workspace data hanler
  const handleActiveWorkspace = async (e, _id) => {
    setClickedWorkspaceId(_id)
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

// delete a member from a workspace 
const handleDeleteMember = async(e,member,isDelete) => {

 const response = await xios.delete(`deleteMember/${activeWorkspace?._id}/${user&&user.email}/${member}`)
 if(response?.data?.error){
  toast.error(response.data.error,{position:"top-right"})
} else{
  toast.success(response.data.message,{position:"top-right"})
  fetchLatestData()
 }
}

// used in components > common > filter > filterModal.jsx
const handleTaskClick = async(taskId,workspaceId) => {
  const response = await xios.post(`/api/set-active-workspace-from-filter`,{userEmail:user?.email,workspaceId})
  setClickBaseFilterTaskId(taskId)
  if(response?.data.modifiedCount > 0) {
    fetchLatestData()
  }
}

const handleDeleteAllHistory = async() => {
  const res =  await xios.delete("/api/delte/search-history")
  if(res?.data.deletedCount > 0){
    setUserSearchHistory([])
  }
} 

// take the history to put it in the input again 
const handleHistoryClick = (historSearchQuery) => {
  setSearchQueryFromHistory(historSearchQuery)
}

// handle unArchiving single task
const handleUnarchive = async() => {

  const info = {
      taskId:archiveTaskId
  }
  const filteredTasks = archivedTasks?.filter(task => task?.taskId !== archiveTaskId)
  setArchivedTasks(filteredTasks)
  const response = await xios.post(`/api/tasks/archive`,info)
  console.log(response.data)
}


// handle multi-select archive (from the task.jsx)
const handleMultipleArchive = async() => {
  const AllSelectedTaskstoArchive= JSON.parse(localStorage.getItem('selectedTasks')) || [];
  // sending api request to archive multiple tasks
  const response = await xios.post(`/api/tasks/archive?isArchive=${true}`,AllSelectedTaskstoArchive)

  if(response.data.insertedCount >= 1 ){
    fetchLatestData()
    fetchArchivedData()
    toast.success("Archived",{position:"top-right"})
    setIsActive("archived-tasks")
    
    
  localStorage.removeItem("selectedTasks");
  }
}
// handle multi-select archive (from the task.jsx)
const handleMultipleUnArchive = async() => {
  const AllSelectedTaskstoUnArchive = JSON.parse(localStorage.getItem('unarchiveTaskIds')) || [];
  // sending api request to archive multiple tasks
  const response = await xios.post(`/api/tasks/archive`,AllSelectedTaskstoUnArchive)

  if(response.data.deletedCount >= 1 ){
    fetchLatestData()
    fetchArchivedData()
    toast.success("unArchived",{position:"top-right"})
    setIsActive("all-tasks")
  localStorage.removeItem("unarchiveTaskIds");
  }
}



  const data = {
    activeWorkspace, 
    setActiveWorkspace,

    userWokspaceList, 
    activeWorkspaceTasks,
    activeWorkspaceMembers,
    fetchLatestData,
    handleDeleteMember,
    handleTaskClick,
    clickBaseFilterTaskId,

    // add member
    setWillAddMember,
    WillAddMember,

    // used in filterModal.jsx
    setClickBaseFilterTaskId,

    // tab view / archive data
    setIsActive,
    isActive, 
    archivedTasks,
    fetchArchivedData,
    handleUnarchive,
    setArchiveTaskId,
    setIsTogglerEnabled,
    isTogglerEnabled,
    handleMultipleArchive,
    handleMultipleUnArchive,

    //user search history
    userSearchHistory,
    setIsUserHistoryStored,
    isUserHistoryStored,
    handleDeleteAllHistory,
    handleHistoryClick,
    setSearchQueryFromHistory,
    searchQueryFromHistory,

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
