"use client";
// drag drop file
import "@/styles/globals.css";
import { LuListTodo } from "react-icons/lu";
import { FiPlusSquare } from "react-icons/fi";
import { BsCheck2Square } from "react-icons/bs";
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
import { FaRegFileArchive } from "react-icons/fa";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { GoTasklist } from "react-icons/go";
import ArchivedTasks from "../Components/ArchivedTasks/ArchivedTasks";
import Toggler from "@/components/Common/CommonModal/Toggler";
import useAxios from "@/hooks/useAxios";
import { IoPlayForwardOutline } from "react-icons/io5";
import ListBoxDropdown from "@/components/Common/ListBoxDropdown/ListBoxDropdown";
import doingIcon from "@/assets/icons/doingIcon.png"

import { RiMenu2Line } from "react-icons/ri";
import MobileMenu from "../Components/ArchivedTasks/MobileMenu";
import { PiChartLineUp } from "react-icons/pi";

const Tasks = () => {
    // manage all your state here..
    const [openModal, setOpenModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [isArchiveMenuOpen, setIsArchiveMenu] = useState(false);

    const {
        alltasks,
        dropOn,
        draggingOver,
        dragOverElementName,
        isDragging,
        draggingTaskId,
    } = useDNDcontext();

    // Axios for data fetching
    const xios = useAxios();

    // const { data: alltasks } = useAllTasks();

    const { allWorkspaceTasks } = useContext(ablyContext);
    const {
        activeWorkspaceTasks,
        setIsActive,
        isActive,
        handleMultipleArchive,
        handleMultipleUnArchive,
    } = useContext(globalContext);

    if (!activeWorkspaceTasks) return;

    // const workspaceAllTasks =
    //   activeWorkspaceTasks.length > 0 ? activeWorkspaceTasks : allWorkspaceTasks;

    const workspaceAllTasks =
        activeWorkspaceTasks.length > 0 ? activeWorkspaceTasks : [];

    // console.log('activeWorkspaceTasks',activeWorkspaceTasks);
    // console.log('allWorkspaceTasks',allWorkspaceTasks);

    // console.log('all tasks of workspace',workspaceAllTasks);

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

    const { activeWorkspace, isTogglerEnabled, setIsTogglerEnabled } =
        useGlobalContext();
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
                    <div className="">
                        <h6 className="text-[21px] mb-2  flex gap-1 font-semibold items-center ">
                            <span className="h-3 w-3 font-serif  rounded-full bg-gradient-to-br from-[#93C648] to-[#50B577] text-white"></span>
                            {title ? title : "your board"}
                        </h6>
                    </div>

                    <RiMenu2Line
                        onClick={() => setIsArchiveMenu(!isArchiveMenuOpen)}
                        className="flex cursor-pointer md:hidden absolute right-2 z-50 "
                    />

                    <div
                        className={`md:relative  hidden md:flex rounded-md items-center bg-dashboardPrimaryColor/70 justify-between px-2  border-b pb-2 pt-2 border-white/50`}
                    >
                        <div className=" flex  gap-2.5 text-[16px]">
                            <div
                                onClick={() => setIsActive("all-tasks")}
                                className={`flex items-center gap-x-2 ${
                                    isActive === "all-tasks" ? "bg-white" : ""
                                } py-2.5 px-6 cursor-pointer rounded-md transition-all duration-300`}
                            >
                                <GoTasklist className="text-base" />
                                All tasks
                            </div>
                            <div
                                onClick={() => setIsActive("archived-tasks")}
                                className={`${
                                    isActive === "archived-tasks"
                                        ? "bg-white"
                                        : ""
                                } p-2 px-3 rounded-md flex items-center gap-1 cursor-pointer transition-all duration-300 hover:bg-white/80`}
                            >
                                <HiOutlineArchiveBox />
                                Archived tasks
                            </div>
                            {/* <ListBoxDropdown/> */}
                        </div>
                        <div className="flex justify-end gap-1 lg:w-72 items-center">
                            <div
                                onClick={() => setOpenFilter(!openFilter)}
                                className={`${
                                    openFilter ? "bg-white" : ""
                                } py-2.5 px-4 rounded-md flex items-center gap-3 cursor-pointer hover:bg-white/80`}
                            >
                                <IoFilterOutline />
                                <span>Filter</span>
                                {/* Filtering modal */}
                            </div>
                            <div
                                className={`${
                                    openFilter
                                        ? "visible opacity-100"
                                        : "invisible opacity-0"
                                } transition-all duration-300`}
                            >
                                {
                                    <FilterModal
                                        openFilter={openFilter}
                                        setOpenFilter={setOpenFilter}
                                    />
                                }
                            </div>

                            <button
                                onClick={() => setOpenModal(!openModal)}
                                className="bg-primary text-white flex justify-between text-sm px-7 py-3 rounded-md "
                            >
                                <FiPlusSquare className="inline  me-2 text-xl" />{" "}
                                Add Task
                            </button>

                            {/* <div>
                <Toggler enabled={isTogglerEnabled} setEnabled={setIsTogglerEnabled}/>
              </div> */}
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {
                        <div
                            className={`${
                                isArchiveMenuOpen
                                    ? "w-72 "
                                    : "opacity-0 w-0 invisible"
                            } duration-300 transition-all`}
                        >
                            <MobileMenu
                                setOpenFilter={setOpenFilter}
                                openFilter={openFilter}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        </div>
                    }

                    <div
                        className={` ${
                            isActive === "all-tasks"
                                ? "translate-x-0 opacity-100 visible"
                                : "translate-x-[300px] opacity-0 invisible"
                        } transition-all duration-700 ease-liner`}
                    >
                        {isActive === "all-tasks" && (
                            <div
                                className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-2 mt-4 min-h-screen`}
                            >
                                {/* upcoming task */}
                                <div
                                    droppable="true"
                                    onDragOver={(e) => draggingOver(e)}
                                    onDrop={(e) => dropOn(e)}
                                    id="upcoming"
                                    className={`min-h-screen ${
                                        isDragging ? " relative" : ""
                                    } rounded-lg transition-all duration-1000 ${
                                        dragOverElementName === "upcoming"
                                            ? "bg-[#E3E4E6]"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className={`bg-gray-300/20 text-black px-6 py-4 flex items-center mt-2 gap-4 rounded-md ${
                                            dragOverElementName == "upcoming"
                                                ? "bg-[white]"
                                                : ""
                                        }`}
                                    >
                                        <IoPlayForwardOutline  className="text-2xl" />{" "}
                                        <h2 className="">Upcoming</h2>
                                    </div>

                                    {upcomingTasks?.map((task, idx) => (
                                        <div>
                                            <Task
                                                idx={idx}
                                                key={task._id}
                                                task={task}
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
                                            />
                                            <UpdateTask
                                                task={task}
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
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
                                    className={`min-h-screen  ${
                                        dragOverElementName && "realative "
                                    } rounded-lg transition-all duration-1000 ${
                                        dragOverElementName === "to-do"
                                            ? "bg-[#E3E4E6]"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className={`bg-gray-300/20 text-black px-6 mt-2 py-4 flex items-center gap-4 rounded-md ${
                                            dragOverElementName == "to-do"
                                                ? "bg-[white]"
                                                : ""
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
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
                                            />
                                            <UpdateTask
                                                task={task}
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
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
                                    className={`min-h-screen  rounded-lg transition-all duration-1000 ${
                                        dragOverElementName === "doing"
                                            ? "bg-[#E3E4E6]"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className={`bg-gray-300/20 mt-2 text-black px-6 py-4 flex items-center gap-4 rounded-md ${
                                            dragOverElementName == "doing"
                                                ? "bg-[white]"
                                                : ""
                                        }`}
                                    >
                                        <PiChartLineUp className="text-2xl" />{" "}
                                        <h2 className="font-semibold">Doing</h2>
                                    </div>

                                    {doingTasks?.map((task, idx) => (
                                        <div>
                                            <Task
                                                idx={idx}
                                                key={task._id}
                                                task={task}
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
                                            />
                                            <UpdateTask
                                                task={task}
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
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
                                    className={` min-h-screen rounded-lg transition-all duration-1000 ${
                                        dragOverElementName === "done"
                                            ? "bg-[#E3E4E6]"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className={`bg-gray-300/20 text-black px-6 py-4 mt-2 flex items-center gap-4 rounded-md ${
                                            dragOverElementName == "done"
                                                ? "bg-[white]"
                                                : ""
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
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
                                            />
                                            <UpdateTask
                                                task={task}
                                                openUpdateModal={
                                                    openUpdateModal
                                                }
                                                setOpenUpdateModal={
                                                    setOpenUpdateModal
                                                }
                                            ></UpdateTask>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className={` ${
                            isActive === "archived-tasks"
                                ? "translate-x-0 opacity-100 visible"
                                : "translate-x-[300px] opacity-0 invisible"
                        } transition-all duration-700 ease-liner`}
                    >
                        {isActive === "archived-tasks" && <ArchivedTasks />}
                    </div>
                    <TaskModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    ></TaskModal>

                    <CardDetailsModal></CardDetailsModal>
                    {/* {
                isTogglerEnabled &&
                <button onClick={ isActive === "all-tasks"? handleMultipleArchive:handleMultipleUnArchive} className="bg-rose-600 fixed bottom-8 right-2 z-50 text-white p-2 rounded-lg">{
                  isActive === "all-tasks"?"Archive multiple":"Unarchive multiple"
                } </button>
          } */}
                </section>
            )}
        </>
    );
};

export default Tasks;
