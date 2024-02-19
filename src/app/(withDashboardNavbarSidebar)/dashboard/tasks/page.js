"use client";
import "@/styles/globals.css";
import { LuListTodo } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi";
import { BsCheck2Square, BsFastForwardFill } from "react-icons/bs";
import { FaChartGantt } from "react-icons/fa6";
import Task from "./Task";
import { useContext, useState } from "react";
import TaskModal from "../Components/TaskModal";
import useFilterTasks from "@/hooks/useFilterTasks ";
import useDNDcontext from "@/hooks/useGlobalTaskData";
import UpdateTask from "../Components/UpdateTask";
import useGlobalContext from "@/hooks/useGlobalContext";
import { ablyContext } from "@/components/ably/AblyProvider";
import CardDetailsModal from "../Components/CardDetailsModal/CardDetailsModal";
import { globalContext } from "@/Providers/globalContext";
import { IoFilterOutline } from "react-icons/io5";
import FilterModal from "@/components/Common/Filter/FilterModal";

const Tasks = () => {
  // manage all your state here..
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const {
    alltasks,
    dropOn,
    draggingOver,
    dragOverElementName,
    isDragging,
    draggingTaskId,
  } = useDNDcontext();
  // const { data: alltasks } = useAllTasks();

  const { allWorkspaceTasks } = useContext(ablyContext);
  const { activeWorkspaceTasks } = useContext(globalContext);

  if (!activeWorkspaceTasks) return;

  const workspaceAllTasks =
    activeWorkspaceTasks.length > 0 ? activeWorkspaceTasks : allWorkspaceTasks;

  // Tasks in different status
  const toDoTasks = useFilterTasks(
    workspaceAllTasks,
    "to-do",
    draggingTaskId,
    dragOverElementName
  );
  const upcomingTasks = useFilterTasks(
    workspaceAllTasks,
    "upcoming",
    draggingTaskId,
    dragOverElementName
  );
  const doingTasks = useFilterTasks(
    workspaceAllTasks,
    "doing",
    draggingTaskId,
    dragOverElementName
  );
  const doneTasks = useFilterTasks(
    workspaceAllTasks,
    "done",
    draggingTaskId,
    dragOverElementName
  );

  const { activeWorkspace } = useGlobalContext();
  const { title, description } = activeWorkspace || {
    title: "Your board",
    description: "hello there it is your demo board ",
  };
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      {typeof window !== "undefined" && (
        <section>
          {/* header section  */}
          <div className="relative items-center ml-3 flex  justify-between  border-b pb-2 pt-1   border-white/50">
            <div className="">
              <h6 className="font-medium text-[22px] flex gap-1 items-center mb-1">
                <span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#93C648] to-[#50B577] text-white"></span>
                {title ? title : "your board"}
              </h6>
              {description ? (
                <p className="md:w-full lg:w-[500px] text-gray-400">
                  {description}
                </p>
              ) : (
                <p className="opacity-80 mt-1 font-light text-sm">
                  Create and complete
                  <br /> and manage your tasks using TaskTo task board.
                </p>
              )}
            </div>
            <div className="flex lg:w-52">
              <div
                onClick={() => setOpenFilter(!openFilter)}
                className={`${openFilter?"bg-gray-100 px-2  rounded-lg ":""} flex items-center gap-2 cursor-pointer`}
              >
                <IoFilterOutline />
                <span>Filteer</span>
                {/* Filtering modal */}
              </div>
              <div className={`${openFilter?"visible opacity-100":"invisible opacity-0"} transition-all duration-300 `}>
                {
                  <FilterModal openFilter={openFilter} setOpenFilter={setOpenFilter} />}
                  </div> 

              <button
                onClick={() => setOpenModal(!openModal)}
                className="bg-white text-black flex justify-between text-sm px-5 py-3 rounded-md "
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
              className={`min-h-screen ${
                isDragging ? " relative" : ""
              } px-2 rounded-lg transition-all duration-1000 ${
                dragOverElementName === "upcoming" ? "bg-[#E3E4E6]" : ""
              }`}
            >
              <div
                className={`bg-gray-300/20 text-black px-6 py-4 flex items-center mt-2 gap-4 rounded-md ${
                  dragOverElementName == "upcoming" ? "bg-[white]" : ""
                }`}
              >
                <LuListTodo className="text-2xl" />{" "}
                <h2 className="">Upcoming</h2>
              </div>

              {upcomingTasks?.map((task, idx) => (
                <div>
                  <Task
                    idx={idx}
                    key={task._id}
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  />
                  <UpdateTask
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  ></UpdateTask>
                </div>
              ))}
            </div>
            {/* to do task */}
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="to-do"
              className={`min-h-screen px-2 ${
                dragOverElementName && "realative "
              } rounded-lg transition-all duration-1000 ${
                dragOverElementName === "to-do" ? "bg-[#E3E4E6]" : ""
              }`}
            >
              <div
                className={`bg-gray-300/20 text-black px-6 mt-2 py-4 flex items-center gap-4 rounded-md ${
                  dragOverElementName == "to-do" ? "bg-[white]" : ""
                }`}
              >
                <LuListTodo className="text-2xl" />{" "}
                <h2 className="font-semibold">To-do</h2>
              </div>

              {toDoTasks?.map((task, idx) => (
                <div>
                  <Task
                    idx={idx}
                    key={task._id}
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  />
                  <UpdateTask
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  ></UpdateTask>
                </div>
              ))}
            </div>
            {/* ongoing/doing tasks */}
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="doing"
              className={`min-h-screen px-2 rounded-lg transition-all duration-1000 ${
                dragOverElementName === "doing" ? "bg-[#E3E4E6]" : ""
              }`}
            >
              <div
                className={`bg-gray-300/20 mt-2 text-black px-6 py-4 flex items-center gap-4 rounded-md ${
                  dragOverElementName == "doing" ? "bg-[white]" : ""
                }`}
              >
                <FaChartGantt className="text-2xl" />{" "}
                <h2 className="font-semibold">Doing</h2>
              </div>

              {doingTasks?.map((task, idx) => (
                <div>
                  <Task
                    idx={idx}
                    key={task._id}
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  />
                  <UpdateTask
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  ></UpdateTask>
                </div>
              ))}
            </div>
            {/* done/completed tasks */}
            <div
              droppable="true"
              onDragOver={(e) => draggingOver(e)}
              onDrop={(e) => dropOn(e)}
              id="done"
              className={`px-2 min-h-screen rounded-lg transition-all duration-1000 ${
                dragOverElementName === "done" ? "bg-[#E3E4E6]" : ""
              }`}
            >
              <div
                className={`bg-gray-300/20 text-black px-6 py-4 mt-2 flex items-center gap-4 rounded-md ${
                  dragOverElementName == "done" ? "bg-[white]" : ""
                }`}
              >
                <BsCheck2Square className="text-2xl" />{" "}
                <h2 className="font-semibold">Done</h2>
              </div>

              {doneTasks?.map((task, idx) => (
                <div>
                  <Task
                    idx={idx}
                    key={task._id}
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  />
                  <UpdateTask
                    task={task}
                    openUpdateModal={openUpdateModal}
                    setOpenUpdateModal={setOpenUpdateModal}
                  ></UpdateTask>
                </div>
              ))}
            </div>
          </div>
          <TaskModal
            openModal={openModal}
            setOpenModal={setOpenModal}
          ></TaskModal>

          <CardDetailsModal
          ></CardDetailsModal>
        </section>
      )}
    </>
  );
};

export default Tasks;
