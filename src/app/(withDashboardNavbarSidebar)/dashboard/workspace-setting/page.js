import Calendar from "./Calendar/Calendar";
import TaskBarGraph from "./TaskBarGraph/TaskBarGraph";
import WorkSpaceDetails from "./WorkSpaceDetails/WorkSpaceDetails";

const page = () => {
    return (
        <div className="pl-6 pr-4 flex w-full gap-5">
            <div className="flex w-2/3 justify-between gap-5">
                <WorkSpaceDetails></WorkSpaceDetails>
                <TaskBarGraph></TaskBarGraph>

            </div>
            <div className=" w-1/3">
                <Calendar></Calendar>
            </div>
        </div>
    );
};

export default page;