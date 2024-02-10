import useAllTasks from "./useAllTasks";

const useFilterTasks = () => {
    const {data : allTasks, isLoading} = useAllTasks();
    // console.log(allTasks);

    const todo = allTasks?.filter(task => task?.status === "to-do");
    const upcoming = allTasks?.filter(task => task?.status === "upcoming");
    const doing = allTasks?.filter(task => task?.status === "doing");
    const done = allTasks?.filter(task => task?.status === "done");
    const upcomingTasks = allTasks?.filter(task => task.status === 'upcoming')

    // console.log('todo', todo);
    // console.log('upcoming', upcomingTasks);
    // console.log('doing', doing);
    // console.log('done', done);

    return {todo, upcoming, doing, done};

};

export default useFilterTasks;