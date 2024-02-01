const useFilterTasks  = (tasksArray,filter) => {
    return tasksArray?.filter(task =>  task.status === filter)
}

export default useFilterTasks