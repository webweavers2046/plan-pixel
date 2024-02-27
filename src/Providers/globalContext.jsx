"use client";

import useAxios from "@/hooks/useAxios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthProviders";
import { ablyContext } from "@/components/ably/AblyProvider";

export const globalContext = createContext(null);
const GlobalContext = ({ children }) => {
    // manage all of your state here ..
    const [newTask, setNewTask] = useState("");
    const xios = useAxios();
    const { user } = useContext(AuthContext);
    
    const [clickedWorkspaceId, setClickedWorkspaceId] = useState([]);
    const [isWorkspaceSwitched, setSwitchWorkspace] = useState(false);


// Archived tasks state
  const [archivedTasks,setArchivedTasks] =  useState([])
  const [archiveTaskId, setArchiveTaskId] = useState("")
  const [isTogglerEnabled,setIsTogglerEnabled] = useState(false)

  //Add member openning a modal
  const [WillAddMember, setWillAddMember] = useState(false);

    const [activeWorkspace, setActiveWorkspace] = useState({});
    const [userWokspaceList, setUserWokspaceList] = useState([]);
    const [activeWorkspaceTasks, setActiveWorkspaceTasks] = useState([]);
    const [activeWorkspaceMembers, setActiveWorkspaceMembers] = useState([]);
    const [clickBaseFilterTaskId, setClickBaseFilterTaskId] = useState("");
    const [isUserHistoryStored, setIsUserHistoryStored] = useState(false);
    const [searchQueryFromHistory, setSearchQueryFromHistory] = useState("");


    // Get real time tasks state using ably 
    const {allWorkspaceTasks} = useContext(ablyContext)

    

  // Tab view 
  const [isActive,setIsActive] = useState("all-tasks")
  // when click in filterd task to scrolled into view
  const [shouldScrollIntoView,setShouldScrollIntoView] = useState(false)
  
  //see..
  const [loading, setLoading] = useState(true);
  let isMounted = true;
  const [userSearchHistory,setUserSearchHistory] = useState([])

// this function fetch the latest data 
const fetchLatestData = async () => {
  try {
    const userWorkspaces = await xios.get(`/api/active-workspace?userEmail=${user && user.email}`);

   

            // Only when component mounted trigger to set the latest data
            if (isMounted) {
                setActiveWorkspace(userWorkspaces?.data?.activeWorkspace);
                setUserWokspaceList(userWorkspaces?.data?.userWokspaceList);
                setActiveWorkspaceMembers(
                    userWorkspaces?.data?.activeWorkspaceMembers
                );
                setActiveWorkspaceTasks(
                    userWorkspaces?.data?.activeWorkspaceTasks
                );
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };



// get all the arvhived data
const fetchArchivedData = async()=>  {
    const response = await xios?.get("/api/read/archive-tasks")
    setArchivedTasks(response?.data)
  }


    // this funciton fetch the latest user search history
    const fetchUserSearchHistory = async () => {
        const response = await xios?.get(
            `/api/user/search-history/${user && user.email}`
        );
        if (isMounted) {
            setUserSearchHistory(response.data);
            // console.log(
            //     "this is the response we found after the get fetch request"
            // );
        }
    };

    // fetch lates workspace related content and user history based on dependencies
    useEffect(() => {
        fetchLatestData();
        fetchArchivedData()
        fetchUserSearchHistory();
        return () => {
            isMounted = false;
        };
    }, [
        user,
        clickBaseFilterTaskId,
        isUserHistoryStored,
        searchQueryFromHistory,
        shouldScrollIntoView
    ]);

    useEffect(()=> {
        if(allWorkspaceTasks?.length > 0) {
            setActiveWorkspaceTasks(allWorkspaceTasks)
        } else {
            fetchLatestData()
        }

    },[
        // allWorkspaceTasks
    ])


    // if (loading) return <Spinner />;

    // This function will create a new task in the task collection
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
        setClickedWorkspaceId(_id);
        // console.log("__________________________", user?.email);
        await xios.get(
            `/api/active-workspace?switchActiveWorkspace=${true}&workspaceId=${_id}&userEmail=${
                user?.email
            }`
        );

        // fetch the latest active workspace after switching
        fetchLatestData();
        // console.log("form global", activeWorkspaceTasks);
    };

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
                toast.error(response.data.error, { position: "top-right" });
            } else {
                toast.success(response.data.message, { position: "top-right" });
                fetchLatestData();
            }
        }
    };

    // delete a member from a workspace
    const handleDeleteMember = async (e, member, isDelete) => {
        const response = await xios.delete(
            `deleteMember/${activeWorkspace?._id}/${
                user && user.email
            }/${member}`
        );
        if (response?.data?.error) {
            toast.error(response.data.error, { position: "top-right" });
        } else {
            toast.success(response.data.message, { position: "top-right" });
            fetchLatestData();
        }
    };

    // used in components > common > filter > filterModal.jsx
    const handleTaskClick = async (taskId, workspaceId) => {
        const response = await xios.post(
            `/api/set-active-workspace-from-filter`,
            { userEmail: user?.email, workspaceId }
        );
        setClickBaseFilterTaskId(taskId);
        // setIsActive("all-tasks")
        setShouldScrollIntoView(true)
        if (response?.data.modifiedCount > 0) {
            fetchLatestData();
        }
    };

    const handleDeleteAllHistory = async () => {
        const res = await xios.delete("/api/delte/search-history");
        if (res?.data.deletedCount > 0) {
            setUserSearchHistory([]);
        }
    };

    // take the history to put it in the input again
    const handleHistoryClick = (historSearchQuery) => {
        setSearchQueryFromHistory(historSearchQuery);
    };


    // Archive handler 
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
    //   setIsActive("archived-tasks")
      
      
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




    




    // Notification Informations

    const [notifications, setNotifications] = useState();

    
    
    // console.log(user?.email);



    // active workspace for notification
    const [activeWorkspaceReal, setActiveWorkspaceReal] = useState({})
    useEffect(()=> {
        fetch(
            `https://plan-pixel-backend.vercel.app/api/workspaces/active/${user?.email}`
        )
        .then(res=> res.json())
        .then((data)=> {
            setActiveWorkspaceReal(data);
            console.log(data);
        })
    },[user])

    useEffect(()=> {
            fetch(
                `https://plan-pixel-backend.vercel.app/api/notifications/${activeWorkspaceReal?._id}`
            )
            .then(res=> res.json())
            .then((data) => {
                setNotifications(data)
                console.log(data);
            })
    }, [activeWorkspaceReal])
    console.log(notifications);
    console.log(activeWorkspaceReal);

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

        //user search history
        userSearchHistory,
        setIsUserHistoryStored,
        isUserHistoryStored,
        handleDeleteAllHistory,
        handleHistoryClick,
        setSearchQueryFromHistory,
        searchQueryFromHistory,
        setWillAddMember,
        WillAddMember,
            
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
        shouldScrollIntoView,
        setShouldScrollIntoView,


        handleCreateTask,
        newTask,
        handleActiveWorkspace,
        setNewTask,
        handleDropdownClick,

        clickedWorkspaceId,
        setSwitchWorkspace,
        isWorkspaceSwitched,
        handleDeleteWorkspace,

       

        notifications,
        activeWorkspaceReal
    };

    return (
        <globalContext.Provider value={data}>{children}</globalContext.Provider>
    );
    
}
export default GlobalContext;