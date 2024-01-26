import threeDotIcon from "@/assets/dashboard/threeDot.svg";
import timeIcon from "@/assets/dashboard/time.svg";
import Image from "next/image";
const TimeTruck = () => {
  return (
    <div className="shadow-md rounded-xl p-6 overflow-auto">
      <h1 className=" text-2xl font-bold p-4">Time Truck</h1>
      {tasks.map((task) => (
        <Task key={task.name} name={task.name} time={task.time} />
      ))}
    </div>
  );
};
export default TimeTruck;

function Task({ name, time }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-[#F9F9F9] mb-3">
      <div className="flex items-center gap-2">
        <Image src={timeIcon} alt="timeIcon" />

        <p className="text-sm">{name}</p>
      </div>
      <div className="flex items-center">
        <p className="text-[#93C648] font-extrabold text-sm">{time}</p>
        <Image src={threeDotIcon} alt="option" />
      </div>
    </div>
  );
}

const tasks = [
  { name: "Create wireframe", time: "1:21:00" },
  { name: "Create Slack Logo Design a...", time: "21:00" },
  { name: "No task in my matha", time: "1:01:00" },
  { name: "Manage projects", time: "2:21:00" },
  { name: "Task Task Plan Pixel Task", time: "41:00" },
];
