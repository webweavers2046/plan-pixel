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
  const [clickBaseFilterTaskId, setClickBaseFilterTaskId] = useState("")
  const [loading, setLoading] = useState(true);
  let isMounted = true;

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


  // this useEffect for rerendering when filter get cleared to set clickbasedFilterTaskId to ""
  useEffect(() => {
    // just rerender 
  }, [clickBaseFilterTaskId])

  if (loading) return <Spinner />



  // This funciton will create a new task in the task collection
  const handleCreateTask = async (newTask, setOpenModal, activeWorkspaceId) => {
    const response = await xios.post(`/createTask/${activeWorkspaceId}/${user && user.email}`, newTask)
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


  console.log(clickBaseFilterTaskId)


  // when user click on the dropdown for workspace list fetch
  // workspace list from the database
  const handleDropdownClick = async (e) => {
    e.preventDefault();
  };

  // Delete workspace
  const handleDeleteWorkspace = async (e, _id, isDelete) => {
    e.preventDefault();

    // delete workspace from the database
    if (isDelete) {

      const response = await xios.delete(
        `deleteWorkspace/${_id}/${user && user.email}`
      );
      if (response?.data?.error) {
        toast.error(response.data.error, { position: "top-right" })
      } else {
        toast.success(response.data.message, { position: "top-right" })
        fetchLatestData()
      }
    }
  };

  const handleDeleteMember = async (e, member, isDelete) => {

    const response = await xios.delete(`deleteMember/${activeWorkspace?._id}/${user && user.email}/${member}`)
    if (response?.data?.error) {
      toast.error(response.data.error, { position: "top-right" })
    } else {
      toast.success(response.data.message, { position: "top-right" })
      fetchLatestData()
    }
  }

  // For meeting page
  const handleCreateMeeting = async (newMeeting) => {
    const response = await xios.post(`/api/meetings`, newMeeting)
    if (response.data.insertedId) {
      toast.success("Meeting Created", { position: "top-center" });

    }
  }



  // used in components > common > filter > filterModal.jsx
  const handleTaskClick = async (taskId, workspaceId) => {
    const response = await xios.post(`/api/set-active-workspace-from-filter`, { userEmail: user?.email, workspaceId })
    setClickBaseFilterTaskId(taskId)
    if (response?.data.modifiedCount > 0) {
      fetchLatestData()
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
    // used in filterModal.jsx
    setClickBaseFilterTaskId,

    handleCreateTask,
    newTask,
    handleActiveWorkspace,
    setNewTask,
    handleDropdownClick,

    clickedWorkspaceId,
    setSwitchWorkspace,
    isWorkspaceSwitched,
    handleDeleteWorkspace,

    handleCreateMeeting,

  };



  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
};

export default GlobalContext;
