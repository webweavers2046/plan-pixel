"use client";
import { LuListTodo } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Task from "./Task";
import "@/styles/globals.css";
import { use, useEffect, useState } from "react";
import TaskModal from "../Components/TaskModal";
import useFilterTasks from "@/hooks/useFilterTasks ";
import useGlobalTaskData from "@/hooks/useGlobalTaskData";
import { BsThreeDotsVertical } from "react-icons/bs";
import useGetSocketData from "@/hooks/useGetAllTasks";
import UpdateTask from "../Components/UpdateTask";

const Tasks = () => {
  // manage all your state here..
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  console.log('update Id', updateId);
  const {  dropOn, draggingOver, dragOverElementName, isDragging } =
    useGlobalTaskData();
    const alltasks = useGetSocketData()
    console.log(alltasks);

  // Tasks in different status
  const toDoTasks = useFilterTasks(alltasks, "to-do");
  const upcomingTasks = useFilterTasks(alltasks, "upcoming");
  const doingTasks = useFilterTasks(alltasks, "doing");
  const doneTasks = useFilterTasks(alltasks, "done");

  return (
    <>
      {typeof window !== "undefined" && (
        <section>
          {/* header section  */}
          <div className="md:flex justify-between items-end border-b pb-6 border-white/50">
            <div className="">
              <h6 className="font-medium">TaskTo tasks board</h6>
              <p className="opacity-70 font-light text-sm">
                Create and complete and manage your tasks using TaskTo task
                board.
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-2  mt-6 min-h-screen">
            {/* upcoming task */}
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="upcoming"
              className={`min-h-screen ${isDragging ? "z-20 relative" : ""
                } px-2 rounded-lg transition-all duration-1000 ${dragOverElementName === "upcoming" ? "bg-[#E3E4E6]" : ""
                }`}
            >
              <div
                className={`bg-gray-300/20 text-black px-6 py-4 flex items-center mt-2 gap-4 rounded-md ${dragOverElementName == "upcoming" ? "bg-[white]" : ""
                  }`}
              >
                <LuListTodo className="text-2xl" />{" "}
                <h2 className="">Upcoming</h2>
              </div>

              {upcomingTasks?.map((task, idx) => (
                <div>
                  <Task idx={idx} setUpdateId={setUpdateId} key={task._id} task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal} />
                  {/* <UpdateTask task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal}></UpdateTask> */}
                </div>
              ))}
            </div>
            {/* to do task */}
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="to-do"
              className={`min-h-screen px-2 ${dragOverElementName && "realative z-50"
                } rounded-lg transition-all duration-1000 ${dragOverElementName === "to-do" ? "bg-[#E3E4E6]" : ""
                }`}
            >
              <div
                className={`bg-gray-300/20 text-black px-6 mt-2 py-4 flex items-center gap-4 rounded-md ${dragOverElementName == "to-do" ? "bg-[white]" : ""
                  }`}
              >
                <LuListTodo className="text-2xl" /> <h2>To-do</h2>
              </div>

              {toDoTasks?.map((task, idx) => (
                <div>
                  <Task idx={idx} setUpdateId={setUpdateId} key={task._id} task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal} />
                  {/* <UpdateTask task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal}></UpdateTask> */}
                </div>
              ))}
            </div>
            {/* ongoing/doing tasks */}
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="doing"
              className={`min-h-screen px-2 rounded-lg transition-all duration-1000 ${dragOverElementName === "doing" ? "bg-[#E3E4E6]" : ""
                }`}
            >
              <div
                className={`bg-gray-300/20 mt-2 text-black px-6 py-4 flex items-center gap-4 rounded-md ${dragOverElementName == "doing" ? "bg-[white]" : ""
                  }`}
              >
                <LuListTodo className="text-2xl" /> <h2 className="">Doing</h2>
              </div>

              {doingTasks?.map((task, idx) => (
                <div>
                  <Task idx={idx} setUpdateId={setUpdateId} key={task._id} task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal} />
                  {/* <UpdateTask task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal}></UpdateTask> */}
                </div>
              ))}
            </div>
            {/* done/completed tasks */}
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="done"
              className={`px-2 min-h-screen rounded-lg transition-all duration-1000 ${dragOverElementName === "done" ? "bg-[#E3E4E6]" : ""
                }`}
            >
              <div
                className={`bg-gray-300/20 text-black px-6 py-4 mt-2 flex items-center gap-4 rounded-md ${dragOverElementName == "done" ? "bg-[white]" : ""
                  }`}
              >
                <LuListTodo className="text-2xl" /> <h2 className="">Done</h2>
              </div>

              {doneTasks?.map((task, idx) => (
                <div>
                  <Task idx={idx} setUpdateId={setUpdateId} key={task._id} task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal} />
                  {/* <UpdateTask task={task} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal}></UpdateTask> */}
                </div>
              ))}
            </div>
          </div>
          <TaskModal
            openModal={openModal}
            setOpenModal={setOpenModal}
          ></TaskModal>
          <UpdateTask updateId={updateId} openUpdateModal={openUpdateModal} setOpenUpdateModal={setOpenUpdateModal}></UpdateTask>
        </section>
      )}
    </>
  );
};

export default Tasks;
