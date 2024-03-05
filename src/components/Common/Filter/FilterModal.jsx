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
import PaperPieces from "../CommonModal/paperCutPiece";
import Image from "next/image";
import { BsClockHistory } from "react-icons/bs";

const FilterModal = ({ setOpenFilter, openFilter }) => {
    const xios = useAxios();
    const {
        userWokspaceList,
        handleTaskClick,
        setClickBaseFilterTaskId,
        setSearchQueryFromHistory,
        searchQueryFromHistory,
        // when click on filtered task
        setShouldScrollIntoView,
        shouldScrollIntoView,
    } = useContext(globalContext);
    const { user } = useContext(AuthContext);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpenFilterHistory, setIsOpenFilterHistory] = useState(false);
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
        const { name, value } = e.target;

        // Handle date input separately
        if (name === "dueDate") {
            setSelectedValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        } else {
            setSelectedValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };

    const handleFilterButtonClick = async () => {
        // Perform API request with selected criteria
        setIsLoading(true);
        const response = await xios.post(
            `/api/filtered-tasks/${user?.email}`,
            selectedValues
        );
        console.log(response.data);
        if (response?.data) {
            setFilteredTasks(response.data);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the clicked element is outside the modal and not inside the modal content
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target) &&
                !event.target.closest(".modal-content-class") // Replace 'your-modal-content-class' with the actual class of your modal content
            ) {
                // Clicked outside of the modal, close the filter & remove the highlighted id
                setOpenFilter(false);
                setClickBaseFilterTaskId("");
                // when click out of filter modal set false to scroll into view
                setShouldScrollIntoView(false);
            }
        };

        // Add event listener to the document body
        document.addEventListener("mousedown", handleClickOutside);

        // Remove the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenFilter, setClickBaseFilterTaskId, searchQueryFromHistory]);

    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (searchQuery) => {
        const response = await xios.get(
            `/api/filter-tasks/search?query=${searchQuery}&userEmail=${user?.email}`
        );
        setSuggestions(response.data);
        if (searchQuery === "") {
            setSuggestions([]);
            setFilteredTasks([]);
        } else {
            setFilteredTasks(suggestions);
        }
    };

    if (openFilter) {
        document.body.style.overflow = "hidden";
    } else if (shouldScrollIntoView) {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "auto";
    }

    return (
        <div
            ref={modalRef}
            className={`z-50 modal-content-class overflow-y-hidden font-serif border fixed right-[9%] p-6 w-[330px] ${
                filteredTasks?.length > 0
                    ? "h-[100vh]  top-0"
                    : "h-[68vh] top-[200px]"
            } p-2-lg bg-gradient-to-br text-[15px] from-[hsl(0,0%,100%)] to-[hsl(103,100%,99%)] shadow-lg border-t-2 border-gray-50 transition-all duration-500 `}
        >
            <div className="flex modal-content-class justify-between items-center px-2">
                <h1 className="text-[24px] font-bold">Filter</h1>

                <button
                    data-tooltip-target="tooltip-animation"
                    type="button"
                    class="text-black modal-content-class active:scale-90 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center dark:bg-blue-600  "
                >
                    <BsClockHistory
                        onClick={() => setIsOpenFilterHistory(true)}
                        className="text-[20px] cursor-pointer"
                    />{" "}
                </button>

                <div
                    className={`transition-all ${
                        isOpenFilterHistory ? "w-64" : "w-0"
                    } bg-white modal-content-class shadow-lg z-50 fixed top-0 ease-in-out scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 right-0 duration-500 h-screen overflow-x-hidden overflow-y-auto`}
                >
                    <FilterHistory
                        isOpenFilterHistory={isOpenFilterHistory}
                        setIsOpenFilterHistory={setIsOpenFilterHistory}
                    />
                </div>
            </div>
            <div className="border modal-content-class border-b-1 mt-4 border-r-black"></div>
            <Search
                openFilter={openFilter}
                handleInputChange={handleInputChange}
            />
            <div>
                <div className="flex modal-content-class relative justify-between gap-2">
                    <select
                        className="p-2 my-3 text-[14px] w-1/2 border-collapse border-0 text-gray-500 bg-[#F9FAFB]"
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
                        className="p-2 text-[14px] my-3 w-1/2 border-collapse text-gray-500 border-0 bg-[#F9FAFB]"
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
                <div className="flex modal-content-class justify-between gap-2">
                    <select
                        className="p-2 my-2 text-[14px] w-1/2 border-collapse text-gray-500 border-0 bg-[#F9FAFB] "
                        name="workspaceId"
                        value={selectedValues.workspaceId}
                        onChange={handleDropdownChange}
                    >
                        <option value="">Select Workspace</option>
                        {userWokspaceList?.map((workspace) => (
                            <option key={workspace?._id} value={workspace?._id}>
                                {workspace?.title}
                            </option>
                        ))}
                    </select>

                    <div className="flex text-[14px] modal-content-class w-1/2 text-gray-500 border-none items-center">
                        <input
                            type="date"
                            name="dueDate"
                            value={selectedValues.dueDate}
                            onChange={handleDropdownChange}
                            // Adding a placeholder for the date input
                            placeholder="Due Date:  "
                            className=" border-none text-[14px]"
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
                        <div className="absolute -top-6 left-36 ">
                            <Spinner />
                        </div>
                    )}
                    {filteredTasks?.map((task) => (
                        <li
                            key={task._id}
                            onClick={() =>
                                handleTaskClick(task?._id, task?.workspace)
                            }
                            className="bg-[#fff] text-[14px] flex justify-between cursor-pointer shadow-md p-4 my-5"
                        >
                            <div className="flex gap-2">
                                <h1>{task?.title}</h1>
                            </div>
                            <p className="pt-3 flex transition-all duration-500 items-center gap-2">
                                <FaStopwatch className="text-green-500" />{" "}
                                <span className="text-xs pt-0.5 ">
                                    {task?.dates?.dueDate}
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            {!(filteredTasks?.length > 0 || suggestions?.length > 0) && (
                <div className="absolute top-72 flex justify-center  items-start opacity-40">
                    <PaperPieces />
                </div>
            )}

            <div className="flex justify-end transition-all duration-500  absolute bottom-0 w-full left-0 bg-[white] p-2 h-[80px] items-end mt-auto">
                <span
                    onClick={() => {
                        setFilteredTasks([]);
                        setSelectedValues({
                            status: "",
                            priority: "",
                            workspaceId: "",
                            dueDate: "",
                            tags: [],
                        });
                        setClickBaseFilterTaskId("");
                        setSearchQueryFromHistory("");
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
