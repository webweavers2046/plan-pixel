'use client'
import { useState } from "react";
import StyledArrow from "./StyledArrow";
import useAxios from "@/hooks/useAxios";
import SingleTask from "./SingleTask";

const IndividualCardTasks = ({ member, cardTasks, cardId, refetch }) => {
    const [openTaskInput, setOpenTaskInput] = useState(false)
    const axiosPublic = useAxios();
    const name = member?.memberName;
    const email = member?.userEmail;
    // console.log(cardTasks);
    // console.log(email);

    const myTasks = cardTasks?.filter(task => task?.email === email)
    const completedTasks = myTasks?.filter(task => task?.checked === true);

    const totalTasks = myTasks?.length;
    const totalCompletedTasks = completedTasks?.length;
    // console.log(totalTasks);
    // console.log(totalCompletedTasks);
    const progress = totalTasks > 0 && totalCompletedTasks > 0 ? totalCompletedTasks / totalTasks * 100 : 0;
    // console.log(progress);



    // {
    //     cardId: "65c713fbecd9dca9f4aa817e",
    //     taskMember: "Al-amin Rahim",
    //     email: "alamin102410@gmail.com",
    //     task: "Calender Feature Implement",
    //     checked: true,
    // },

    const handleAddNewTask = () => {
        // setOpenTaskInput(!openTaskInput);
        const task = document.getElementById("taskInput").value;

        const newTask = {
            cardId: cardId,
            assignedMember: name,
            email: email,
            task: task,
            checked: false,
        }

        console.log("add new task", newTask);

        axiosPublic.post("/createCardTask", newTask)
            .then(res => {
                console.log(res?.data);
                if (res?.data?.insertedId) {
                    refetch();
                    setOpenTaskInput(false);
                }
            })
    }

    return (
        <div className="w-full ">
            <h3 className="font-semibold text-lg">{name}</h3>

            <div class="w-full my-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div class={`bg-[#50B577]  text-xs font-medium text-blue-100 text-center py-[1px] leading-none rounded-full `}
                    style={{ width: `${progress?.toFixed(1)}%` }}>{progress?.toFixed(1)}%
                </div>
            </div>

            <div className="pl-4 mt-3">
                <div className="w-[9px] h-[9px] bg-[#50B577] rounded-full mb-[3px] -ml-[3px]"></div>
                <div className="flex flex-col gap-2 w-full ">
                    {
                        myTasks?.map(task =>
                            <SingleTask key={task} task={task} refetch={refetch}></SingleTask>
                        )}
                </div>
                <div className={`flex gap-3 ${myTasks?.length > 0 ? 'mt-2' : ''}`}>
                    <StyledArrow></StyledArrow>
                    {
                        openTaskInput ?

                            <div className="w-4/5">
                                <input type="text" id="taskInput" placeholder="Add an item" className="mt-[16px] w-full rounded-md" />
                                <div>
                                    {/* Add button */}
                                    <button onClick={handleAddNewTask} className="font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#50B577] text-white rounded-md hover:bg-green-500
                    mt-[16px]">Add</button>
                                    {/* cancel button */}
                                    <button onClick={() => setOpenTaskInput(false)} className="font-semibold text-xs ml-4 w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300 
                    mt-[16px]">Cancel</button>
                                </div>
                            </div>
                            :
                            // add an item button
                            <button onClick={() => setOpenTaskInput(!openTaskInput)} className="font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300 
                    mt-[16px]">Add an item</button>
                    }
                </div>

            </div>
        </div>
    );
};

export default IndividualCardTasks;