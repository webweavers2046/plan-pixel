import { useContext } from "react";
import useGlobalContext from "./useGlobalContext";
import { taskContext } from "@/Providers/TaskDndProvider";

const useFilterTasks = (tasksArray, filter, draggingTaskId, droppableArea) => {
  const { dragoverTask } = useContext(taskContext);
  const { position } = dragoverTask || {};
  const filteredTasks = tasksArray?.filter((task) => task?.status === filter);
  const draggingTask = tasksArray.find((task) => task._id === draggingTaskId);
  
  if (droppableArea) {
    const columnSequencedTasks = tasksArray?.filter(
      (task) => task.status === droppableArea
    );

    const dropIndex = columnSequencedTasks.findIndex(
      (task) => task.position === position
    );

    for (let i = dropIndex + 1; i < columnSequencedTasks.length; i++) {
      columnSequencedTasks[i].position += 1;
    }

  }

  return filteredTasks;
};

export default useFilterTasks;