import { useContext, useState } from "react";
import StyledArrow from "./StyledArrow";
import useAxios from "@/hooks/useAxios";
import { globalContext } from "@/Providers/globalContext";

const SingleTask = ({ task, refetch }) => {
    const [isChecked, setIsChecked] = useState(task?.checked);
    const axiosPublic = useAxios();
    const {fetchLatestData} = useContext(globalContext)
    const handleCheckboxChange = (e) => {
        const checked = e?.target?.checked;
        console.log('value of checkbox :', e.target.checked);
        axiosPublic.put(`/updateChecked/${task?._id}`, {checked : checked})
        .then(res => {
            // console.log(res.data);
            if(res?.data?.modifiedCount){
                refetch();
            }
        })
    }

    const handleDeleteTask = () => {
        axiosPublic?.delete(`/deleteCardTask/${task?._id}`)
            .then(res => {
                // console.log(res.data);
                if (res?.data?.deletedCount) {
                    refetch()
                    fetchLatestData()
                }
            })
    }

    return (
        <div className="flex gap-3 ">
            <StyledArrow></StyledArrow>
            <div className="flex gap-2 items-center justify-center -mb-[22px] w-full">
                <input type="checkbox" defaultChecked={isChecked}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 rounded-full border-2 border-gray-600" />
                <div className="flex justify-between w-full">
                    <p>{task?.task}</p>
                    <button onClick={handleDeleteTask} className="font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300">Delete</button>
                </div>
            </div>

        </div>
    );
};

export default SingleTask;