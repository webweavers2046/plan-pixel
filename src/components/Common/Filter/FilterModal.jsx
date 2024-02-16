import React, { useState } from "react";
import CheckBox from "./CheckBox";
import Tags from "./Tags";
import useAxios from "@/hooks/useAxios";
import Search from "./Search";
import { FaStopwatch } from "react-icons/fa6";
import Spinner from "../CommonModal/Spinner";
// ... (import statements)

const FilterModal = () => {
  const xios = useAxios();
  const [selectedValues, setSelectedValues] = useState({
    status: "",
    priority: "",
    workspace: "",
    dueDate: "Due Date:", // Set your desired default date here
    tags: [],
  });
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDropdownChange = (e) => {
    const { name, value, options } = e.target;

    // Handle date input separately
    if (name === "dueDate") {
      setSelectedValues((prevValues) => ({ ...prevValues, [name]: value }));
    } else {
      setSelectedValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleFilterButtonClick = async () => {
    // Perform API request with selected criteria
    setIsLoading(true)
    const response = await xios.post("/api/filtered-tasks", selectedValues);
    console.log(response.data);
    if (response?.data) {
      setFilteredTasks(response.data);
      setIsLoading(false)
    }
  };

  return (
    <div
      className={`z-50 overflow-auto  scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 absolute right-28 p-3 w-[400px] ${
        filteredTasks?.length > 0 ? "h-[100vh] -top-24" : "h-[70vh] top-[60px]"
      } p-2-lg bg-gradient-to-br from-[hsl(0,0%,100%)] to-[hsl(103,100%,99%)] shadow-lg border-t-2 border-gray-50 transition-all duration-500 `}
    >
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold">Filter</h1>
        <div className="border border-b-4 border-r-black"></div>
      </div>
      <Search />
      <div>
        <select
          className="p-2 m-3 border-collapse border-0 bg-[#F9FAFB]"
          name="status"
          value={selectedValues.status}
          onChange={handleDropdownChange}
        >
          <option value="">Select Status</option>
          <option value="upcoming">Upcoming</option>
          <option value="to-do">To-Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>

        <select
          className="p-2 m-3 border-collapse border-0 bg-[#F9FAFB]"
          name="priority"
          value={selectedValues.priority}
          onChange={handleDropdownChange}
        >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <div className="flex gap-2">
          <select
            className="p-2 m-3 border-collapse border-0 bg-[#F9FAFB] "
            name="workspace"
            value={selectedValues.workspace}
            onChange={handleDropdownChange}
          >
            <option value="">Select Workspace</option>
          </select>

          <div className="flex items-center m-3">
            <input
              type="date"
              name="dueDate"
              value={selectedValues.dueDate}
              onChange={handleDropdownChange}
              // Adding a placeholder for the date input
              placeholder="Due Date:  "
            />
          </div>
        </div>
        <ul className={`${filteredTasks?.length > 0?"overflow-auto px-3 relative h-[60vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" : "overflow-hidden"}`}>


<div className={`${!filteredTasks?.length > 0?"visible opacity-100":"invisible hidden opacity-0"} transition-all duration-300 `} >
  <h1 className="font-semibold text-gray-700 space-y-2">Member</h1>
      <div className={`flex flex-col gap-y-2 mt-2`}>
        {
          
          ["Forhad Hossain",1,3,3,3,3,"Shakil Ahmmed","Anthesem Sajid"].map(member => <div className="flex gap-1 items-center text-gray-500"><input type="checkbox" name="" id="" /> {member}</div>   )
        }
        

      </div>


</div>



          {isLoading && <div className="absolute top-0 left-44 "><Spinner/></div>}
          {filteredTasks?.map((task) => (
            <li className="bg-[#fff] flex justify-between shadow-lg p-3   my-3">
              <div>
                <h1>{task?.title}</h1>
              </div>
              <p className="pt-3 flex transition-all duration-500 items-center gap-2">
                <FaStopwatch className="text-green-500" />{" "}
                <span className="text-xs pt-0.5 ">{task?.dates?.dueDate}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
          
          
      <div className="flex justify-end transition-all duration-500  items-end mt-auto">
      <span onClick={() => setFilteredTasks([])} className="rounded-md w-24 p-1 block text-white text-center  cursor-pointer bg-rose-500 active:scale-95 transition-all duration-300 absolute bottom-5 right-32">
          Clear all
        </span>
      <button
        onClick={handleFilterButtonClick}
        className="rounded-md w-24 p-1 block absolute bottom-5 right-3 bg-gradient-to-br from-[#93C648] to-[#50B577] text-white active:scale-95 transition-all duration-300"
      >
        Apply
      </button>
    </div>
          
    </div>
  );
};

export default FilterModal;
