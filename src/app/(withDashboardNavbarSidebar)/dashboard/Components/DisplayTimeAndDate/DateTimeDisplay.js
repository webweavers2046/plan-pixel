import React from "react";
import useDateTime from "./useDateTime";

const DateTimeDisplay = () => {
    const { currentTime, currentDate, currentDay } = useDateTime();

    return (
        <div>
            <h3 className="text-2xl">{currentTime}</h3>
            <div className="">
                <p className="">
                    {currentDay}, {currentDate}
                </p>
            </div>
        </div>
    );
};

export default DateTimeDisplay;
