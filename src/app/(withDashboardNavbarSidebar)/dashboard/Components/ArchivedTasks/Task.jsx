import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";
import Avater from "./Avater";
import { MdOutlineUnarchive } from "react-icons/md";

const Task = ({task}) => {
    const {taskName,priority,workspaceName,archivedTimestamp,archivedReason,archivist} = task || {}
    return (
        <div className="bg-white text-gray-500 p-3 shadow-md rounded-lg">
              <div className="flex items-center mb-2 gap-2">
                {priority === "high" && <FcHighPriority />}
                {priority === "medium" && <FcMediumPriority />}
                {/* {task?.priority === "low" && <FcLowPriority />} */}
                {priority && (
                  <p>
                    {priority?.charAt(0).toUpperCase() +
                      priority.slice(1)}{" "}
                  </p>
                )}
              </div>
              <div className="text-[16px] space-y-1">
              <span className="bg-[#E3F4EA] text-[#08A44E] p-1 px-2 rounded-lg">{workspaceName}</span> {taskName} was archived by{" "}
              <p><strong className="font-semibold text-black">{archivist}</strong> on{" "} <span className=" p-1 px-2 rounded-lg text-[#C73459]">
                {archivedTimestamp}
              </span></p> 
              
              <p>Reason: {archivedReason}</p>

              <div className=" flex justify-between">
              <Avater />
              
              <div className="bg-[#eff1f5] h-9 w-9 rounded-full flex justify-center items-center">
            <MdOutlineUnarchive className="text-gray-400"/>

              </div>
              </div>
              </div>
            </div>
    );
};
export default Task;