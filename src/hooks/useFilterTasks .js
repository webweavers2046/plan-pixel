import { useContext } from "react";
import useGlobalContext from "./useGlobalContext";
import { taskContext } from "@/Providers/TaskDndProvider";

const useFilterTasks = (tasksArray, filter, draggingTaskId, droppableArea) => {
  const { dragoverTask } = useContext(taskContext);
  const { position } = dragoverTask || {};
  const filteredTasks = tasksArray?.filter((task) => task?.status === filter);
  const draggingTask = tasksArray.find((task) => task._id === draggingTaskId);

  // console.log("from line number 12", position);

  if (droppableArea) {
    const columnSequencedTasks = tasksArray?.filter(
      (task) => task.status === droppableArea
    );

    const dropIndex = columnSequencedTasks.findIndex(
      (task) => task.position === position
    );

    // console.log("Task Index in Column: ", dropIndex);

    // Adjust positions for tasks below the drop position
    for (let i = dropIndex + 1; i < columnSequencedTasks.length; i++) {
      columnSequencedTasks[i].position += 1;
    }

    // Now you can update your state or server with the modified positions
    // ...

    // console.log("Modified Column Sequenced Tasks: ", columnSequencedTasks);
  }

  return filteredTasks;
};

export default useFilterTasks;