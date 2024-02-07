import useGetSocketData from "@/hooks/useGetAllTasks";

const TaskStats = () => {
    const allTasks = useGetSocketData();
    const todo = allTasks?.filter(task => task?.status === 'to-do');
    const doing = allTasks?.filter(task => task?.status === 'doing');
    const done = allTasks?.filter(task => task?.status === 'done');
    // console.log('todo', todo);
    // console.log('doing', doing);
    // console.log('done', done);
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