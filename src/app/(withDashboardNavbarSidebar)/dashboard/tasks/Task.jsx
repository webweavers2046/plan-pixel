"use client";
import { useTaskGlobalData } from "@/Providers/TaskDndProvider";
import { useGlobalTaskData } from "@/hooks/useGlobalTaskData";
import { BsStopwatchFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { MdDoubleArrow } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Task = ({ task, tasks, setTasks, refetch }) => {

    // manage all you state here 
    const {draggingStarted,isDragging,isDropped,draggingTaskId} = useGlobalTaskData()


    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // axios.delete(`https://task-management-server-topaz.vercel.app//deleteTask/${id}`)
                fetch(`https://task-management-server-topaz.vercel.app/deleteTask/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                            // eslint-disable-next-line react/prop-types
                            const remaining = tasks.filter(task => task._id !== id);
                            console.log(remaining);
                            setTasks(remaining);
                        }
                    })
            }
        });

    };

    return (
        <div
            draggable
            onDragStart={(e) => draggingStarted(e, task?._id,task?.status)}
            className={` cursor-grabbing transform transition-all 0.5s ease-in-out mt-4 bg-[#F9F9F9] rounded-md p-6 text-black ${isDropped?"transition-all linear 1s":""}`}
>            <div className=" flex items-center gap-2 justify-between">
                <h2 className="font-semibold text-lg">{task.title}</h2>
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
