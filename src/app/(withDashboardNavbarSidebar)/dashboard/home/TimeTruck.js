import threeDotIcon from "@/assets/dashboard/threeDot.svg";
import timeIcon from "@/assets/dashboard/time.svg";
import Image from "next/image";
import StoptWatch from "./StoptWatch";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "@/Providers/globalContext";
const TimeTruck = () => {
  const [tasks, setTask] = useState([]);
  const { activeWorkspaceTasks } = useContext(globalContext);
  // const { activeWorkspace } = useContext(globalContext);
  // const timestamp1 = "2024-02-08T14:22:55.000Z";

  useEffect(() => {
    // Filter tasks with "doing" status
    if (activeWorkspaceTasks) {
      const doingTasks = activeWorkspaceTasks.filter(
        (task) => task.status === "doing"
      );
      setTask([...doingTasks]);
    }
  }, [activeWorkspaceTasks]);

  return (
    <div className="shadow-md rounded-xl p-6 overflow-auto bg-[#FBBC05]/20">
      <h1 className=" text-2xl font-bold p-4">Time Track</h1>
      {tasks?.map((task) => (
        <Task
          key={task?._id}
          updatedAt={task?.updatedAt}
          title={task.title}
          time={task.time}
        />
      ))}
    </div>
  );
};
export default TimeTruck;

function Task({ title, updatedAt }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-[#FBBC05] mb-3">
      <div className="flex items-center gap-6">
        <Image src={timeIcon} alt="timeIcon" />

        <p className="text-sm">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <StoptWatch updatedAt={updatedAt} />
        <Image src={threeDotIcon} alt="option" />
      </div>
    </div>
  );
}
