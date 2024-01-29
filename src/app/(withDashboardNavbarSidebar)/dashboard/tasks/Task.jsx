"use client";
import { BsStopwatchFill } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import Dropdown from "./Dropdown";
import { useState } from "react";


const Task = ({ task, tasks, setTasks }) => {
    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <div className="mt-3 bg-[#F9F9F9] rounded-md p-6 text-black">
            <div className=" flex items-center gap-2 ">
                <h2 className="font-semibold text-lg pr-[10px]">{task.title}</h2>
                <BsThreeDotsVertical onClick={() => setIsOpen(!isOpen)} className="text-xl absolute ml-[230px] -mt-5 cursor-pointer" />
                {
                    isOpen && <Dropdown id={task?._id} task={task} tasks={tasks} setTasks={setTasks}></Dropdown>
                }
                
            </div>
            <p className="text-xs opacity-65 pt-4">{task.description}</p>
            <div className="flex justify-between items-center">
                <p className="pt-3 flex items-center gap-2">
                    <BsStopwatchFill className="text-green-500" />{" "}
                    <span className="text-xs pt-0.5 ">
                        {task.dates?.dueDate}
                    </span>
                </p>
                <p className="pt-3 flex items-center gap-2">
                    <span className="text-sm pt-0.5">{task.priority}</span>
                    {
                        task?.priority == "High" ? <MdDoubleArrow className="-rotate-90 text-red-500" /> : task?.priority == "Low" ? <MdDoubleArrow className="rotate-90 text-[#93C648]" /> : <IoIosArrowUp className="text-red-500" />
                    }

                </p>
            </div>
            <hr className="mt-5 bg-black h-[2px]" />
            


        </div>
    );
};

export default Task;
