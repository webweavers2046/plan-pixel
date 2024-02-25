import { Fragment, useEffect, useRef, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import useGlobalContext from "@/hooks/useGlobalContext";
import { CiSearch } from "react-icons/ci";


export default function AutoCompleteSearch({handleSearchArchiveTasks}) {

  const {archivedTasks} = useGlobalContext()
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");


useEffect(()=>{

  handleSearchArchiveTasks(query)

},[query])

  const filteredTasks =
    query === ""
      ? archivedTasks
      : archivedTasks.filter((task) =>
          task?.taskName
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const inputRef = useRef(null);
  const [isKeyPress,setIsKeyPress] = useState(false)

  // Use useEffect to focus on the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Add an event listener for the specific key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is the one you want (e.g., 's' key)
      if (event.key === "s") {
        // Show and focus on the search bar
        setIsKeyPress(true)
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }

      setIsKeyPress(false)
    };

    // Attach the event listener to the document
    document.addEventListener("keypress", handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{zIndex:999}} className={`absolute top-[55px] md:top-[36px] left-1 mt-4 md:mt-2 md:left-[20%] w-[90%]  sm:w-[60%] md:w-96 bg-white  transition-all duration-500`}>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className={` flex items-center px-2 relative cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`}>
            <CiSearch className="text-[20px]"/>
            <Combobox.Input
              ref={inputRef} // Attach the ref to the input
               placeholder="Search your tasks.."
              className={`${isKeyPress?"hidden":"block"} border-none py-2 bg-transparent pr-10 text-sm leading-5 text-gray-900 focus:ring-0`}
              displayValue={(task) => task?.taskName}
              onChange={(event) => setQuery(event.target.value)}
            />

            <Combobox.Button className="absolute inset-y-0 z-50 right-0 flex items-center pr-2"></Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
            zIn
          >
            <Combobox.Options className="absolute mt-1 w-96 z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredTasks.length === 0 && query !== "" ? (
                <div className="relative cursor-default  z-50 select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <Combobox.Option
                    key={task?._id}
                    className={({ active }) =>
                      `relative cursor-default z-50 select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#F9FBF9] text-black" : "text-gray-900"
                      }`
                    }
                    value={task}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {task?.taskName}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
