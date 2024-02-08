"use client";

import { createContext, useEffect, useState } from "react";
import Ably from "ably/promises";
const ablyKey = process.env.NEXT_PUBLIC_ABLY_KEY;


const ably = new Ably.Realtime.Promise({
  key:ablyKey
});

const ablyChannel = ably.channels.get("tasks");
export const ablyContext = createContext();

const AblyProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const connectAbly = async () => {
      try {
        await ably.connect();
        console.log("Ably connected!");
      } catch (error) {
        console.error("Error connecting to Ably:", error);
      }
    };

    connectAbly();

    const ablyListener = (message) => {
      setTasks(message.data);
    };

    ablyChannel.subscribe(ablyListener);

    return async () => {
      ablyChannel.unsubscribe(ablyListener);
      try {
        // await ably.close();
        // console.log("Ably connection closed successfully.");
      } catch (error) {
        console.error("Error closing Ably connection:", error);
      }
    };
  }, []);


  // console.log("this is from ably provider", tasks);


  return <ablyContext.Provider value={{tasks, setTasks}}>{children}</ablyContext.Provider>;
};

export default AblyProvider;
