import { globalContext } from "@/Providers/globalContext";
import { ablyContext } from "@/components/ably/AblyProvider";
import useAllTasks from "@/hooks/useAllTasks";
import useFilterTasks from "@/hooks/useFilterTasks";
import { useContext } from "react";

const TaskStats = () => {

    const { allWorkspaceTasks } = useContext(ablyContext);
    const { activeWorkspaceTasks } = useContext(globalContext);
  
    if (!activeWorkspaceTasks) return;
  
    const workspaceAllTasks =
      activeWorkspaceTasks.length > 0 ? activeWorkspaceTasks : allWorkspaceTasks;

    const todo = workspaceAllTasks?.filter(task => task?.status === "to-do");
    const done = workspaceAllTasks?.filter(task => task?.status === "done");
    const doing = workspaceAllTasks?.filter(task => task?.status === "doing");

    return (
        <div className="grid grid-cols-2 px-10  gap-5">
            <div className="bg-[#50B57759] flex flex-col justify-center items-center font-semibold p-5 rounded-lg">
                <h5 className="text-xl">Total Finished Task:</h5>
                <h4 className="text-6xl mt-2">
                    {
                        done?.length < 10 ?
                            '0' + done?.length
                            :
                            done?.length
                    }
                </h4>
            </div>
            <div className="bg-[#FBBC0559] flex flex-col justify-center items-center font-semibold p-5 rounded-lg">
                <h5 className="text-xl">Total Unfinished Task:</h5>
                <h4 className="text-6xl mt-2">
                    {
                        doing?.length + todo?.length < 10 ?
                            '0' + (doing?.length + todo?.length)
                            :
                            doing?.length + todo?.length
                    }
                </h4>
            </div>
        </div>
    );
};

export default TaskStats;