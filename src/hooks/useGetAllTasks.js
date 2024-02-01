
import { socket } from "@/components/sockets/Sockets";
import { useState } from "react";

const useGetSocketData = () => {
 const [alltasks,setAllTasks] = useState([])
 
  socket.on("tasks", (tasks)=> {
    console.log("from the task file", tasks)
    setAllTasks(tasks)
  });

  return {alltasks}

};

export default useGetSocketData;
