"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "./customCalender.css";
const Calender = ({ setDate, date }) => {
  // const [date, setDate] = useState(new Date());
  return (
    <div className="calendar-container mb-10">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};
export default Calender;
