"use client";
// taskk.jsx
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/shakil.jpg";
import member05Img from "@/assets/team-members/sajid.jpg";
import { GrTasks } from "react-icons/gr";
import { FaEquals, FaStopwatch } from "react-icons/fa6";
import Swal from "sweetalert2";
import Image from "next/image";
import useAxios from "@/hooks/useAxios";
import useDNDcontext from "@/hooks/useGlobalTaskData";
import { MdDoubleArrow } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext, useEffect, useRef, useState } from "react";
import { globalContext } from "@/Providers/globalContext";
import { AuthContext } from "@/Providers/AuthProviders";
import AreYouSureModal from "@/components/Common/CommonModal/AreYouSureModal";
import Dropdown from "@/components/Common/CommonModal/Dropdown";
import toast from "react-hot-toast";

const Task = ({ setUpdateId, task, openUpdateModal, setOpenUpdateModal }) => {
    const { openCardDetails, setOpenCardDetails, cardId, setCardId } =
        useContext(AuthContext);

    // manage all you state here
    const { draggingStarted, draggingOver, isDropped } = useDNDcontext();
    const { user } = useContext(AuthContext);
    const xios = useAxios();
    const {
        activeWorkspace,
        fetchLatestData,
        fetchArchivedData,
        isTogglerEnabled,
        clickBaseFilterTaskId,
        shouldScrollIntoView,
    } = useContext(globalContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState({});
    const [reason, setReason] = useState("");
    const [isArchived, setIsArchived] = useState(false);

    const handleDeleteTask = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                xios.delete(`/deleteTask/${id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            "Deleted!",
                            "Your task has been deleted.",
                            "success"
                        );
                    }
                });
            }
        });
    };

    const handleUpdate = (id) => {
        setOpenUpdateModal(!openUpdateModal);
    };

    const handleCard = () => {
        setCardId(task?._id);
        setOpenCardDetails(!openCardDetails);
    };

    // handle Archive (this funciton will archive the task)

    const handleArchive = async () => {
        const archiveTask = { ...task, archiver: user?.email };
        // console.log(archiveTask);
        const response = await xios.post("/api/tasks/archive", archiveTask);
        // console.log(response?.data);
        if (response.data?.insertedId) {
            toast.success("archived");
            // setIsArchived(true);
        }
    };

    useEffect(() => {
        fetchLatestData();
        fetchArchivedData();
    }, [task]);

    // Retrieve the existing selected IDs from local storage
    const handleSelectedIdsChanges = async (e, task) => {
        const isChecked = e.target.checked;

        // new archive task format
        const newArchiveTask = {
            taskId: task?._id,
            taskName: task?.title,
            workspaceName: activeWorkspace?.title,
            archivedTimestamp: new Date(),
            // archivedReason: "Review",
            archivist: user && user?.displayName,
            priority: task?.priority,
        };

        const existingSelectedTasks =
            JSON.parse(localStorage.getItem("selectedTasks")) || [];
        // Update the selected IDs based on the checkbox state
        const updatedSelectedIds = isChecked
            ? [...existingSelectedTasks, newArchiveTask]
            : existingSelectedTasks.filter(
                  (Etask) => Etask?.taskId !== task?._id
              );

        // Save the updated selected IDs to local storage
        localStorage.setItem(
            "selectedTasks",
            JSON.stringify(updatedSelectedIds)
        );
    };

    // When toggler of bulk archiving off, clear the storage
    isTogglerEnabled ? "" : localStorage.removeItem("selectedTasks");

    const taskRef = useRef(null);

    useEffect(() => {
        // Check if the task needs to be scrolled into view
        if (taskRef.current && shouldScrollIntoView) {
            taskRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [shouldScrollIntoView]); // Add dependencies as needed

    return (
        <div
            ref={taskRef}
            draggable
            id={task._id}
            onDragOver={(e) => draggingOver(e, task._id)}
            onDragStart={(e) => draggingStarted(e, task?._id, task?.status)}
            className={` 
      border 
            task-container
            mt-4 cursor-grabbing overflow-hidden relative transform transition-all bg-[#f6f7f8] 0.5s 
            ease-in-out ${
                clickBaseFilterTaskId === task?._id
                    ? "bg-[#E8F0FE]  shadow-lg "
                    : "bg-[#ffffff]"
            }  rounded-md px-4 py-4 text-black 
            ${isDropped ? "transition-all linear 1s" : ""} 
            `}
        >
            {isTogglerEnabled && (
                <div>
                    <input
                        onChange={(e) => handleSelectedIdsChanges(e, task)}
                        className="absolute z-50 cursor-pointer opacity-10 -left-2 -top-2 bg-transparent w-[600px] h-[600px]"
                        type="checkbox"
                    />
                </div>
            )}

            <div className=" flex items-center gap-2 relative justify-between">
                <h2
                    className={`font-semibold text-lg ${
                        clickBaseFilterTaskId === task?._id
                            ? "text-[#1558D6]"
                            : ""
                    }`}
                >
                    {task.title}
                </h2>
                <div className="flex">
                    <p className=" flex items-center gap-2 mr-3">
                        <span className="text-sm pt-0.5">{task.priority}</span>
                        {task?.priority == "High" ? (
                            <MdDoubleArrow className="-rotate-90 text-red-500" />
                        ) : task?.priority == "Low" ? (
                            <MdDoubleArrow className="rotate-90 text-[#93C648]" />
                        ) : (
                            <FaEquals className="text-red-500" />
                        )}
                    </p>
                </div>
                <Dropdown
                    className="block"
                    id={task?._id}
                    handleDeleteTask={handleDeleteTask}
                    handleUpdate={handleUpdate}
                    setIsOpen={setIsOpen}
                    setSelectedTask={setSelectedTask}
                    task={task}
                ></Dropdown>
                {""}
            </div>
            <p className="text-xs opacity-65 pt-4">{task.description}</p>
            <div className="flex justify-between items-center">
                <p className="pt-3 flex items-center gap-2">
                    <FaStopwatch className="text-green-500" />{" "}
                    <span className="text-xs pt-0.5 ">
                        {task?.dates?.startDate} - {task?.dates?.dueDate}
                    </span>
                </p>
            </div>
            <hr className="mt-5 bg-black/15 h-[2px]" />
            <div className="flex items-center mt-4 justify-end">
                {/* <div className="flex -space-x-4 rtl:space-x-reverse">
          <Image
            width={30}
            height={30}
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src={member01Img}
            alt=""
          />
          <Image
            width={30}
            height={30}
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src={member02Img}
            alt=""
          />
          <Image
            width={30}
            height={30}
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src={member03Img}
            alt=""
          />
          <Image
            width={30}
            height={30}
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src={member04Img}
            alt=""
          />
        </div> */}
                {/* <p></p> */}
                <button onClick={handleCard}>
                    <GrTasks className="text-xl opacity-40" />
                </button>
                {/* Are you sure modal ( do you wanna archive this task?) */}
                <AreYouSureModal
                    setReason={setReason}
                    handler={handleArchive}
                    id={task?._id}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    title={"Are you sure?"}
                    type="archive"
                />
            </div>
        </div>
    );
};

export default Task;
