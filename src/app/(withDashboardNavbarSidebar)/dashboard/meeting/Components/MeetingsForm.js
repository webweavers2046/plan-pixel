"use client";

import { useForm } from "react-hook-form";

const MeetingsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const newTask = {
      title: data?.title ? data?.title : "New Task",
      description: data?.description
        ? data?.description
        : "Thanks for creating new task. We are happy that you are enjoying our features . ",
      dates: {
        startDate: data?.startDate,
        dueDate: data?.dueDate,
      },
      priority: data?.priority,
      status: "upcoming",
      creator: user?.email,
      members: [],
      comments: [],
      workspace: id,
      position: 0,
      doingTimeStamp: "",
      updatedAt: "",
      lastModifiedBy: "",
      tags: [],
    };

    handleCreateTask(newTask, setOpenModal, id);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" mt-8 px-4">
        {/* form info */}
        <div className=" grid grid-cols-1 gap-5">
          {/* task name */}
          <div className="">
            <h4 className="text-sm font-semibold">
              Agenda{" "}
              {errors.title && (
                <span className="text-red-500 text-xs ms-2">
                  (Task title is required)
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
          {/* Priority */}
          <div className="flex gap-x-2 justify-between ">
            <div className="w-full">
              <h4 className="text-sm font-semibold">
                Date{" "}
                {errors.startDate && (
                  <span className="text-red-500 text-xs ms-2">
                    Date is required
                  </span>
                )}
              </h4>
              <input
                defaultValue={"01/32/2023"}
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
                {errors.startDate && (
                  <span className="text-red-500 text-xs ms-2">
                    Time is required
                  </span>
                )}
              </h4>
              <input
                defaultValue={"01/32/2023"}
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
              <h4 className="text-sm font-semibold">
                Platform{" "}
                {errors.priority && (
                  <span className="text-red-500">Priority is required</span>
                )}
              </h4>
              <select
                placeholder="Select"
                name="platfom"
                defaultValue={"Google Meet"}
                className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                {...register("platfom", { required: true })}
              >
                <option value="Low">Google Meet</option>
                <option value="Medium">Zoom</option>
                <option value="High">Ghum</option>
              </select>
            </div>
          </div>
        </div>
        <div>
            
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
