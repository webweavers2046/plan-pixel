// This hook filter the tasks based on their status
const useFilterTasks = (tasks,filter) => {
  return tasks?.filter(task => task?.status === filter)
};

export default useFilterTasks;
