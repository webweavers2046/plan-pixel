import Image from "next/image";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import Avater from "./Avater";
import { FcHighPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { MdOutlineUnarchive } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "@/Providers/globalContext";
import AreYouSureModal from "@/components/Common/CommonModal/AreYouSureModal";
import Toggler from "@/components/Common/CommonModal/Toggler";
import useAxios from "@/hooks/useAxios";

// #EFF6FE (blue bg for list hover)
// #2A80E7 (text color hover)

// #FCE1E7 (low priority bg)
// (text low priority also the timestamp)

//  (high priority bg)
// (text  priority also the timestamp)





const ArchivedTasks = () => {
    const {archivedTasks,handleUnarchive,setArchiveTaskId,isTogglerEnabled,setIsTogglerEnabled} = useContext(globalContext)
    const [isOpen,setIsOpen] = useState(false)

  const handleSelectedIdsChanges = async (e, taskId) => {
    const isChecked = e.target.checked;

    // Retrieve the current array of unarchiveTaskIds from local storage
    const unarchiveTaskIds = JSON.parse(localStorage.getItem("unarchiveTaskIds")) || [];

    // Update the selected IDs based on the checkbox state
    const updatedSelectedIds = isChecked
      ? [...unarchiveTaskIds, taskId]
      : unarchiveTaskIds.filter((id) => id !== taskId);

    // Save the updated selected IDs to local storage ( now these ids are in central place )
    // you can find it from anywhere
    localStorage.setItem("unarchiveTaskIds", JSON.stringify(updatedSelectedIds));
};

  // When toggler of bulk archiving off, clear the storage
  isTogglerEnabled ? "" : localStorage.removeItem("unarchiveTaskIds");



  return (
    <div className=" relative bg-gradient-to-br from-[white] to-[#fbfbff]  h-screen w-full">
      <div className="flex justify-center ">
        <Image
          width={200}
          height={200}
          src={"https://i.ibb.co/7CNSZq9/archive-removebg-preview.png"}
          alt="archive monstal icons"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">All you archives tasks are here</h1>
        <p className="text-[#6E6D7A]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem possimus deleniti facilis quae ratione culpa repellat
          eum fugiat distinctio laudantium, odit nisi veritatis alias cum beatae
          dignissimos a sed perspiciatis!
        </p>
      </div>

      <div className="absolute top-2 right-2"><Toggler setEnabled={setIsTogglerEnabled} enabled={isTogglerEnabled}/></div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-11 px-2">
        {archivedTasks?.map((task) => {
          return (
            <div className="bg-white text-gray-500 relative overflow-hidden p-3 shadow-md rounded-lg">


          {isTogglerEnabled && (
        <div>
          <input
            onChange={(e) => handleSelectedIdsChanges(e, task?.taskId)}
            className="absolute z-50 cursor-pointer opacity-10 -left-2 -top-2 bg-transparent w-[600px] h-[600px]"
            type="checkbox"
          />
        </div>
       )}


              <div className="flex items-center mb-2 gap-2">
                {task.priority === "high" && <FcHighPriority />}
                {task.priority === "medium" && <FcMediumPriority />}
                {task.priority === "low" && <FcLowPriority />}
                {task.priority && (
                  <p>
                    {task.priority.charAt(0).toUpperCase() +
                      task.priority.slice(1)}{" "}
                  </p>
                )}
              </div>
              <div className="text-[16px] space-y-1">
              <span className="bg-[#E3F4EA] text-[#08A44E] p-1 px-2 rounded-lg">{task.workspaceName}</span> {task.taskName} was archived by{" "}
              <p><strong className="font-semibold text-black">{task.archivist}</strong> on{" "} <span className=" p-1 px-2 rounded-lg text-[#C73459]">
                {task.archivedTimestamp}
              </span></p> 
              
              <p>Reason: {task.archivedReason}</p>

              <div className=" flex justify-between">
              <Avater />
              
              <button onClick={()=> {
                  setArchiveTaskId(task?.taskId)
                  setIsOpen(true)

              }
                } className="bg-[#eff1f5] h-9 w-9 rounded-full flex justify-center items-center">
              <MdOutlineUnarchive className="text-gray-400"/></button>
              </div>
              <AreYouSureModal
            id={task?.taskId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handler={handleUnarchive}
            title={"Are you sure to unarchive?"}
              />
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArchivedTasks;
