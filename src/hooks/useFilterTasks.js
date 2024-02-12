const useFilterTasks = (tasks, filter) => {
  // Sort tasks by position and then by updatedAt
  const sortedTasks = tasks?.sort((a, b) => {
    // Sort by position
    if (a.position !== b.position) {
      return a.position - b.position;
    }

    // If positions are the same, sort by updatedAt
    if (a.updatedAt && b.updatedAt) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    }

    return 0;
  });

  // Replace tasks with the same position with the most recent updatedAt
  const uniqueTasks = [];
  sortedTasks?.forEach(task => {
    const existingTaskIndex = uniqueTasks.findIndex(t => t.position === task.position);
    if (existingTaskIndex !== -1) {
      // If task with the same position exists, replace if the current task has a more recent updatedAt
      if (new Date(task.updatedAt) > new Date(uniqueTasks[existingTaskIndex].updatedAt)) {
        uniqueTasks[existingTaskIndex] = task;
      }
    } else {
      uniqueTasks.push(task);
    }
  });

  // Filter tasks based on the provided status
  return uniqueTasks?.filter(task => task?.status === filter);
};

export default useFilterTasks;