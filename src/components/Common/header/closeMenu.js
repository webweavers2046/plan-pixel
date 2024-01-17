"use client"
import { IoCloseOutline } from "react-icons/io5";

const CloseMenu = ({handleToggleMenu}) => {
  return (
    <>
      <button
        onClick={() => handleToggleMenu()}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex fixed top-4 right-1 sm:right-3 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-black  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700  z-50"
        aria-controls="navbar-default"
        aria-expanded="false">
        <IoCloseOutline className="text-2xl border border-[#747474] rounded-full text-[red]" />
      </button>
    </>
  );
};

export default CloseMenu;
