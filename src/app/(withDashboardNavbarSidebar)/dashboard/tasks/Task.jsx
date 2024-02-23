"use client";

import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/shakil.jpg";
import member05Img from "@/assets/team-members/sajid.jpg";
import { FaEquals, FaStopwatch } from "react-icons/fa6";
import Swal from "sweetalert2";
import Image from "next/image";
import useAxios from "@/hooks/useAxios";
import useDNDcontext from "@/hooks/useGlobalTaskData";
import { MdDoubleArrow } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "@/Providers/globalContext";
import { AuthContext } from "@/Providers/AuthProviders";
import AreYouSureModal from "@/components/Common/CommonModal/AreYouSureModal";
import Dropdown from "@/components/Common/CommonModal/Dropdown";
import toast from "react-hot-toast";

const Task = ({ setUpdateId,
    task,
    openUpdateModal,
    setOpenUpdateModal }) => {

    const { openCardDetails, setOpenCardDetails, cardId, setCardId } = useContext(AuthContext);

    // manage all you state here
    const { draggingStarted, draggingOver, isDropped } = useDNDcontext();
    const {user} = useContext(AuthContext)
    const xios = useAxios()
    const {activeWorkspace,fetchLatestData,fetchArchivedData} = useContext(globalContext)
    const { clickBaseFilterTaskId } = useContext(globalContext)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState({})
    const [reason, setReason] = useState("")
    const [isArchived,setIsArchived] = useState(false)
    



    const handleDeleteTask = (id) => {
        console.log(id);
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
                xios.delete(`/deleteTask/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your task has been deleted.",
                                "success"
                            );
                        }
                    })

            }
        });
    };

    const handleUpdate = (id) => {
        // setWorkspaceId()
        // setUpdateId(id)
        setOpenUpdateModal(!openUpdateModal)
    }

    const handleCard = () => {
        setCardId(task?._id)
        setOpenCardDetails(!openCardDetails)
    }

    // handle Archive (this funciton will archive the task)
  const handleArchive = async(_id) => {
    const info = {
        taskId: _id,
        taskName: selectedTask?.title,
        workspaceName: activeWorkspace?.title,
        archivedTimestamp: new Date(),
        archivedReason: reason,
        archivist: user && user?.displayName,
        priority: task?.priority,
      }
      const response = await xios.post(`/api/tasks/archive?isArchive=${true}`,info)
      if(response.data){
          toast.success("archived")
          setIsArchived(true)
      }
    }

    useEffect(()=> {
        fetchLatestData()
        fetchArchivedData()
    },[isArchived])



    return (
        <div
            draggable
            id={task._id}
            onDragOver={(e) => draggingOver(e, task._id)}
            onDragStart={(e) => draggingStarted(e, task?._id, task?.status)}
            className={` 
            task-container
            mt-4 cursor-grabbing transform transition-all 0.5s 
            ease-in-out ${clickBaseFilterTaskId === task?._id ? "bg-[#E8F0FE]  shadow-lg " : "bg-[#ffffff]"}  rounded-md p-8 text-black 
            ${isDropped ? "transition-all linear 1s" : ""} 
            `}
        >
       <Dropdown
       id={task?._id}
       handleDeleteTask={handleDeleteTask}
       handleUpdate={handleUpdate}
       setIsOpen={setIsOpen}
       setSelectedTask={setSelectedTask}
       task={task}
       ></Dropdown>
            
            {" "}
            <div className=" flex items-center gap-2 relative justify-between">
                <h2 className={`font-semibold text-lg ${clickBaseFilterTaskId === task?._id ? "text-[#1558D6]" : ""}`}>{task.title}</h2>
            </div>
            <p className="text-xs opacity-65 pt-4">{task.description}</p>
            <div className="flex justify-between items-center">
                <p className="pt-3 flex items-center gap-2">
                    <FaStopwatch className="text-green-500" />{" "}
                    <span className="text-xs pt-0.5 ">
                        {task?.dates?.startDate} - {task?.dates?.dueDate}
                    </span>
                </p>
                <p className=" flex items-center absolute top-8 right-10 gap-2">
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
            <hr className="mt-5 bg-black/15 h-[2px]" />
            <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-4 rtl:space-x-reverse">
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
                </div>
                <button onClick={handleCard}>
                    <BiSolidMessageSquareDetail className="text-xl opacity-40" />
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
