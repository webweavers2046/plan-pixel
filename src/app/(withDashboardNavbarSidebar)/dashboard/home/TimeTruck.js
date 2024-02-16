import threeDotIcon from "@/assets/dashboard/threeDot.svg";
import timeIcon from "@/assets/dashboard/time.svg";
import useTranstackData from "@/hooks/useTanstack/useTranstackData";
import Image from "next/image";
import StoptWatch from "./StoptWatch";
const TimeTruck = () => {

  const apiEndpoint = "/tasks/doing";
  const { data } = useTranstackData(apiEndpoint, "tasksdoing");
  const timestamp1 = "2024-02-08T14:22:55.000Z";
  return (
    <div className="shadow-md rounded-xl p-6 overflow-auto bg-[#FBBC05]/20">
      <h1 className=" text-2xl font-bold p-4">Time Truck</h1>
      {data?.map((task) => (
        <Task
          key={task?._id}
          taskTimeStamp={timestamp1}
          title={task.title}
          time={task.time}
        />
      ))}
    </div>
  );
};
export default TimeTruck;

function Task({ title, taskTimeStamp}) { 
  return (
    <div className="flex items-center justify-between p-4 border-b border-[#FBBC05] mb-3">
      <div className="flex items-center gap-6">
        <Image src={timeIcon} alt="timeIcon" />

        <p className="text-sm">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <StoptWatch taskTimeStamp={taskTimeStamp}/>
        <Image src={threeDotIcon} alt="option" />
      </div>
    </div>
  );
}

// const tasks = [
//   { name: "Create wireframe", time: "1:21:00" },
//   { name: "Create Slack Logo Design a...", time: "21:00" },
//   { name: "No task in my matha", time: "1:01:00" },
//   { name: "Manage projects", time: "2:21:00" },
//   { name: "Task Task Plan Pixel Task", time: "41:00" },
// ];
