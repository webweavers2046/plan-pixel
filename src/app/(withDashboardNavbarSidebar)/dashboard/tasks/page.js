"use client";

import { LuListTodo } from "react-icons/lu";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";

import Task from "./Task";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://task-management-server-topaz.vercel.app/tasks')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        setTasks(data)
    })
    
    // const fetchTasks = async () => {
    //   try {
    //     const response = await fetch("/public/task.json");

    //     if (!response.ok) {
    //       throw new Error("Failed to fetch tasks");
    //     }

    //     const data = await response.json();
    //     setTasks(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error fetching tasks:", error);
    //   }
    // };

    // fetchTasks();

  }, []);

//   console.log(tasks);

  return (
    <section className="text-white p-6 w-full">
      {/* header section  */}
      <div className="md:flex justify-between items-end border-b pb-6 border-white/50">
        <div className="">
          <h6 className="font-medium">TaskTo tasks board</h6>
          <p className="opacity-70 font-light text-sm">
            Create and complete and manage your tasks using TaskTo task board.
          </p>
        </div>
        <div className="">
          <button className="bg-white text-black text-sm px-5 py-3 rounded-md font-bold">
            <FiPlusSquare className="inline mb-1 me-2 text-xl" /> Add Task
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-4 lg:gap-6 gap-2  mt-6">
        <div>
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
            <LuListTodo className="text-2xl" /> <h2 className="">To Do</h2>
          </div>
          <div className="mt-8">
            {tasks.map((task, idx) =>
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
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
            <LuListTodo className="text-2xl" /> <h2 className="">Ongoing</h2>
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
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
            <MdOutlineCallMissedOutgoing className="text-2xl" />{" "}
            <h2 className="">Completed</h2>
          </div>
          <div className="mt-8">
            {tasks.map(
              (task, idx) =>
                task.status === "completed" && (
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

        {/* <div>
          <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
            <MdOutlineFileDownloadDone className="text-2xl" />{" "}
            <h2 className="">Complete</h2>
          </div>
          <div className="mt-8">
            {tasks.map(
              (task, idx) =>
                task.status === "Complete" && (
                  <Task
                    key={task._id}
                    refetch={refetch}
                    idx={idx}
                    task={task}
                  />
                )
            )}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Tasks;
