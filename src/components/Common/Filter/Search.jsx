import { AuthContext } from "@/Providers/AuthProviders";
import { globalContext } from "@/Providers/globalContext";
import useAxios from "@/hooks/useAxios";
import React, { useContext, useEffect, useState } from "react";

const Search = ({ handleInputChange, isFilterClear, openFilter }) => {
  const [shouldHitApi, setShouldHitApi] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")
  const xios = useAxios()
  const {user} = useContext(AuthContext)
  const {handleUserHistory} = useContext(globalContext)

  useEffect(()=> {

    const history = {
      userEmail:user?.email,
      searchQuery,
      timeStamp:new Date()
    }

    if(shouldHitApi && searchQuery !==""){
      setSearchQuery("")
      console.log(history)
      xios.post("/api/filter-tasks/search-history",history)
      .then((res) => {
        handleUserHistory(res?.data)
      })
      .catch(error => { 
        // Handle errors if necessary
        console.error("Error:", error);
      });
    }

  },[searchQuery,shouldHitApi])




  return (
    <div>
      <label
        htmlFor="search-task"
        className="text-sm mt-3 font-medium text-gray-500 block"
      >
        Filter your tasks
      </label>
      <input
        type="text"
        name="product-name"
        id="search-task"
        className="block mb-3 w-full p-2.5 placeholder:text-[#808080a6] bg-gray-50 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:border-none focus-within:outline-none focus:outline-none shadow-sm"
        placeholder="Name, Email, Skills, or Location"
        required
        value={searchQuery}
        onChange={(e) =>{ 
          setSearchQuery(e.target.value)
          handleInputChange(e.target.value)}
        }
        onFocus={()=> setShouldHitApi(false)}
        onBlur={()=> setShouldHitApi(true)}
        autoFocus // Autofocus on page load
      />
    </div>
  );
};

export default Search;