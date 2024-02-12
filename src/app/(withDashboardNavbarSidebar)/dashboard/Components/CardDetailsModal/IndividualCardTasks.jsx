import StyledArrow from "./StyledArrow";

const IndividualCardTasks = ({email}) => {
    const name = email;
    const myTasks = [
        { task: "Calender Feature Implement" },
        { task: "Calender Feature Implement" },
        { task: "Calender Feature Implement" },
    ]

    return (
        <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="pl-4 mt-3">
                <div className="w-[9px] h-[9px] bg-[#50B577] rounded-full mb-[3px] -ml-[3px]"></div>
                <div className="flex flex-col gap-2">
                    {
                        myTasks?.map(task =>
                            <div key={task} className="flex gap-3">
                                <StyledArrow></StyledArrow>
                                <div className="flex gap-2 items-center justify-center -mb-[22px]">
                                    <input type="checkbox" name=""
                                        className="w-5 h-5 rounded-full border-2 border-gray-600" />
                                    <p>{task?.task}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default IndividualCardTasks;