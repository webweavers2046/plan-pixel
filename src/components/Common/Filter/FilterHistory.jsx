import { AuthContext } from "@/Providers/AuthProviders";
import { globalContext } from "@/Providers/globalContext";
import { useContext, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";


const FilterHistory = ({ setIsOpenFilterHistory, isOpenFilterHistory }) => {
  const historyRef = useRef();
  const {userSearchHistory,handleDeleteAllHistory,handleHistoryClick} = useContext(globalContext)
  // Close the history bar when click out of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (historyRef.current && !historyRef.current.contains(event.target)) {
        // if clicked out of history sidebar then close it
        setIsOpenFilterHistory(false);
      }
    };

    // Add event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpenFilterHistory]);






  return (
    <div
      ref={historyRef}
    >
      <div className=" bg-gradient-to-br relative h-screen from-[#eafff13a] to-[rgb(251,255,244)] py-3">
        <div className="flex justify-between border-b mb-3 items-center sticky top-0 h-11 px-3">
        <h1 className="text-[20px]  w-1/2 font-bold ">History</h1>
        <p className="text-rose-600 cursor-pointer" onClick={handleDeleteAllHistory}>Remove all</p>
        </div>
        <ul className="space-y-2">
          {
            userSearchHistory?.map(history =>(
              <div onClick={()=> handleHistoryClick(history?.searchQuery)} className={`cursor-pointer flex px-3 gap-1 bg-white py-3 relative items-center ${isOpenFilterHistory?"block translate-y-0":"hidden translate-y-4"} transition-transform ease-linear  duration-1000`}  key={history?._id}>
                <CiSearch className="text-[18px] text-gray-500"/>
              <li className="text-[16px] flex justify-between items-center w-full"> <p>{history?.searchQuery.length > 11?history.searchQuery.slice(0,12) + "..":history.searchQuery}</p><span className="text-[11px] text-gray-500"> {history?.timeStamp}</span>
              </li>
              </div>

              ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterHistory;