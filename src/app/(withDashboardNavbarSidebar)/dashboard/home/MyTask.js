import threeDotIcon from "@/assets/dashboard/threeDot.svg";
import timeIcon from "@/assets/dashboard/time.svg";
import Image from "next/image";
import style from "./Scrollbar.module.css";

const MyTask = () => {
    return (
        <div
            className={`shadow-md rounded-xl p-6 max-h-dvh overflow-auto ${style.scrollbarCustom} border`}
        >
            <h1 className=" text-2xl font-bold p-4">My Task</h1>
            {tasks.map((task, index) => (
                <Task
                    key={task.id}
                    index={index}
                    name={task.name}
                    completed={task.completed}
                />
            ))}
        </div>
    );
};
export default MyTask;

function Task({ name, completed, index }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9F9F9] mb-3">
            <h3 className="text-sm font-semibold">
                <span className="me-2">{index + 1}.</span>
                {name}
            </h3>
            <div className="inline-flex items-center">
                <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlfor="amber"
                >
                    <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity bg-gray-300 checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                        id="amber"
                    />
                    <span className="absolute text-white transition-opacity opacity-50 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth={1}
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </label>
            </div>
        </div>
    );
}

const tasks = [
    {
        id: 1,
        name: "Create wireframe",
        completed: true,
    },
    {
        id: 2,
        name: "Slack Logo Design and apply on site",
        completed: true,
    },
    {
        id: 3,
        name: "Dashboard Design for developers",
        completed: false,
    },
    {
        id: 4,
        name: "Attend Daily scam on time",
        completed: false,
    },
    {
        id: 5,
        name: "Manage projects",
        completed: true,
    },
    {
        id: 6,
        name: "Fix company's website",
        completed: false,
    },
    {
        id: 7,
        name: "East and west we are best",
        completed: false,
    },
    {
        id: 8,
        name: "No task in my matha",
        completed: false,
    },
    {
        id: 9,
        name: "Task Task Plan Pixel Task",
        completed: false,
    },
];
