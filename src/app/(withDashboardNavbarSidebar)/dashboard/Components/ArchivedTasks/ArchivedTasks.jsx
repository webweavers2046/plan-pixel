
import { useContext, useState } from "react";
import { globalContext } from "@/Providers/globalContext";
import CompletedTasksChart from "@/components/Common/Progressbar/Progressbar";
import TittleAndDescripton from "./TittleAndDescripton";
import GradientBg from "@/components/Common/gradient/GradientBg";
import TimeBasedTasks from "./TimeBasedTasks";
import ArchiveGridTasks from "./ArchiveGridTasks";
import { AuthContext } from "@/Providers/AuthProviders";
import useAxios from "@/hooks/useAxios";

const ArchivedTasks = () => {
  const {
    archivedTasks,
    handleUnarchive,
    isTogglerEnabled,
  } = useContext(globalContext);
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(AuthContext)
  const xios = useAxios()
  const [filteredTasks,setFilteredTasks] = useState(archivedTasks)
  // completed task analytics for chart view graph
  let completedTasks;
  let totalTasks;


  if(archivedTasks?.length > 0){
    
    completedTasks = archivedTasks?.filter(task => task.status === "done")?.length
    totalTasks = filteredTasks?.length;
  }


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



  // archive tasks search handler 
  const handleSearchArchiveTasks = async(query) => {
    
    const response = await xios.get(`/api/search/archived-tasks/${user&&user.email}/${query}`)
    if(response?.data.length > 0){
      setFilteredTasks(response.data)
    }
  }

  return (
    <div className=" relative bg-gradient-to-br  min-h-screen w-full">
      <div className="flex justify-between items-center">
        <TimeBasedTasks />
      
      </div>

      <div className="flex justify-center "></div>
      <TittleAndDescripton handleSearchArchiveTasks={handleSearchArchiveTasks} />
      <GradientBg />
      <div className=" lg:grid grid-cols-3 mt-11">

        <div className=" lg:col-span-2">
        <ArchiveGridTasks
          handleSelectedIdsChanges={handleSelectedIdsChanges}
          archivedTasks={filteredTasks}
          handleUnarchive={handleUnarchive}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />


        </div>

        <div className="bg-[#FFFFFF] hidden lg:block w-80 min-h-[90vh]">
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
