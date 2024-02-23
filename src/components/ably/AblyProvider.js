// Importing necessary dependencies
"use client";
import { createContext, useEffect, useState } from "react";
import Ably from "ably/promises";
const ablyKey = process.env.NEXT_PUBLIC_ABLY_KEY;

// Creating an instance of Ably and obtaining the tasks channel
const ably = new Ably.Realtime.Promise({
  key: ablyKey,
});
const ablyChannel = ably.channels.get("tasks");

// Creating a context for sharing Ably-related data with components
export const ablyContext = createContext();


const AblyProvider = ({ children }) => {

  // State for managing the tasks received from Ably
  const [tasks, setTasks] = useState([]);
  // state related to workspace
  const [allWorkspaces,setAllWrokspaces] = useState([])
  const [allWorkspaceMembers,setAllworkspaceMembers] = useState([])
  const [allWorkspaceTasks,setAllWorkspaceTasks] = useState([])
  const [activeWorkspace,setSetActiveWorkspace] = useState({})


  useEffect(() => {
    // Function to connect to Ably
    const connectAbly = async () => {
      try {
        await ably.connect();
        console.log("Ably connected!");
      } catch (error) {
        console.error("Error connecting to Ably:", error);
      }
    };


    // Calling the connectAbly function
    connectAbly();

   
    // Ably listener function to handle incoming messages
    const ablyListener = (message) => {
      
      // console.log("listener_____", message?.data)
    };

    // here recieve user workspaces,tasks and member and active workspace. 
    ablyChannel.subscribe("workspaces",(message)=> {
      const response = message.data
      setAllWrokspaces(response.allWorkspaces)
      setAllworkspaceMembers(response.allMembersInWorkspace)
      setAllWorkspaceTasks(response.allTasksInWorkspace)
      setSetActiveWorkspace(response.activeWorkspace)
      })

    // Subscribing to the Ably channel with the ablyListener
    ablyChannel.subscribe(ablyListener);



    // Cleanup function to unsubscribe from the channel and close the Ably connection
    return async () => {
      ablyChannel.unsubscribe(ablyListener);
      try {
        // Closing the Ably connection
        // await ably.close();
        // console.log("Ably connection closed successfully.");
      } catch (error) {
        console.error("Error closing Ably connection:", error);
      }
    };
  }, [tasks]);


  // Distribute all data by 
  const distributingData = {
    allWorkspaces,
    activeWorkspace,
    allWorkspaceMembers,
    allWorkspaceTasks,
    tasks
  }

  // Providing the tasks data to its children through the context
  return (
    <ablyContext.Provider value={distributingData}>{children}</ablyContext.Provider>
  );
};

// Exporting the AblyProvider component as the default export
export default AblyProvider;