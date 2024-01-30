
"use client"
import { LuListTodo } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi";

import Task from "./Task";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import TaskModal from "../Components/TaskModal";
import useFilterTasks from "@/hooks/useFilterTasks";
import { useGlobalTaskData } from "@/hooks/useGlobalTaskData";
// React DND


const Tasks = () => {

  // manage all your state here..
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { dropOn, draggingOver, dragOverElementName,isDragging } = useGlobalTaskData()

  useEffect(() => {
    // fetch('https://task-management-server-topaz.vercel.app/tasks')
    fetch("http://localhost:5000/tasks", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) =>
        console.error("Error fetching tasks:", error)
      );
  }, []);

  // Tasks in different status
  const toDoTasks = useFilterTasks(tasks, "to-do")
  const upcomingTasks = useFilterTasks(tasks, "upcoming")
  const doingTasks = useFilterTasks(tasks, "doing")
  const doneTasks = useFilterTasks(tasks, "done")



  return (
    <>
      {typeof window !== "undefined" && (
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
              <button
                onClick={() => setOpenModal(!openModal)}
                className="bg-white text-black text-sm px-5 py-3 rounded-md font-bold"
              >
                <FiPlusSquare className="inline mb-1 me-2 text-xl" /> Add Task
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-4 lg:gap-6 gap-2  mt-6">
            {/* upcoming task */}
            <div
              droppable
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="upcoming"
              className={`${isDragging?"z-20 relative":""} px-2 rounded-lg transition-all duration-500 ${dragOverElementName === "upcoming"?"bg-[green]":""}`}>
              <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
                <LuListTodo className="text-2xl" /> <h2 className="font-bold">Upcoming</h2>
              </div>

              {upcomingTasks.map(
                (task, idx) =>
                  <Task idx={idx} key={task._id} task={task} />
              )}

            </div>
            {/* to do task */}
            <div
              droppable
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="to-do"
              className={`px-2 ${dragOverElementName && "realative z-50"} rounded-lg transition-all duration-500 ${dragOverElementName === "to-do"?"bg-[blue]":""}`}
            >
              <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
                <LuListTodo className="text-2xl" /> <h2 className="">To-do</h2>
              </div>

              {toDoTasks.map(
                (task, idx) =>
                  <Task idx={idx} key={task._id} task={task} />
              )}
            </div>
            {/* ongoing/doing tasks */}
            <div 
                 droppable
                 onDragOver={(e) => draggingOver(e)}
                 onDrop={(e) => dropOn(e)}
                 id="doing"
                 className={`px-2 rounded-lg transition-all duration-500 ${dragOverElementName === "doing"?"bg-[black]":""}`}
            >
              <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
                <LuListTodo className="text-2xl" /> <h2 className="">Doing</h2>
              </div>

              {doingTasks.map(
                (task, idx) =>
                  <Task idx={idx} key={task._id} task={task} />
              )}
            </div>
            {/* done/completed tasks */}
            <div
                 droppable
                 onDragOver={(e) => draggingOver(e)}
                 onDrop={(e) => dropOn(e)}
                 id="done"
                 className={`px-2 rounded-lg transition-all duration-500 ${dragOverElementName === "done"?"bg-[crimson]":""}`}
            >
              <div className="bg-gray-300/20 text-black px-6 py-4 flex items-center gap-4 rounded-md">
                <LuListTodo className="text-2xl" /> <h2 className="">Done</h2>
              </div>

              {doneTasks.map(
                (task, idx) =>
                  <Task idx={idx} key={task._id} task={task} />
              )}
            </div>
          </div>
          <TaskModal openModal={openModal} setOpenModal={setOpenModal}></TaskModal>
        </section>
      )}
    </>
  );
};

export default Tasks;

