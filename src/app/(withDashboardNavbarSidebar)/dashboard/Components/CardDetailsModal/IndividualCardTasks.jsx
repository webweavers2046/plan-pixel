import StyledArrow from "./StyledArrow";

const IndividualCardTasks = ({ email }) => {
    const name = email;
    const myTasks = [
        { task: "Calender Feature Implement" },
        { task: "Calender Feature Implement" },
        { task: "Calender Feature Implement" },
    ]

    return (
        <div className="w-full ">
            <h3 className="font-semibold text-lg">{name}</h3>

            <div class="w-full my-4 bg-gray-200 rounded-full dark:bg-gray-700">
                <div class="bg-[#50B577] w-[45%] text-xs font-medium text-blue-100 text-center p-[1px] leading-none rounded-full"> 45%</div>
            </div>

            <div className="pl-4 mt-3 ">
                <div className="w-[9px] h-[9px] bg-[#50B577] rounded-full mb-[3px] -ml-[3px]"></div>
                <div className="flex flex-col gap-2 w-full ">
                    {
                        myTasks?.map(task =>
                            <div key={task} className="flex gap-3 ">
                                <StyledArrow></StyledArrow>
                                <div className="flex gap-2 items-center justify-center -mb-[22px] w-full">
                                    <input type="checkbox"  name=""
                                        className="w-5 h-5 rounded-full border-2 border-gray-600" />
                                    <div className="flex justify-between w-full">
                                        <p>{task?.task}</p>
                                        <button className="font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md">Delete</button>
                                    </div>
                                </div>

                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default IndividualCardTasks;