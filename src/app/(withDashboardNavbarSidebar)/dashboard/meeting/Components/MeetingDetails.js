import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxios from "@/hooks/useAxios";
import useAllMeetings from "@/hooks/useAllMeetings";
import { useState } from "react";

const MeetingDetails = ({
  singleMeeting,
  meetings,
  setSingleMeeting,
  refetch,
}) => {
  const xios = useAxios();
  console.log(singleMeeting);
  const [hello, setHello] = useState(true);

  // const { data, refetch } = useAllMeetings();
  const { activeWorkspaceMembers, activeWorkspace } = useGlobalContext();
  // console.log(activeWorkspace?.title);
  const handleMeetingDelete = (id) => {
    // console.log("delete id", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        xios.delete(`/api/meetings/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("Meeting deleted", { position: "top-center" });

            setSingleMeeting();
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="">
      <h3 className="text-xl font-semibold opacity-45">Meeting Details</h3>
      <div className="">
        <div className="pt-6">
          <h2 className="md:text-3xl lg:text-5xl font-semibold">
            {activeWorkspace?.title ===
              singleMeeting?.newMeeting?.activeWorkspace?.title &&
              singleMeeting?.newMeeting?.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-x-2 lg:gap-6 my-10">
          <div className="flex lg:gap-x-3 gap-x-2 text-left items-center bg-gray-100 rounded-lg p-1 lg:py-3 lg:px-4">
            <div className="">
              <BsCalendarDate className="md:text-xl lg:text-2xl" />
            </div>
            <div className="">
              <p className="opacity-75">Date:</p>
              <h5 className="md:text-sm lg:text-lg font-semibold ">
                {activeWorkspace?.title ===
                  singleMeeting?.newMeeting?.activeWorkspace?.title &&
                  singleMeeting?.newMeeting?.date}
              </h5>
            </div>
          </div>
          <div className="flex lg:gap-x-3 gap-x-2 text-left items-center  bg-gray-100 rounded-lg p-1 lg:py-3 lg:px-4">
            <div className="">
              <MdOutlineAccessTime className="md:text-xl lg:text-2xl" />
            </div>
            <div className="">
              <p className="opacity-75 ">Time:</p>
              <h5 className="md:text-sm lg:text-lg font-semibold -mt-1">
                {activeWorkspace?.title ===
                  singleMeeting?.newMeeting?.activeWorkspace?.title &&
                  singleMeeting?.newMeeting?.time}
              </h5>
            </div>
          </div>
          <div className="flex lg:gap-x-3 gap-x-2 text-left items-center bg-gray-100 rounded-lg  p-1 lg:py-3 lg:px-4">
            <div className="">
              <BiCurrentLocation className="md:text-xl lg:text-2xl" />
            </div>
            <div className="">
              <p className="opacity-75 ">Platform:</p>
              <h5 className="md:text-sm lg:text-lg font-semibold -mt-1">
                {activeWorkspace?.title ===
                  singleMeeting?.newMeeting?.activeWorkspace?.title &&
                  singleMeeting?.newMeeting?.platform}
              </h5>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gray-100 rounded-lg px-1 lg:py-3 lg:px-4">
            <div className="">
              {/* <p className="opacity-75 mb-0 text">Join</p> */}
              <a
                className={`text-lg ${activeWorkspace?.title ===
                  singleMeeting?.newMeeting?.activeWorkspace?.title && "text-green-400 font-bold md:text-2xl"}`}
                target="_blank"
                href={
                  activeWorkspace?.title ===
                    singleMeeting?.newMeeting?.activeWorkspace?.title &&
                  singleMeeting?.newMeeting?.link
                }
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
        <div className="border-y-2">
          <div className="">
            {activeWorkspace?.title ===
              singleMeeting?.newMeeting?.activeWorkspace?.title &&
              singleMeeting?.newMeeting?.member?.map((member, idx) => (
                <div
                  className="flex items-center justify-between py-4 px-10 border-b"
                  key={idx}
                >
                  <div className="flex items-center gap-3">
                    <div className="">
                      <Image
                        width={40}
                        height={40}
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src={member.image}
                        alt=""
                      />
                    </div>
                    <h2 className="text-lg font-semibold">{member.name}</h2>
                  </div>
                  <div className="opacity-40 font-semibold">
                    <p className="">{member.email}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="pt-6 text-end">
          {activeWorkspace?.title ===
          singleMeeting?.newMeeting?.activeWorkspace?.title ? (
            <button
              onClick={() => handleMeetingDelete(singleMeeting?._id)}
              className="px-8 py-4 bg-rose-600 rounded-lg text-white"
            >
              Delete Meeting
            </button>
          ) : (
            <button className="px-8 py-4 bg-gray-400 rounded-lg text-white">
              Delete Meeting
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
