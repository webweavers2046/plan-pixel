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

// Component for providing Ably functionality to its children
const AblyProvider = ({ children }) => {
  // State for managing the tasks received from Ably
  const [tasks, setTasks] = useState([]);

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
      // Sorting tasks by position and updatedAt for consistent display
      const sortedTasks = message.data?.sort((a, b) => {
        if (a.position !== b.position) {
          return a.position - b.position;
        }
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });

      // Updating state with the sorted tasks
      setTasks(message.data);
    };

    // Subscribing to the Ably channel with the ablyListener
    ablyChannel.subscribe(ablyListener);

    // Cleanup function to unsubscribe from the channel and close the Ably connection
    return async () => {
      ablyChannel.unsubscribe(ablyListener);
      try {
        // Closing the Ably connection
        // await ably.close();
        console.log("Ably connection closed successfully.");
      } catch (error) {
        console.error("Error closing Ably connection:", error);
      }
    };
  }, [tasks]);

  // Providing the tasks data to its children through the context
  return (
    <ablyContext.Provider value={{ tasks }}>{children}</ablyContext.Provider>
  );
};

// Exporting the AblyProvider component as the default export
export default AblyProvider;