import React, { useContext, useEffect, useRef, useState } from "react";
import useAxios from "@/hooks/useAxios";
import Search from "./Search";
import { FaStopwatch } from "react-icons/fa6";
import Spinner from "../CommonModal/Spinner";
import { globalContext } from "@/Providers/globalContext";
import { AuthContext } from "@/Providers/AuthProviders";
import { IoFilterOutline } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";
import FilterHistory from "./FilterHistory";



const FilterModal = ({setOpenFilter,openFilter}) => {
  const xios = useAxios();
  const {userWokspaceList,handleTaskClick,setClickBaseFilterTaskId,
    setSearchQueryFromHistory,
    searchQueryFromHistory
  } = useContext(globalContext)
  const {user} = useContext(AuthContext)
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenFilterHistory,setIsOpenFilterHistory] = useState(false);
  const modalRef = useRef();

  // const [isFilterClear, setIsLoading] = useState(false);

  const [selectedValues, setSelectedValues] = useState({
    status: "",
    priority: "",
    workspaceId: "",
    dueDate: "", 
    tags: [],
  });
  
  const handleDropdownChange = (e) => {
    const { name, value} = e.target;

    // Handle date input separately
    if (name === "dueDate") {
      setSelectedValues((prevValues) => ({ ...prevValues, [name]: value }));
    } else {
      setSelectedValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handleFilterButtonClick = async () => {
    // Perform API request with selected criteria
    setIsLoading(true);
    const response = await xios.post(`/api/filtered-tasks/${user?.email}`, selectedValues);
    console.log(response.data);
    if (response?.data) {
      setFilteredTasks(response.data);
      setIsLoading(false);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside of the modal, close the filter & remove the highlighted id 
        setOpenFilter(false);
        setClickBaseFilterTaskId("")
      }
    };

    // Add event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenFilter,setClickBaseFilterTaskId,searchQueryFromHistory]);

  const [suggestions, setSuggestions] = useState([]);
  
    const handleInputChange = async (searchQuery) => {
      const response = await xios.get(`/api/filter-tasks/search?query=${searchQuery}&userEmail=${user?.email}`);
      setSuggestions(response.data);
      if (searchQuery === "") {
        setSuggestions([]);
        setFilteredTasks([])
      } else{
        setFilteredTasks(suggestions)
      }
    };


  return (
    <div
    ref={modalRef}
      className={`z-50 overflow-y-hidden absolute right-[125px] p-3 w-[420px] ${
        filteredTasks?.length > 0 ? "h-[100vh]  -top-24" : "h-[70vh] top-[60px]"
      } p-2-lg bg-gradient-to-br from-[hsl(0,0%,100%)] to-[hsl(103,100%,99%)] shadow-lg border-t-2 border-gray-50 transition-all duration-500 `}
    >
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold">Filter</h1>
        
                  
<button data-tooltip-target="tooltip-animation" type="button" class="text-black active:scale-90 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center dark:bg-blue-600  "><MdManageHistory onClick={()=>setIsOpenFilterHistory(true)} className="text-2xl cursor-pointer"/>  </button>

<div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

        <div className={`transition-all ${
        isOpenFilterHistory ? "w-64" : "w-0"
      } bg-white shadow-lg z-50 fixed top-0 ease-in-out scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 right-0 duration-500 h-screen overflow-x-hidden overflow-y-auto`}>
        <FilterHistory isOpenFilterHistory={isOpenFilterHistory} setIsOpenFilterHistory={setIsOpenFilterHistory}/>

        </div>
        
      </div>
        <div className="border border-b-1 mt-4 border-r-black"></div>
      <Search openFilter={openFilter} handleInputChange={handleInputChange} />
      <div>
        <div className="flex relative justify-between gap-2">
          <select
            className="p-2 my-3 border-collapse border-0 bg-[#F9FAFB]"
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
            className="p-2 my-3 border-collapse border-0 bg-[#F9FAFB]"
            name="priority"
            value={selectedValues.priority}
            onChange={handleDropdownChange}
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex justify-between gap-2">
          <select
            className="p-2 my-2 border-collapse border-0 bg-[#F9FAFB] "
            name="workspaceId"
            value={selectedValues.workspaceId}
            onChange={handleDropdownChange}
          >
            <option value="">Select Workspace</option>
            {
              userWokspaceList?.map(workspace => <option key={workspace?._id} value={workspace?._id}>{workspace?.title}</option> )
            }
          </select>

          <div className="flex items-center">
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
        <ul
          className={`${
            filteredTasks?.length > 0 || suggestions?.length > 0 
              ? "overflow-y-auto pb-24 mt-5 h-[60vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              : "overflow-hidden"
          }`}
        >
          {isLoading && (
            <div className="absolute -top-6 left-48   ">
              <Spinner />
            </div>
          )}
          {filteredTasks?.map((task) => (
            <li
              key={task._id}
              onClick={()=> handleTaskClick(task?._id, task?.workspace)}
              className="bg-[#fff] flex justify-between cursor-pointer shadow-md p-4 my-5"
            >
              <div className="flex gap-2">
                <h1>{task?.title}</h1></div>
              <p className="pt-3 flex transition-all duration-500 items-center gap-2">
                <FaStopwatch className="text-green-500" />{" "}
                <span className="text-xs pt-0.5 ">{task?.dates?.dueDate}</span>
              </p>

            </li>
          ))}
        </ul>
      </div>
      {
  !(filteredTasks?.length > 0 || suggestions?.length > 0) && (
    <IoFilterOutline className="absolute bottom-20 left-[145px] text-9xl opacity-5" />
  )
}

      <div className="flex justify-end transition-all duration-500  absolute bottom-0 w-full left-0 bg-[white] p-2 h-[80px] items-end mt-auto">
        <span
          onClick={() => {
            setFilteredTasks([])
            setSelectedValues({
              status: "",
              priority: "",
              workspaceId: "",
              dueDate: "",
              tags: [],
            });
            setClickBaseFilterTaskId("")
            setSearchQueryFromHistory("")
          }}
          className="rounded-md w-24 p-1 block text-white text-center  cursor-pointer bg-rose-500 active:scale-95 transition-all duration-300 absolute bottom-6 right-32"
        >
          Clear all
        </span>
        <button
          onClick={handleFilterButtonClick}
          className="rounded-md w-24 p-1 block absolute bottom-6 right-3 bg-gradient-to-br from-[#93C648] to-[#50B577] text-white active:scale-95 transition-all duration-300"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
