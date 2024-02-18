import React, { useEffect, useRef } from "react";

const Search = ({ handleInputChange, isFilterClear,openFilter }) => {
  const searchInputRef = useRef();

  useEffect(() => {
    // Focus on the input field when the component mounts
    searchInputRef.current.focus();
  }, [openFilter]);

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
        // value={isFilterClear && "" }
        onChange={(e) => handleInputChange(e.target.value)}
        ref={searchInputRef} // Reference for focusing
        autoFocus // Autofocus on page load
      />
    </div>
  );
};

export default Search;