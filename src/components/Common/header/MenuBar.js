"use client";
import { IoCloseOutline } from "react-icons/io5";
const OpenMenu = ({ handleToggleMenu, isOpenMenu }) => {
  return (
    <>
      {!isOpenMenu && (
        // open menu button
        <button
          onClick={() => handleToggleMenu()}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <svg
            className="w-5 h-5 z-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default OpenMenu;
