"use client";

import { LuListTodo } from "react-icons/lu";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import Task from "./Task";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import TaskModal from "../Components/TaskModal";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://task-management-server-topaz.vercel.app/tasks"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        setTasks(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  console.log(tasks);

  return (
    <section className="text-white px-6 pb-6 w-full">
      {/* header section  */}
      <div className="md:flex justify-between items-end pb-6 text-black ">
        <div className="">
          <h6 className="font-medium">TaskTo tasks board</h6>
          <p className="opacity-70 font-light text-sm">
            Create and complete and manage your tasks using TaskTo task board.
          </p>
        </div>
        <div className="">
          <button
            onClick={() => setOpenModal(!openModal)}
            className="flex items-center bg-[#50B577] text-white text-sm px-5 py-3 rounded-md font-bold gap-x-2"
          >
            Add New Task
            <FiPlusSquare className="text-xl" />
          </button>
        </div>
      </div>
      <hr />
      <div className="grid md:grid-cols-4 lg:gap-6 gap-2  mt-6">
        <div>
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center justify-between gap-4 rounded-md f">
            <div className="flex items-center gap-x-3">
              <LuListTodo className="text-2xl" />
              <h2 className="font-semibold">Upcoming</h2>
            </div>
            <div className="flex items-center gap-x-2">
              <FaPlus className="text-xl cursor-pointer" />
            </div>
          </div>
          <div className="mt-8">
            {tasks.map(
              (task, idx) =>
                task.status === "upcoming" && (
                  <Task
                    idx={idx}
                    key={task._id}
                    // refetch={refetch}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                )
            )}
          </div>
        </div>
        <div>
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center justify-between gap-4 rounded-md f">
            <div className="flex items-center gap-x-3">
              <LuListTodo className="text-2xl" />
              <h2 className="font-semibold">To Do</h2>
            </div>
            <div className="flex items-center gap-x-2">
              <FaPlus className="text-xl cursor-pointer" onClick={() => setOpenModal(!openModal)}/>
            </div>
          </div>
          <div className="mt-8">
            {tasks.map(
              (task, idx) =>
                task.status === "to-do" && (
                  <Task
                    idx={idx}
                    key={task._id}
                    // refetch={refetch}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center justify-between gap-4 rounded-md f">
            <div className="flex items-center gap-x-3">
              <MdOutlineCallMissedOutgoing className="text-2xl" />
              <h2 className="font-semibold">Working On</h2>
            </div>
            <div className="flex items-center gap-x-2">
              <FaPlus className="text-xl cursor-pointer" />
            </div>
          </div>

          <div className="mt-8">
            {tasks.map(
              (task, idx) =>
                task.status === "ongoing" && (
                  <Task
                    idx={idx}
                    key={task._id}
                    // refetch={refetch}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                )
            )}
          </div>
        </div>

        <div>
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center justify-between gap-4 rounded-md f">
            <div className="flex items-center gap-x-3">
              <MdOutlineFileDownloadDone className="text-2xl" />
              <h2 className="font-semibold">Completed</h2>
            </div>
            <div className="flex items-center gap-x-2">
              <FaPlus className="text-xl cursor-pointer" />
            </div>
          </div>

          <div className="mt-8">
            {tasks.map(
              (task, idx) =>
                task.status === "completed" && (
                  <Task
                    key={task._id}
                    // refetch={refetch}
                    idx={idx}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                  />
                )
            )}
          </div>
        </div>
      </div>
      <TaskModal openModal={openModal} setOpenModal={setOpenModal}></TaskModal>
      {/* <TodoTaskModal openModal={openModal} setOpenModal={setOpenModal}/> */}
    </section>
  );
};

export default Tasks;
