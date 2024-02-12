"use client";

import PaperPieces from "./paperCutPiece";


export function AddMemberModal({
  WillAddMember,
  handleAddMember,
  setWillAddMember,
}) {
  

  return (
    <div
      className={`transition-all duration-200 ${
        WillAddMember ? "visible opacity-100" : "invisible opacity-0"
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
import { useState } from "react";

function MemberList({ handleAddMember, setWillAddMember }) {
  const { clickedWorkspaceId } = useGlobalContext();
  const [workspaceName, setWorkspaceName] = useState("");

  return (
    <Card className=" mt-2 z-50 fixed right-0 top-0  ">
      <div className="mb-4 flex gap-2  justify-between">
        <h5 className="text-xl font-serif font-semibold leading-none text-gray-900">
          Add members{" "}
        </h5>
        <a href="#"
         className="text-sm  text-primary ml-20 ">
          See all 
        </a>
        <button
        // close the add memeber list
          onClick={()=> setWillAddMember(false)}
          className="rounded-full z-50 cursor-pointer flex items-center justify-center bg-white p-3 text-primary shadow-sm"
        >
          <IoIosCloseCircleOutline className="text-[24px] absolute top-5 right-5 cursor-pointer text-red-500" />
        </button>
      </div>

      {/* Searc memebers to add in workspace*/}
      <div>
      <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Search members
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="shadow-sm placeholder:text-[#808080a6] bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:border-none focus-within:outline-none focus:outline-none block w-full p-2.5"
                  placeholder="forhadhossain@gmail.com"
                  required
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                />
              </div>

           <ul className="h-screen bg-transparent relative">
            <div className="absolute top-32">
              {/* Search */}
            <PaperPieces/>

            </div>
           </ul>



      <div className="pt-14 relative overflow-hidden">
        <PaperPieces/>
      </div>
       
    </Card>
  );
}

const userArray = [
  {
    name: "Majharul Islam",
    email: "mdmazharulislam2046@gmail.com",
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
