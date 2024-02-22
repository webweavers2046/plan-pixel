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
import { FcComments } from "react-icons/fc";
import { FaCaretLeft } from "react-icons/fa6";
import AutoCompleteSearch from "./AutoComplete";
import { BsCalendarMonth } from "react-icons/bs";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { WiDayLightWind } from "react-icons/wi";
import ProgressBarChart from "@/components/Common/Progressbar/Progressbar";
import CompletedTasksChart from "@/components/Common/Progressbar/Progressbar";
import TittleAndDescripton from "./TittleAndDescripton";
import GradientBg from "@/components/Common/gradient/GradientBg";
import TimeBasedTasks from "./TimeBasedTasks";
import ArchiveGridTasks from "./ArchiveGridTasks";

const ArchivedTasks = () => {
  const {
    archivedTasks,
    handleUnarchive,
    setArchiveTaskId,
    isTogglerEnabled,
    setIsTogglerEnabled,
  } = useContext(globalContext);
  const [isOpen, setIsOpen] = useState(false);

  const completedTasks = 5;
  const totalTasks = 10;

  const handleSelectedIdsChanges = async (e, taskId) => {
    const isChecked = e.target.checked;

    // Retrieve the current array of unarchiveTaskIds from local storage
    const unarchiveTaskIds =
      JSON.parse(localStorage.getItem("unarchiveTaskIds")) || [];

    // Update the selected IDs based on the checkbox state
    const updatedSelectedIds = isChecked
      ? [...unarchiveTaskIds, taskId]
      : unarchiveTaskIds.filter((id) => id !== taskId);

    // Save the updated selected IDs to local storage ( now these ids are in central place )
    // you can find it from anywhere
    localStorage.setItem(
      "unarchiveTaskIds",
      JSON.stringify(updatedSelectedIds)
    );
  };

  // When toggler of bulk archiving off, clear the storage
  isTogglerEnabled ? "" : localStorage.removeItem("unarchiveTaskIds");

  return (
    <div className=" relative bg-gradient-to-br from-[white] to-[#F9F9F9]  min-h-screen w-full">
      <div className="flex justify-between items-center">
        <TimeBasedTasks />
      
      </div>

      <div className="flex justify-center "></div>
      <TittleAndDescripton />
      <GradientBg />
      <div className="absolute top-2 right-2">
        <Toggler setEnabled={setIsTogglerEnabled} enabled={isTogglerEnabled} />
      </div>
      <div className="flex mt-11">
        <ArchiveGridTasks
          handleSelectedIdsChanges={handleSelectedIdsChanges}
          archivedTasks={archivedTasks}
          handleUnarchive={handleUnarchive}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />

        <div className="bg-[#FFFFFF] w-80 min-h-[90vh]">
          <CompletedTasksChart
            completedTasks={completedTasks}
            totalTasks={totalTasks}
          />

          <div className="mt-8">
            <h1 className="font-semibold text-[17px] mb-1 pl-2">
              Recently archived tasks
            </h1>
            <div className=" bg-white flex flex-col gap-2 p-2 rounded-sm">
              <div className="flex gap-2 shadow-sm justify-between">
                {/*  */}
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 "></div>
                  <div>
                    <h1 className="text-[15px]">Solid Principle</h1>
                    <p className="text-[#b2bacd]">notes was to review</p>
                  </div>
                </div>
                <button className="text-green-300 text-[14px] mb-auto">
                  Notes
                </button>
              </div>
              {/*  */}
              <div className="flex gap-2 shadow-sm justify-between">
                {/*  */}
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 "></div>
                  <div>
                    <h1 className="text-[15px]">Solid Principle</h1>
                    <p className="text-[#b2bacd]">notes was to review</p>
                  </div>
                </div>
                <button className="text-green-300 text-[14px] mb-auto">
                  Notes
                </button>
              </div>
              {/*  */}
              <div className="flex gap-2 shadow-sm justify-between">
                {/*  */}
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 "></div>
                  <div>
                    <h1 className="text-[15px]">Solid Principle</h1>
                    <p className="text-[#b2bacd]">notes was to review</p>
                  </div>
                </div>
                <button className="text-green-300 text-[14px] mb-auto">
                  Notes
                </button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArchivedTasks;
