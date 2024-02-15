import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PaperPieces from "./paperCutPiece";
import toast from "react-hot-toast";
import useGlobalContext from "@/hooks/useGlobalContext";

const MiniModal = ({isCreateWokspace, handleClose,setIsCreateWorkSpace, handleCreateWorkspace,setDropdownOpen }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "") {
      return toast.error("Please add title and description");
    }

    // Pass the values to the parent component
    handleCreateWorkspace(name, description);
    setIsCreateWorkSpace(false)
    setDropdownOpen(false)
    // Reset the form values
    setName("");
    setDescription("");
  };

  return (
    <div className={` ${isCreateWokspace?"visible opacity-100":"invisible opacity-0"} transition-all duration-300`}>
      <>
        <div className="flex items-center ">
          <div className="bg-white shadow-lg h-[200px] rounded-sm p-4 z-40 absolute left-[270px] w-[255px] overflow-hidden top-28 mx-auto">
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
            <div className="flex relative gap-2 justify-between">
              <button
                // type="button"
                onClick={handleClose}
                className="rounded-full z-50 cursor-pointer flex items-center justify-center bg-white p-3 text-primary shadow-sm"
              >
                <IoIosCloseCircleOutline className="text-[24px] cursor-pointer text-red-500" />
              </button>
              <button
                onClick={handleSubmit}
                className="rounded-full flex items-center justify-center bg-white p-3 text-primary shadow-sm"
              >
                <TiTick className="text-[28px]" />
              </button>
              <PaperPieces />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MiniModal;
