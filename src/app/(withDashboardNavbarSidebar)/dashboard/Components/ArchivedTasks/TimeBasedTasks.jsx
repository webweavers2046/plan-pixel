import { BsCalendarMonth } from "react-icons/bs";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { WiDayLightWind } from "react-icons/wi";

const TimeBasedTasks = () => {
    return (
        <div>
          <div className="flex gap-2 text-[15px] font-semibold mt-5 text-[#c0c0c0]">
            <p className="text-[#252525] flex items-center gap-1">
              {" "}
              <WiDayLightWind />
              Daily
            </p>
            <p className=" flex items-center gap-1">
              {" "}
              <LiaCalendarWeekSolid /> Weekly
            </p>
            <p className=" flex items-center gap-1">
              <BsCalendarMonth />
              Monthly
            </p>
          </div>
        </div>

    );
};
export default TimeBasedTasks;