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
  const [clickedWorkspaceId, setClickedWorkspaceId] = useState([])
  const [isWorkspaceSwitched, setSwitchWorkspace] = useState(false)
  const [defaultActiveWorkspace, setDefaultWorkspace] = useState({})

  const [toggleValue,setToggleValue] = useState(false)
  
  useEffect(() => {
    // Fetch active workspace, user workspaces, and workspace tasks in one go
    Promise.all([
      xios.get('/active-workspace'),
      xios.get(`/userWokspaces/${user ? user?.email : 'shakilahmmed8882@gmail.com'}`),
      xios.get('/active-workspace'),
      xios.get('/api/workspaces/active'),
    ])
      .then(([activeWorkspaceRes, userWorkspacesRes, allWorkspaceTasksRes,defaultActiveWokspace]) => {
        // Sorting tasks by position and updatedAt for consistent display
        const sortedTasks = activeWorkspaceRes.data?.sort((a, b) => {
          if (a.position !== b.position) {
            return a.position - b.position;
          }
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
  
        // Set state for active workspace, user workspaces, and all workspace tasks
        setActiveWorkspace(sortedTasks);
        setWorkspaces(userWorkspacesRes.data);
        setWorkspaceTasks(allWorkspaceTasksRes.data);
        setDefaultWorkspace(defaultActiveWokspace.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
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
    setClickedWorkspaceId(_id)
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
    setSwitchWorkspace(!isWorkspaceSwitched);  
  };



  
const TriggerWhenNewWorkspaceCreated = () => {
  setToggleValue(!toggleValue)
}


// console.log(toggleValue)
useEffect(()=> {
  xios.get("/api/workspaces/active")
  .then(res => {
    if(!res.data) return "coming"
    setDefaultWorkspace(res?.data)
  })
},[isWorkspaceSwitched,toggleValue])




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
    defaultActiveWorkspace,
    clickedWorkspaceId,
    setSwitchWorkspace,
    isWorkspaceSwitched,
    

    TriggerWhenNewWorkspaceCreated
  };
  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
};

export default GlobalContext;
