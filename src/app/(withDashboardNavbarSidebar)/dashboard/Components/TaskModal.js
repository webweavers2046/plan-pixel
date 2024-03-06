"use client";

import { AuthContext } from "@/Providers/AuthProviders";
import { ablyContext } from "@/components/ably/AblyProvider";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const TaskModal = ({ openModal, setOpenModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { user } = useContext(AuthContext);

    // Get active wokspace when live change or the default one
    const { handleCreateTask, activeWorkspace } = useGlobalContext();
    
    const id = activeWorkspace?._id

    const onSubmit = async (data) => {
        const newTask = {
            title: data?.title ? data?.title : "New Task",
            description: data?.description
                ? data?.description
                : "Thanks for creating new task. We are happy that you are enjoying our features . ",
            dates: {
                startDate: data?.startDate,
                dueDate: data?.dueDate,
            },
            priority: data?.priority,
            status: "upcoming",
            creator: user?.email,
            members: [],
            comments: [],
            workspace: id,
            position: 0,
            doingTimeStamp: "",
            updatedAt: "",
            lastModifiedBy: "",
            tags:[],
            archived:false
        };

        handleCreateTask(newTask, setOpenModal, id);
        reset();
    };

    return (
        <div
            className={`${openModal ? "block" : "hidden"} 
        bg-[#02001A33] backdrop-blur-[9px] text-black w-screen h-screen top-0 left-0 z-50 fixed xl:px-40 xl:py-24 lg:py-16 md:px-10 md:py-10 p-6`}
        >
            <div className=" bg-[#FFFFFF] md:w-8/12 mx-auto h-full rounded-2xl overflow-auto p-6">
                <div className="flex justify-between items-center border-b pb-4">
                    <p className="text-xl font-bold ">Add New Task</p>
                    <button onClick={() => setOpenModal(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                        >
                            <path
                                d="M10.5578 10.7232L10.6354 10.636C10.998 10.2734 11.5699 10.2475 11.9625 10.5583L12.0497 10.636L16.9994 15.5858L21.9492 10.636C22.3118 10.2734 22.8836 10.2475 23.2762 10.5583L23.3634 10.636C23.726 10.9986 23.7519 11.5705 23.4411 11.9631L23.3634 12.0503L18.4136 17L23.3634 21.9497C23.726 22.3124 23.7519 22.8842 23.4411 23.2768L23.3634 23.364C23.0008 23.7266 22.4289 23.7525 22.0363 23.4417L21.9492 23.364L16.9994 18.4142L12.0497 23.364C11.687 23.7266 11.1152 23.7525 10.7227 23.4417L10.6354 23.364C10.2728 23.0014 10.2469 22.4295 10.5577 22.0369L10.6354 21.9497L15.5852 17L10.6354 12.0503C10.2728 11.6876 10.2469 11.1158 10.5578 10.7232Z"
                                fill="#212121"
                            />
                        </svg>
                    </button>
                </div>
                {/* update form */}
                <form onSubmit={handleSubmit(onSubmit)} className=" mt-8 md:px-4">
                    {/* form info */}
                    <div className=" grid grid-cols-1 gap-5">
                        {/* task name */}
                        <div className="">
                            <h4 className="text-sm font-semibold">
                                Task title{" "}
                                {errors.title && (
                                    <span className="text-red-500 text-xs ms-2">
                                        (Task title is required)
                                    </span>
                                )}
                            </h4>
                            <input
                                type="text"
                                placeholder="Please type your task title here..."
                                {...register("title", { required: true })}
                                name="title"
                                className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                                id=""
                            />
                        </div>
                        {/* Priority */}
                        <div className="">
                            <h4 className="text-sm font-semibold">
                                Priority{" "}
                                {errors.priority && (
                                    <span className="text-red-500">
                                        Priority is required
                                    </span>
                                )}
                            </h4>
                            <select
                                placeholder="Select"
                                name="priority"
                                defaultValue={"high"}
                                className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                                {...register("priority", { required: true })}
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        {/* Starting Date */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="grow">
                                <h4 className="text-sm font-semibold">
                                    Start Date{" "}
                                    {errors.startDate && (
                                        <span className="text-red-500 text-xs ms-2">
                                            Start Date is required
                                        </span>
                                    )}
                                </h4>
                                <input
                                    defaultValue={"01/32/2023"}
                                    type="date"
                                    {...register("startDate", {
                                        required: true,
                                    })}
                                    name="startDate"
                                    className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                                    id=""
                                />
                            </div>
                            {/* Due Date */}
                            <div className="grow">
                                <h4 className="text-sm font-semibold">
                                    Due Date{" "}
                                    {errors.dueDate && (
                                        <span className="text-red-500 text-xs ms-2">
                                            Due Date is required
                                        </span>
                                    )}
                                </h4>
                                <input
                                    defaultValue={"01/32/2025"}
                                    type="date"
                                    {...register("dueDate", { required: true })}
                                    name="dueDate"
                                    className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                                    id=""
                                />
                            </div>
                        </div>
                        {/* Description */}
                        <div className="">
                            <h4 className="text-sm font-semibold">
                                Description{" "}
                                {errors.description && (
                                    <span className="text-red-500 text-xs ms-2">
                                        This field is required
                                    </span>
                                )}
                            </h4>

                            <textarea
                                type="text"
                                {...register("description", { required: true })}
                                cols="30"
                                rows="7"
                                name="description"
                                placeholder="Please write task description here..."
                                className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                                id=""
                            />
                        </div>
                    </div>
                    {/* submit button */}
                    <div className="flex justify-end items-end mt-4">
                        <button className="bg-[#50B577] py-4 px-8 text-white rounded-lg">
                            Add New Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
