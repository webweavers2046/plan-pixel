"use client";

import { BsStopwatchFill, BsThreeDotsVertical } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
import { BiSolidMessageSquare } from "react-icons/bi";
import { useRef, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useForm } from "react-hook-form";

const Task = ({ task, refetch }) => {
    const [requiredError, setRequiredError] = useState("");
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const descriptionRef = useRef();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [dateErrorMessage, setDateErrorMessage] = useState("");
    // get today date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = String(today.getFullYear());
    today = `${yyyy}-${mm}-${dd}`;
    let speed = idx * 0.3;

    // const handleDeleteTask = () => {
    //     setOpenDeleteModal(true);
    // };
    // const onSubmit = (data) => {
    //     setButtonLoading(true);
    //     if (new Date(data.deadline) > new Date(today)) {
    //         const description = descriptionRef.current.value;
    //         if (!description) {
    //             return setRequiredError("Required *");
    //         }
    //         setRequiredError("");
    //         const taskData = {
    //             title: data.title,
    //             priority: data.priority,
    //             status: data.status,
    //             deadline: data.deadline,
    //             description: description,
    //         };
    //         fetch(
    //             `https://task-management-server-cyan-omega.vercel.app/tasks/${task._id}`,
    //             {
    //                 method: "PUT",
    //                 headers: {
    //                     "content-type": "application/json",
    //                 },
    //                 body: JSON.stringify(taskData),
    //             }
    //         )
    //             .then((res) => res.json())
    //             .then((result) => {
    //                 console.log(result);
    //                 setButtonLoading(false);
    //                 reset();
    //                 refetch();

    //                 toast.success("New Task Added");
    //             });
    //     } else {
    //         setButtonLoading(false);
    //         return setDateErrorMessage("Please provide a valid Date");
    //     }
    // };
    return (
        <div className="mt-3 bg-[#1E2530] rounded-md p-6">
            <div className=" flex items-center gap-2 justify-between">
                <h2 className="font-semibold text-lg">{task.title}</h2>
            </div>
            <p className="text-xs opacity-65 pt-4">{task.description}</p>
            <div className="flex justify-between items-center">
                <p className="pt-3 flex items-center gap-2">
                    <BsStopwatchFill className="text-green-500" />{" "}
                    <span className="text-xs pt-0.5">
                        {task.deadline.split("T")[0]}
                    </span>
                </p>
                <p className="pt-3 flex items-center gap-2">
                    <span className="text-sm pt-0.5">{task.priority}</span>
                    <MdDoubleArrow className="-rotate-90 text-red-500" />{" "}
                </p>
            </div>
            <hr className="mt-5 opacity-15" />
        </div>
    );
};

export default Task;
