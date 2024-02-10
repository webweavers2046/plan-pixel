"use client";

import { AuthContext } from "@/Providers/AuthProviders";
import useAxios from "@/hooks/useAxios";
import useSingleTask from "@/hooks/useSingleTask";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateTask = ({updateId ,openUpdateModal,setOpenUpdateModal}) => {
  const xios = useAxios();
  const task = useSingleTask(updateId);
  console.log('update task', task);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useContext(AuthContext);
  // console.log('user', user)
    // console.log("updated task", task);
    // const { title, priority, description, dates,_id } = task;

  const onSubmit = async (data) => {
    const updateTask = {
      title: data?.title,
      description: data?.description,
      dates: {
        startDate: data?.startDate,
        dueDate: data?.dueDate,
      },
      priority: data?.priority,

      userEmail: user?.email,
    };
    // console.log("updated task", updateTask);

    await xios.put(`/updateTask/${_id}`, updateTask).then((res) => {
      // console.log(res.data);
      if (res?.data?.modifiedCount > 0) {
        reset();
        setOpenUpdateModal(false)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully updated task",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (

    <div
      className={`${openUpdateModal ? "block" : "hidden"}
    bg-[#02001A33] backdrop-blur-[9px] text-black w-screen h-screen top-0 left-0 z-30 fixed lg:px-40 px-24 lg:py-24 py-16`}
    >
      <div className=" bg-[#FFFFFF] w-full h-full rounded-2xl overflow-auto p-6">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold ">Update The Task</p>
          <button onClick={() => setOpenUpdateModal(false)}>
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
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-8 px-4">
          {/* form info */}
          <div className=" grid grid-cols-2 gap-5">
            {/* task name */}
            <div className="">
              <h4 className="text-lg font-semibold">Title</h4>
              <input
                type="text"
                defaultValue={task?.title}
                placeholder="Title"
                {...register("title", { required: true })}
                name="title"
                className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                id=""
              />
              {errors.title && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Priority */}
            <div className="">
              <h4 className="text-lg font-semibold">Priority</h4>
              <select
                placeholder="Select"
                defaultValue={task?.priority}
                name="priority"
                className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                {...register("priority", { required: true })}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {errors.priority && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Starting Date */}
            <div className="">
              <h4 className="text-lg font-semibold">Start Date</h4>
              <input
                type="date"
                defaultValue={task?.dates?.startDate}
                {...register("startDate", { required: true })}
                name="startDate"
                className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                id=""
              />
              {errors.startDate && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Due Date */}
            <div className="">
              <h4 className="text-lg font-semibold">Due Date</h4>
              <input
                type="date"
                defaultValue={task?.dates?.dueDate}
                {...register("dueDate", { required: true })}
                name="dueDate"
                className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                id=""
              />
              {errors.dueDate && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Description */}
            <div className="">
              <h4 className="text-lg font-semibold">Description</h4>
              <textarea
                type="text"
                defaultValue={task?.description}
                {...register("description", { required: true })}
                name="description"
                placeholder="Description"
                className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                id=""
              />
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
          {/* submit button */}
          <div className="flex justify-end items-end ">
            <button className="bg-[#50B577] p-4 text-white rounded-lg">
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;

// <div
//   className={`${openUpdateModal ? "block" : "hidden"}
//     bg-[#02001A33] backdrop-blur-[9px] text-black w-screen h-screen top-0 left-0 z-30 fixed lg:px-40 px-24 lg:py-24 py-16`}
// >
//   <div className=" bg-[#FFFFFF] w-full h-full rounded-2xl overflow-auto p-6">
//     <div className="flex justify-between items-center">
//       <p className="text-xl font-bold ">Update The Task</p>
//       <button onClick={() => setOpenUpdateModal(false)}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="34"
//           height="34"
//           viewBox="0 0 34 34"
//           fill="none"
//         >
//           <path
//             d="M10.5578 10.7232L10.6354 10.636C10.998 10.2734 11.5699 10.2475 11.9625 10.5583L12.0497 10.636L16.9994 15.5858L21.9492 10.636C22.3118 10.2734 22.8836 10.2475 23.2762 10.5583L23.3634 10.636C23.726 10.9986 23.7519 11.5705 23.4411 11.9631L23.3634 12.0503L18.4136 17L23.3634 21.9497C23.726 22.3124 23.7519 22.8842 23.4411 23.2768L23.3634 23.364C23.0008 23.7266 22.4289 23.7525 22.0363 23.4417L21.9492 23.364L16.9994 18.4142L12.0497 23.364C11.687 23.7266 11.1152 23.7525 10.7227 23.4417L10.6354 23.364C10.2728 23.0014 10.2469 22.4295 10.5577 22.0369L10.6354 21.9497L15.5852 17L10.6354 12.0503C10.2728 11.6876 10.2469 11.1158 10.5578 10.7232Z"
//             fill="#212121"
//           />
//         </svg>
//       </button>
//     </div>
//     {/* update form */}
//     <form onSubmit={handleSubmit(onSubmit)} className=" mt-8 px-4">
//       {/* form info */}
//       <div className=" grid grid-cols-2 gap-5">
//         {/* task name */}
//         <div className="">
//           <h4 className="text-lg font-semibold">Title</h4>
//           <input
//             type="text"
//             // defaultValue={title}
//             placeholder="Title"
//             {...register("title", { required: true })}
//             name="title"
//             className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
//             id=""
//           />
//           {errors.title && (
//             <span className="text-red-500">This field is required</span>
//           )}
//         </div>
//         {/* Priority */}
//         <div className="">
//           <h4 className="text-lg font-semibold">Priority</h4>
//           <select
//             placeholder="Select"
//             // defaultValue={priority}
//             name="priority"
//             className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
//             {...register("priority", { required: true })}
//           >
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//           </select>
//           {errors.priority && (
//             <span className="text-red-500">This field is required</span>
//           )}
//         </div>
//         {/* Starting Date */}
//         <div className="">
//           <h4 className="text-lg font-semibold">Start Date</h4>
//           <input
//             type="date"
//             // defaultValue={dates.startDate}
//             {...register("startDate", { required: true })}
//             name="startDate"
//             className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
//             id=""
//           />
//           {errors.startDate && (
//             <span className="text-red-500">This field is required</span>
//           )}
//         </div>
//         {/* Due Date */}
//         <div className="">
//           <h4 className="text-lg font-semibold">Due Date</h4>
//           <input
//             type="date"
//             // defaultValue={dates.dueDate}
//             {...register("dueDate", { required: true })}
//             name="dueDate"
//             className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
//             id=""
//           />
//           {errors.dueDate && (
//             <span className="text-red-500">This field is required</span>
//           )}
//         </div>
//         {/* Description */}
//         <div className="">
//           <h4 className="text-lg font-semibold">Description</h4>
//           <textarea
//             type="text"
//             // defaultValue={description}
//             {...register("description", { required: true })}
//             name="description"
//             placeholder="Description"
//             className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
//             id=""
//           />
//           {errors.description && (
//             <span className="text-red-500">This field is required</span>
//           )}
//         </div>
//       </div>
//       {/* submit button */}
//       <div className="flex justify-end items-end ">
//         <button className="bg-[#50B577] p-4 text-white rounded-lg">
//           Update Task
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
