import { AuthContext } from "@/Providers/AuthProviders";
import { globalContext } from "@/Providers/globalContext";
import useAxios from "@/hooks/useAxios";
import React, { useContext, useEffect, useRef, useState } from "react";

const Search = ({ handleInputChange, isFilterClear, openFilter }) => {
  const [shouldHitApi, setShouldHitApi] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")
  const xios = useAxios()
  const {user} = useContext(AuthContext)
  const {setIsUserHistoryStored,isUserHistoryStored,searchQueryFromHistory,setSearchQueryFromHistory} = useContext(globalContext)

  useEffect(() => {
    const timeStamp = new Date(); // Create a new Date object
    const formattedTimestamp = timeStamp.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false, // Use 24-hour format
    });
  
    const history = {
      userEmail: user?.email,
      searchQuery,
      sortByDate: new Date(),
      timeStamp: formattedTimestamp,
    };
  
  
    // if user clear all the filter then empty all the fields
    if(isFilterClear) {
      setSearchQuery("")
      setSearchQueryFromHistory("")
      
    }

    if(shouldHitApi && searchQuery !==""){
      setIsUserHistoryStored(!isUserHistoryStored)
      setSearchQuery("")
      setSearchQueryFromHistory("")
      xios.post("/api/filter-tasks/search-history",history)
      .then((res) => {
      })
      .catch(error => { 
        // Handle errors if necessary
        console.error("Error:", error);
      });
    }

  },[searchQuery,shouldHitApi,searchQueryFromHistory])

  
const x = useRef()

useEffect(()=>{
x.current.focus()

},[searchQueryFromHistory,isFilterClear])


  return (
    <div>
      <label
        htmlFor="search-task"
        className="mt-3 mb-1 text-[17px] font-medium text-gray-500 block"
      >
        Filter your tasks
      </label>
      <input
        type="text"



        ref={x}
        name="product-name"
        autoComplete="off"
        id="search-task"
        className="block mb-3 w-full p-2.5 placeholder:text-[#808080a6] bg-gray-50 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:border-none focus-within:outline-none focus:outline-none shadow-sm"
        placeholder="Name, Email, Skills, or Location"
        required
        value={searchQuery || searchQueryFromHistory}
        onChange={(e) =>{ 
          setSearchQuery(e.target.value)
          handleInputChange(e.target.value)}
        }
        onFocus={()=> setShouldHitApi(false)}
        onBlur={()=> setShouldHitApi(true)}
        autoFocus 
      />
    </div>
  );
};

export default Search;