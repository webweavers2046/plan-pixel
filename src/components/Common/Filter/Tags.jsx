import React, { useState } from "react";

const Tags = ({ updateTags, allTags }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleDropdownChange = (e) => {
    const selectedTag = e.target.value;

    if (selectedTags.includes(selectedTag)) {
      // Remove tag if already selected
      const updatedTags = selectedTags.filter((tag) => tag !== selectedTag);
      setSelectedTags(updatedTags);
    } else {
      // Add tag if not selected
      setSelectedTags([...selectedTags, selectedTag]);
    }

    updateTags(selectedTags); // Lift state to the parent component
  };

  return (
    <div className="py-3 z-5">
      <label
        htmlFor="tagsDropdown"
        className="text-sm font-medium text-gray-900 block mb-2"
      >
        Select Tags:
      </label>
      <select
        id="tagsDropdown"
        className="w-48 p-2 border border-gray-300 rounded-md"
        multiple
        onChange={handleDropdownChange}
        value={selectedTags}
      >
        {allTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Tags;
