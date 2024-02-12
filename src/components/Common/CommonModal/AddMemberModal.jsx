"use client";

import PaperPieces from "./paperCutPiece";

export function AddMemberModal({
  WillAddMember,
  handleAddMember,
  setWillAddMember,
}) {
  return (
    <div
      className={`${
        WillAddMember ? "grid" : "hidden"
      } bg-transparent  px-1 rounded-lg  absolute top-20 -right-[530px]  h-96 items-center gap-4`}
    >
      {/* All the memebers list  */}
      <MemberList
        setWillAddMember={setWillAddMember}
        handleAddMember={handleAddMember}
      />

      <div className="mt-20  relative h-1/4 "></div>
    </div>
  );
}

import { Card } from "flowbite-react";
import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";
import { IoIosCloseCircleOutline } from "react-icons/io";

function MemberList({ handleAddMember, setWillAddMember }) {
  const { clickedWorkspaceId } = useGlobalContext();
  return (
    <Card className="max-w-sm mt-2 z-50 ">
      <div className="mb-4 flex gap-2 absolute top-0 pt-16 items-center justify-between">
        <h5 className="text-xl font-serif font-semibold leading-none text-gray-900">
          Add members{" "}
        </h5>
        <a href="#"
         className="text-sm  text-primary ml-20">
          See all 
        </a>
      </div>
      <div className="pt-14 relative overflow-hidden">
        <PaperPieces/>
        <ul className="divide-y ">
          {userArray?.map((user) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0 bg-gray-200 h-7 w-7 rounded-full">
                  <Image
                    alt="Neil image"
                    height="32"
                    src="/"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {user?.name}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
                <div
                  onClick={() =>
                    handleAddMember(clickedWorkspaceId, user?.email, user?.name)
                  }
                  className="text-[13px] inline-flex cursor-pointer items-center text-gray-900 "
                >
                  +Add
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
        <button
        // close the add memeber list
          onClick={()=> setWillAddMember(false)}
          className="rounded-full z-50 cursor-pointer flex items-center justify-center bg-white p-3 text-primary shadow-sm"
        >
          <IoIosCloseCircleOutline className="text-[24px] absolute top-5 right-5 cursor-pointer text-red-500" />
        </button>
    </Card>
  );
}

const userArray = [
  {
    name: "Majharul Islam",
    email: "majharul@gmail.com",
    profile: "path/to/profile3.jpg",
  },

  {
    name: "Anthesem Sajid",
    email: "sajid@gmail.com",
    profile: "path/to/profile3.jpg",
  },
  {
    name: "Forhad Hossain",
    email: "forhaddhossain@gmail.com",
    profile: "path/to/profile1.jpg",
  },
  //   {
  //     name: "Sabbir Hasan Sami",
  //     email: "Sami@gmail.com",
  //     profile: "path/to/profile2.jpg",
  //   },
  //   {
  //     name: "Rahim Ahmmed",
  //     email: "Rahim@gmail.com",
  //     profile: "path/to/profile3.jpg",
  //   },
];
