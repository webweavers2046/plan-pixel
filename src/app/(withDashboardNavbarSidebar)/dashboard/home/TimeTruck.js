"use client";
import threeDotIcon from "@/assets/dashboard/threeDot.svg";
import timeIcon from "@/assets/dashboard/time.svg";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { globalContext } from "@/Providers/globalContext";
import { BsThreeDotsVertical } from "react-icons/bs";
const TimeTruck = () => {
    const [tasks, setTask] = useState([]);
    const { activeWorkspaceTasks } = useContext(globalContext);

    useEffect(() => {
        // Filter tasks with "doing" status
        if (activeWorkspaceTasks) {
            const doingTasks = activeWorkspaceTasks.filter(
                (task) => task.status === "doing"
            );
            setTask([...doingTasks]);
        }
    }, [activeWorkspaceTasks]);

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        console.log("Updated tasks:", updatedTasks);
    };
    const handleDoneTask = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task._id === taskId ? { ...task, done: !task.done } : task
        );
        console.log("Updated tasks:", updatedTasks);
    };

    return (
        <div className="shadow-md rounded-xl p-6 min-h-80 border-2 border-tertiary bg-tertiary/5 ">
            <h1 className=" text-2xl font-bold p-4">Time Track</h1>
            {
                tasks?.length > 0
                    ?
                    <>
                        {tasks?.map((task) => (
                            <Task
                                key={task?._id}
                                title={task.title}
                                done={task.done}
                                onDone={() => handleDoneTask(task._id)}
                                onDelete={() => handleDeleteTask(task._id)}
                            />
                        ))}
                    </>
                    :
                    <p className=" p-4 font-semibold text-gray-600">There is no ongoing task right now</p>
            }

        </div>
    );
};
export default TimeTruck;

function Task({ title, onDelete, done, onDone }) {
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const intervalRef = useRef(null); // Using useRef to hold the reference to the interval

    const runTimer = () => {
        // renamed startTimer to runTimer
        setIsTimerRunning(true); // Start the timer
        intervalRef.current = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000); // Increment elapsed time every second
        }, 1000);
    };

    const stopTimer = () => {
        setIsTimerRunning(false); // Stop the timer
        clearInterval(intervalRef.current); // Clear the interval
    };

    const resetTime = () => {
        setElapsedTime(0); // Reset elapsed time to zero
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleButtonClick = () => {
        if (isTimerRunning) {
            stopTimer();
        } else {
            runTimer(); // Start the timer
        }
    };

    return (
        <div className="flex items-center justify-between p-4 border-b border-[#FBBC05] mb-3">
            <div className="flex items-center gap-6">
                <Image src={timeIcon} alt="timeIcon" />
                <p className="text-sm">{title}</p>
            </div>
            <div className="flex items-center gap-4">
                <span>{formatTime(elapsedTime)}</span>
                <button onClick={handleButtonClick}>
                    {isTimerRunning ? "Stop" : "Start"}
                </button>
                <div className="relative">
                    <BsThreeDotsVertical
                        className="cursor-pointer"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="absolute top-0 right-0 mt-6">
                            <div className="bg-white shadow-lg rounded-lg p-2 w-40 border z-20">
                                <ul>
                                    <li
                                        className="px-4 py-2 text-sm w-full hover:bg-gray-200 rounded-md"
                                        onClick={resetTime}
                                    >
                                        <button className="w-full text-start">
                                            Reset Time
                                        </button>
                                    </li>
                                    {/* <li
                                        className="px-4 py-2 text-sm w-full hover:bg-gray-200 rounded-md"
                                        onClick={onDone}
                                    >
                                        <button className="w-full text-start">
                                            Done
                                        </button>
                                    </li>
                                    <li
                                        className="px-4 py-2 text-sm w-full hover:bg-gray-200 rounded-md"
                                        onClick={onDelete}
                                    >
                                        <button className="w-full text-start">
                                            Delete
                                        </button>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
function formatTime(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes
        }:${seconds < 10 ? "0" + seconds : seconds}`;
}
