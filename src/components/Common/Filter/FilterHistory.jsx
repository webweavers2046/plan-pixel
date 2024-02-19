import { useEffect, useRef } from "react";

const FilterHistory = ({ setIsOpenFilterHistory, isOpenFilterHistory }) => {
  const historyRef = useRef();

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
      <div ref={historyRef} className="h-full bg-white border-b-2 border p-4">
        <div className="bg-rose-50 w-32 h-32 filter  blur-3xl top-0 absolute left-0"></div>
        <h1 className="text-[20px] font-bold">History</h1>
      </div>
    </div>
  );
};

export default FilterHistory;