"use client";

import useAxios from "@/hooks/useAxios";
import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const MeetingsForm = ({ setOpenModal, refetch, meeting }) => {
  const { activeWorkspaceMembers, activeWorkspace } = useGlobalContext();

  // console.log(activeWorkspace, "active workspace");
  const xios = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
   

    const newMeeting = {
      title: data?.title,
      date: data?.date,
      time: data?.time,
      link: data?.meetLink,
      platform: data?.platform,
      member: activeWorkspaceMembers,
      activeWorkspace,
    };
    // console.log(newMeeting);

    xios.post(`/api/meetings`, newMeeting).then((res) => {
      console.log(res.data.insertedId);
      if (res.data.insertedId) {
        // console.log(res.data.insertedId);
        toast.success("Meeting created", { position: "top-center" });
        // setOpenModal(false);
        refetch();
        reset();
        setOpenModal(false);
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" mt-8 px-4">
        {/* form info */}
        <div className=" grid grid-cols-1 gap-5">
          {/* agenda name */}
          <div className="">
            <h4 className="text-sm font-semibold">
              Agenda{" "}
              {errors.title && (
                <span className="text-red-500 text-xs ms-2">
                  (Meeting agenda is required)
                </span>
              )}
            </h4>
            <input
              type="text"
              placeholder="Please set your agenda"
              {...register("title", { required: true })}
              name="title"
              className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
              id=""
            />
          </div>
          {/* Date */}
          <div className="flex gap-x-2 justify-between ">
            <div className="w-full">
              <h4 className="text-sm font-semibold">
                Date{" "}
                {errors.date && (
                  <span className="text-red-500 text-xs ms-2">
                    (Date is required)
                  </span>
                )}
              </h4>
              <input
                type="date"
                {...register("date", {
                  required: true,
                })}
                name="date"
                className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                id=""
              />
            </div>
            <div className="w-full">
              <h4 className="text-sm font-semibold">
                Time{" "}
                {errors.time && (
                  <span className="text-red-500 text-xs ms-2">
                    (Time is required)
                  </span>
                )}
              </h4>
              <input
                type="time"
                {...register("time", {
                  required: true,
                })}
                name="time"
                className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                id=""
              />
            </div>

            <div className="w-full">
              <h4 className="text-sm font-semibold">Platform </h4>

              <input
                
                defaultValue={"Google Meet"}
                // value={"Google Meet"}
                type="text"
                {...register("platform", {
                  required: true,
                })}
                name="platform"
                className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                id=""
              />
            </div>
          </div>
          <div className="">
            <h4 className="text-sm font-semibold">
              Meet Link{" "}
              {errors.meetLink && (
                <span className="text-red-500 text-xs ms-2">
                  (Meeting link is required)
                </span>
              )}
            </h4>
            <input
              type="text"
              placeholder="Please provide your meeting link"
              {...register("meetLink", { required: true })}
              name="meetLink"
              className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
              id=""
            />
          </div>
        </div>
        <div>
          <h1 className="font-semibold mt-6 mb-3">Workspace Members</h1>
        </div>
        <div>
          {activeWorkspaceMembers.map((member) => (
            <>
              <div className="flex justify-between items-center py-2">
                <div className="flex gap-x-5">
                  <Image
                    width={30}
                    height={30}
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={member.image}
                    alt=""
                  />
                  <h1>{member.name}</h1>
                </div>
                <h4 className="opacity-70">{member.email}</h4>
              </div>
              <hr />
            </>
          ))}
        </div>
        {/* submit button */}
        <div className="flex justify-end items-end mt-4">
          <button className="bg-[#50B577] py-4 px-8 text-white rounded-lg">
            Set Meeting
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeetingsForm;
