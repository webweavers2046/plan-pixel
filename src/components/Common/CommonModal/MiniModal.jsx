// this file provider mini-modal for creating new workspace 

import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";

const MiniModal = ({
  isCreateWokspace,
  handleClose,
  setIsCreateWorkSpace,
  handleCreateWorkspace,
  setDropdownOpen,
  workspaceListRef
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if written nothing disallow creating workspace
    if (name === "" || description === "") {
      return toast.error("Please add title and description");
    }

    // Pass the values to the parent component
    handleCreateWorkspace(name, description);
    setIsCreateWorkSpace(false);
    setDropdownOpen(false);
    // Reset the form values
    setName("");
    setDescription("");
  };

  return (
    <div
      ref={workspaceListRef}
      className={` ${
        isCreateWokspace ? "visible opacity-100" : "invisible opacity-0"
      } transition-all duration-300`}
    >
      <>
        <div className="flex items-center ">
          <div className="bg-white shadow-lg h-[225px] rounded-sm p-4 z-50 absolute left-[270px] w-[255px] overflow-hidden top-28 mx-auto">
            {/* Title of th workspace */}
            <div className="flex w-full items-center mb-2">
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Workspace title"
                className="bg-[#ffff] shadow-sm flex-1 py-2 placeholder:text-gray-400 border-none focus-within:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* add the workspace description */}
            <div className="flex items-center mb-2">
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="2"
                className="border-none placeholder:text-gray focus:outline-none shadow-sm"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex relative gap-2 justify-between pt-3">
              <button
                onClick={handleClose}
                className="rounded-lg w-1/2 active:scale-90 transition-transform duration-300 z-50 cursor-pointer flex items-center justify-center bg-[#f6f6f692] p-3 shadow-sm"
              >
                <IoIosCloseCircleOutline className="text-[24px] cursor-pointer text-red-500" />
              </button>
              <button
                onClick={handleSubmit}
                className="rounded-lg w-1/2 active:scale-90 transition-transform duration-300 p-3 flex z-20 items-center justify-center bg-[#f6f6f692] text-primary shadow-sm"
              >
                <TiTick className="text-[28px]" />
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MiniModal;
