"use client";
import useAllMeetings from "@/hooks/useAllMeetings";
import MeetingDetails from "./Components/MeetingDetails";
import { useState } from "react";
import MeetingsForm from "./Components/MeetingsForm";
import { GoPlus } from "react-icons/go";
import { Modal } from "flowbite-react";
import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";

const Meeting = () => {
  const [openModal, setOpenModal] = useState(false);
  // const { data: allMeetings, refetch } = useAllMeetings();
  const { data: allMeetings, refetch, isLoading } = useAllMeetings();
  const [singleMeeting, setSingleMeeting] = useState([]);
  
  console.log(allMeetings);
  const { activeWorkspaceMembers, activeWorkspace } = useGlobalContext();

  console.log(activeWorkspace.title);
  // console.log(singleMeeting, "single meetings");

  const showDetails = (id, meeting) => {
  
    const remainingMeetings = allMeetings.find((meeting) => meeting._id === id);
    activeWorkspace.title === meeting.newMeeting.activeWorkspace.title
      ? setSingleMeeting(remainingMeetings)
      : setSingleMeeting([]);
  };
  

  return (
    <section className="px-4">
      <div className="grid grid-cols-7 gap-x-6 ">
        <div className="col-span-2 border-2 rounded-lg p-6 h-full ">
          <div className="">
            <Modal show={openModal}>
              {/* <Modal.Header className="text-3xl ">Schedule Meeting</Modal.Header> */}
              <Modal.Body>
                <div className="flex justify-end ">
                  <div
                    className="cursor-pointer hover:bg-gray-100 rounded-sm p-1 transition duration-200"
                    onClick={() => {
                      setOpenModal(false), refetch();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M10.5578 10.7232L10.6354 10.636C10.998 10.2734 11.5699 10.2475 11.9625 10.5583L12.0497 10.636L16.9994 15.5858L21.9492 10.636C22.3118 10.2734 22.8836 10.2475 23.2762 10.5583L23.3634 10.636C23.726 10.9986 23.7519 11.5705 23.4411 11.9631L23.3634 12.0503L18.4136 17L23.3634 21.9497C23.726 22.3124 23.7519 22.8842 23.4411 23.2768L23.3634 23.364C23.0008 23.7266 22.4289 23.7525 22.0363 23.4417L21.9492 23.364L16.9994 18.4142L12.0497 23.364C11.687 23.7266 11.1152 23.7525 10.7227 23.4417L10.6354 23.364C10.2728 23.0014 10.2469 22.4295 10.5577 22.0369L10.6354 21.9497L15.5852 17L10.6354 12.0503C10.2728 11.6876 10.2469 11.1158 10.5578 10.7232Z"
                        fill="#212121"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <h1 className="text-3xl font-semibold text-center mt-5">
                    Schedule Meeting
                  </h1>
                  <MeetingsForm
                    meeting={allMeetings}
                    setOpenModal={setOpenModal}
                    refetch={refetch}
                  />
                </div>
              </Modal.Body>
            </Modal>
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold">Team Meeting</h4>
              {/* add new meeting  */}
              <button className="text-2xl" onClick={() => setOpenModal(true)}>
                <GoPlus />
              </button>
            </div>

            <div className=" mt-6">
              {allMeetings?.map((meeting, idx) => (

                
                <div
                  className={`p-4 rounded-md cursor-pointer hover:bg-[#FBBC05]/25 transition duration-300  my-2 flex items-center justify-between shadow-md`}
                  key={idx}
                  onClick={() => {
                    showDetails(meeting._id, meeting);
                  }}
                >
                  <div className="">
                    <h3 className="text-lg font-semibold">
                      {meeting?.newMeeting?.title}
                    </h3>
                    <div className="flex text-xs mt-0.5 gap-3 opacity-60">
                      <p className="">{meeting?.newMeeting?.date},</p>
                      <p className="">{meeting?.newMeeting?.time}</p>
                    </div>
                  </div>
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    {meeting?.newMeeting?.member?.map((member) => (
                      <div>
                        <Image
                          width={30}
                          height={30}
                          className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                          src={member.image}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-5 border-2 rounded-lg p-6 h-full">
          <MeetingDetails
            meetings={allMeetings}
            singleMeeting={singleMeeting}
            setSingleMeeting={setSingleMeeting}
            refetch={refetch}
          />
        </div>
      </div>
    </section>
  );
};

export default Meeting;
