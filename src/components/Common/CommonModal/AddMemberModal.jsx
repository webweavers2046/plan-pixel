"use client";

import PaperPieces from "./paperCutPiece";
import { TiTick } from "react-icons/ti";

export function AddMemberModal({
  WillAddMember,
  handleAddMember,
  setWillAddMember,
}) {
  return (
    <div
      className={`transition-all duration-200 ${
        WillAddMember ? "visible opacity-100" : "invisible opacity-0"
      } bg-transparent  px-1 rounded-sm  absolute top-20 -right-[530px]  h-96 items-center gap-4`}
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
import { useContext, useState } from "react";
import SearchMember from "../Search/SearchMember";
import useAxios from "@/hooks/useAxios";
import TeamMembers from "@/app/(withDashboardNavbarSidebar)/dashboard/members/Components/TeamMembers";
import AssignColorAndStyle from "./AsignAlphabelColor";
import { ablyContext } from "@/components/ably/AblyProvider";

function MemberList({ handleAddMember, setWillAddMember }) {
  const { clickedWorkspaceId,defaultActiveWorkspace } = useGlobalContext();
  const { activeWorkspace } = useContext(ablyContext);
  const ClickBasedActiveWorkspace = activeWorkspace?.propertyToCheck || defaultActiveWorkspace

  const xios = useAxios();
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (searchQuery) => {
    const response = await xios.get(`/api/members/search?query=${searchQuery}`);
    setSuggestions(response.data);
    if (searchQuery === "") {
      setSuggestions([]);
    }
  };




  return (
    <Card className=" mt-2 z-50 fixed w-[370px] right-0 top-0 overflow-auto ">
      <div className="mb-4 flex gap-2  justify-between">
        <h5 className="text-xl font-serif font-semibold leading-none text-gray-900">
          Add members{" "}
        </h5>
        <a href="#" className="text-sm  text-primary ml-20 ">
          See all
        </a>
        <button
          // close the add memeber list
          onClick={() => setWillAddMember(false)}
          className="rounded-full z-50 cursor-pointer flex items-center justify-center bg-white p-3 text-primary "
        >
          <IoIosCloseCircleOutline className="text-[24px] absolute top-5 right-5 cursor-pointer text-red-500" />
        </button>
      </div>

      {/* Your search input to find the members to add */}
      <SearchMember handleInputChange={handleInputChange} />

      <ul className="divide-y ">
        {suggestions?.map((user) => {
          const isMemberAlreadyExist = ClickBasedActiveWorkspace?.members?.includes(user?.email)
          return <li key={user._id} className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <AssignColorAndStyle user={user} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {user?.name}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {user?.email}
              </p>
            </div>
            {!isMemberAlreadyExist?
              <div
                onClick={() =>
                  handleAddMember(clickedWorkspaceId, user?.email, user?.name)
                }
                className={`text-[13px] inline-flex cursor-pointer items-center ${
                  isMemberAlreadyExist
                    ? "text-red-600 cursor-not-allowed"
                    : "text-gray-900"
                }`}
                // Disable the button if the user is already added
                disabled={isMemberAlreadyExist}
              >
                +Add
              </div>:
              <div className="text-[#50B577]">
              <TiTick />
            </div>
            

            }
          </div>
        </li>
        })}
      </ul>

      <ul className="h-screen bg-transparent relative">
        <div className="absolute top-32">
          {/* Search */}
          <PaperPieces />
        </div>
      </ul>

      <TeamMembers />
      <div className="pt-14 relative overflow-hidden">
        <PaperPieces />
      </div>
      {suggestions?.length <= 0 && (
        <div className="absolute -z-20 top-[280px]">
          <Image
            className=" opacity-50 mx-auto w-32 h-32   "
            src={"https://i.ibb.co/mtGpTfj/icons8-search-250.png"}
            height={100}
            width={100}
          />
          <p className="text-center text-gray-500">
            No matching members found.(name,email,skills or location)
          </p>
        </div>
      )}
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
