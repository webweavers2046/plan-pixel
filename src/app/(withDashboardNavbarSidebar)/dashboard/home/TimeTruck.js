import threeDotIcon from "@/assets/dashboard/threeDot.svg";
import timeIcon from "@/assets/dashboard/time.svg";
import useTranstackData from "@/hooks/useTanstack/useTranstackData";
import Image from "next/image";
import StoptWatch from "./StoptWatch";
import { useRef, useState } from "react";
const TimeTruck = () => {
    // const apiEndpoint = "/tasks/doing";
    // const { data } = useTranstackData(apiEndpoint, "tasksdoing");
    const exampleData = [
        {
            _id: "1",
            title: "Design Landing Page",
            time: 120, // Assuming time is in minutes
        },
        {
            _id: "2",
            title: "Develop User Authentication",
            time: 90, // Assuming time is in minutes
        },
        {
            _id: "3",
            title: "Write API Documentation",
            time: 60, // Assuming time is in minutes
        },
    ];

    const timestamp1 = "2024-02-08T14:22:55.000Z";
    return (
        <div className="shadow-md rounded-xl p-6 overflow-auto border-2 border-tertiary bg-tertiary/5 ">
            <h1 className=" text-2xl font-bold p-4">Time Truck</h1>
            {exampleData?.map((task) => (
                <Task key={task?._id} title={task.title} />
            ))}
        </div>
    );
};
export default TimeTruck;

function Task({ title }) {
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null); // Using useRef to hold the reference to the interval

    const startTimer = () => {
        setIsTimerRunning(true);
        const startTime = Date.now() - elapsedTime;
        intervalRef.current = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            setElapsedTime(elapsedTime);
        }, 1000);
    };

    const stopTimer = () => {
        setIsTimerRunning(false);
        clearInterval(intervalRef.current); // Clearing the interval
    };

    const handleButtonClick = () => {
        if (isTimerRunning) {
            stopTimer();
        } else {
            startTimer();
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
                <Image src={threeDotIcon} alt="option" />
            </div>
        </div>
    );
}
function formatTime(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
}
