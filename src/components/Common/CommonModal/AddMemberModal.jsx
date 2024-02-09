"use client";

import PaperPieces from "./paperCutPiece";

export function AddMemberModal({ WillAddMember,handleAddMember }) {

  return (
    <div
      className={`${
        WillAddMember ? "grid" : "hidden"
      } bg-[white]  px-1 rounded-lg shadow-lg absolute top-20 -right-[530px] w-80 h-96 items-center gap-4`}
    >
      <Component handleAddMember={handleAddMember}/>
      <div className="mt-20  relative h-1/4 ">
        <PaperPieces />
      </div>
    </div>
  );
}






import { Card } from "flowbite-react";
import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";


function Component({handleAddMember}) {
    const {clickedWorkspaceId} = useGlobalContext()
  return (
    <Card className="max-w-sm mt-2">
      <div className="mb-4 flex gap-2 absolute top-0 pt-8 items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Add members{" "}
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          See all members
        </a>
      </div>
      <div className="flow-root pt-6">
        <ul className="divide-y ">
          {userArray?.map((user) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Neil image"
                    height="32"
                    src="/images/people/profile-picture-1.jpg"
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
                <div onClick={()=> handleAddMember(clickedWorkspaceId,user?.email)} className="inline-flex items-center text-base text-gray-900 dark:text-white">
                +Add
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
