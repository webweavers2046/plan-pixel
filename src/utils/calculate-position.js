const calculatePosition = (alltasks, mouseY, droppableRect) => {
  const relativeY = mouseY - droppableRect.top;
  const totalTasks = alltasks.length;

  // Find the existing tasks that the mouse is between (if any)
  const [aboveTask, belowTask] = alltasks.reduce(
    (result, task) => {
      const taskTop = (task.position / totalTasks) * droppableRect.height;
      const taskBottom = ((task.position + 1) / totalTasks) * droppableRect.height;

      if (relativeY < taskTop && !result[0]) {
        result[0] = task;
      }

      if (relativeY > taskBottom) {
        result[1] = task;
      }

      return result;
    },
    [null, null]
  );

  // If the mouse is between two existing tasks, calculate position accordingly
  if (aboveTask && belowTask) {
    const newPosition =
      (aboveTask.position + belowTask.position) / 2 +
      (belowTask.updatedAt > aboveTask.updatedAt ? 0.5 : -0.5); 
    return Math.max(0, Math.min(totalTasks - 1, newPosition));
  }

  // If not, calculate the position based on the relativeY
  const position = Math.round((relativeY / droppableRect.height) * (totalTasks > 0 ? totalTasks - 1 : 0));

  // Ensure the calculated position is within a reasonable range
  return Math.max(0, Math.min(totalTasks - 1, position));
};

export default calculatePosition;