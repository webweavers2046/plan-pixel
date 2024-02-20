/**
 * hooks for fetching all tasks
 * hoosks filtering task without one changed state by id 
 * send the data to the task page from the global 
 * 
 * ---------------
 * workspace
 * ---------------
 * Change the tasks based on the active workspace 
 * validate is user member or admin of the specific workspace 
 * Add a option to "add member" where all memebers in user db will be show in a list
 * When click on a specific workspace take workspace id and the user email going to become a member of thet workspace 
 * 
 * 
 * ----------------
 * Add member 
 * ----------------
 * 
 * create backend api for adding member 
 * check is the email is valid
 * once recieve find the workspace and push the email to the wokspace member array. 
 * 
 * Design plus icon to add new member 
 * fetch the all the some user and display list to add 
 * based on selection request to database to recieve that member email and workspace id 
 * 
 * ------------------------------------------
 * active workspace name display
 * ------------------------------------------
 * send 
 * 
 * 
 * 
 * 
 * 
 * 
 



 */

























// // Importing necessary dependencies
// "use client";
// import { createContext, useEffect, useState } from "react";
// import Ably from "ably/promises";
// const ablyKey = process.env.NEXT_PUBLIC_ABLY_KEY;

// // Creating an instance of Ably and obtaining the tasks channel
// const ably = new Ably.Realtime.Promise({
//   key: ablyKey,
// });
// const ablyChannel = ably.channels.get("tasks");

// // Creating a context for sharing Ably-related data with components
// export const ablyContext = createContext();


// const AblyProvider = ({ children }) => {

//   // State for managing the tasks received from Ably
//   const [tasks, setTasks] = useState([]);
//   // state related to workspace
//   const [allWorkspaces,setAllWrokspaces] = useState([])
//   const [allWorkspaceMembers,setAllworkspaceMembers] = useState([])
//   const [allWorkspaceTasks,setAllWorkspaceTasks] = useState([])
//   const [activeWorkspace,setSetActiveWorkspace] = useState({})


//   useEffect(() => {
//     // Function to connect to Ably
//     const connectAbly = async () => {
//       try {
//         await ably.connect();
//         console.log("Ably connected!");
//       } catch (error) {
//         console.error("Error connecting to Ably:", error);
//       }
//     };


//     // Calling the connectAbly function
//     connectAbly();

//     ablyChannel.publish("userEmail", { userEmail: "abc@gmail.com" });
//     ablyChannel.publish("isTaskDropped", { userEmail: "abc@gmail.com" });
//     // Ably listener function to handle incoming messages
//     const ablyListener = (message) => {
//       // Sorting tasks by position and updatedAt for consistent display
//       // const sortedTasks = message?.data?.sort((a, b) => {
//       //   if (a.position !== b.position) {
//       //     return a.position - b.position;
//       //   }
//       //   return new Date(b.updatedAt) - new Date(a.updatedAt);
//       // });

      
//       // Updating state with the sorted tasks
//       // setTasks(sortedTasks);
//     };

//     // here recieve user workspaces,tasks and member and active workspace. 
//     ablyChannel.subscribe("workspaces",(message)=> {
//       const response = message.data
//       setAllWrokspaces(response.allWorkspaces)
//       setAllworkspaceMembers(response.allMembersInWorkspace)
//       setAllWorkspaceTasks(response.allTasksInWorkspace)
//       setSetActiveWorkspace(response.activeWorkspace)
//       })

//     // Subscribing to the Ably channel with the ablyListener
//     ablyChannel.subscribe(ablyListener);



//     // Cleanup function to unsubscribe from the channel and close the Ably connection
//     return async () => {
//       ablyChannel.unsubscribe(ablyListener);
//       try {
//         // Closing the Ably connection
//         // await ably.close();
//         // console.log("Ably connection closed successfully.");
//       } catch (error) {
//         console.error("Error closing Ably connection:", error);
//       }
//     };
//   }, [tasks]);
  

//   // Distribute all data by 
//   const distributingData = {
//     allWorkspaces,
//     activeWorkspace,
//     allWorkspaceMembers,
//     allWorkspaceTasks,
//     tasks
//   }

//   // Providing the tasks data to its children through the context
//   return (
//     <ablyContext.Provider value={distributingData}>{children}</ablyContext.Provider>
//   );
// };

// // Exporting the AblyProvider component as the default export
// export default AblyProvider;