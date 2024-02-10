import { useEffect, useState } from "react";
import useAxios from "./useAxios";


const useSingleTask = (id) => {
    console.log('id', id);
    const xios = useAxios();
    const [task, setTask] = useState(null);
    console.log('task', task);

    useEffect(() => {
        if(id){
            console.log(id);
            xios.get(`/singleTask/${id}`).then((data) => setTask(data.data));
        }
    }, [id]);

    return task;
};

export default useSingleTask;