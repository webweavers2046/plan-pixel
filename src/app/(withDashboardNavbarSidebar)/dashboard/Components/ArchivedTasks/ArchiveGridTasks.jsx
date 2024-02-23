import { FcComments, FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";
import Avater from "./Avater";
import Image from "next/image";
import { FaCaretLeft } from "react-icons/fa6";
import AreYouSureModal from "@/components/Common/CommonModal/AreYouSureModal";
import useGlobalContext from "@/hooks/useGlobalContext";

const ArchiveGridTasks = ({handleSelectedIdsChanges,setIsOpen,isOpen}) => {

    const {archivedTasks,
        handleUnarchive,
        setArchiveTaskId,
        isTogglerEnabled,
        } = useGlobalContext()

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 px-2 mt-6">
        {archivedTasks?.map((task) => {
          return (
            <div className="bg-white text-gray-500 max-h-52 relative overflow-hidden p-3 shadow-md rounded-lg">
              {isTogglerEnabled && (
                <div>
                  <input
                    onChange={(e) =>
                      handleSelectedIdsChanges(e, task?.taskId)
                    }
                    className="absolute z-50 cursor-pointer opacity-10 -left-2 -top-2 bg-transparent w-[600px] h-[600px]"
                    type="checkbox"
                  />
                </div>
              )}

              <div className="flex items-center mb-2 gap-2">
                {task.priority === "high" && (
                  <FcHighPriority className="text-[16px]" />
                )}
                {task.priority === "Medium" && (
                  <FcMediumPriority className="text-[16px]" />
                )}
                {task.priority === "Low" && (
                  <FcLowPriority className="text-[16px]" />
                )}
                {task.priority && (
                  <p>
                    {task.priority.charAt(0).toUpperCase() +
                      task.priority.slice(1)}{" "}
                  </p>
                )}
              </div>
              <div className="text-[16px] space-y-1">
                <span className="bg-[#f5fdf8] text-[#29e07c] p-1 px-2 rounded-lg">
                  {task.workspaceName}
                </span>{" "}
                {task.taskName} was archived by{" "}
                <strong className="font-semibold text-[#808080]">
                  {task.archivist}
                </strong>{" "}
                <p>
                  on{" "}
                  <span className=" p-1 px-2 text-[14px] rounded-lg text-[#C73459]">
                    {task.archivedTimestamp}
                  </span>
                </p>
                <div className=" flex justify-between">
                  <Avater />
                  <div className="flex items-center gap-4">
                    <div className="bg-[#f1f4f6e1] h-7 w-7 rounded-full flex justify-center items-center">
                      <Image
                        width={30}
                        height={30}
                        className=""
                        src={
                          "https://i.ibb.co/7CNSZq9/archive-removebg-preview.png"
                        }
                        alt="archive monstal icons"
                      />
                    </div>
                    <button className="bg-[#f1f4f6e1] h-7 w-7 rounded-full flex justify-center items-center">
                      <FcComments />
                    </button>
                    <button
                      onClick={() => {
                        setArchiveTaskId(task?.taskId);
                        setIsOpen(true);
                      }}
                      className="bg-[#f1f4f6e1] h-7 w-7 rounded-full flex justify-center items-center"
                    >
                      <FaCaretLeft className="text-gray-400" />
                    </button>
                  </div>
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
    );
};
export default ArchiveGridTasks;