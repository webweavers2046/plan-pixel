"use client";
import React, { useContext, useEffect, useState } from "react";
import TeamMembers from "./Components/TeamMembers";
import useDNDcontext from "@/hooks/useGlobalTaskData";
import { Dropdown } from "flowbite-react";
import TaskCard from "./Components/TaskCard";
import useFilterTasks from "@/hooks/useFilterTasks";
import { ablyContext } from "@/components/ably/AblyProvider";
import { globalContext } from "@/Providers/globalContext";

const page = () => {
  
  const { allWorkspaceTasks } = useContext(ablyContext);
  const { activeWorkspaceTasks } = useContext(globalContext);

  if (!activeWorkspaceTasks) return;

  const workspaceAllTasks =
    activeWorkspaceTasks.length > 0 ? activeWorkspaceTasks : allWorkspaceTasks;
    

  const [filter, setFilter] = useState("to-do");
  const tasks = useFilterTasks(workspaceAllTasks, filter);


  return (
    <div className="flex gap-x-5 p-5">
      <div className="">
        <TeamMembers />
      </div>
      <div className="shadow-sm rounded-xl p-6 max-h-dvh overscroll-auto border w-full">
        <div className="bg-gray-200 w-fit pr-6 py-3 rounded-md shadow-md">
          <Dropdown
            className="bg-gray-100 py-2 px-3 rounded-lg mt-4"
            inline
            label={
              <div className="text-start px-6 ">
                {/* <p className="text-xs opacity-55">workspace -</p> */}
                <h2 className="capitalize">{filter}</h2>
              </div>
            }
          >
            <Dropdown.Item
              className="hover:text-green-600 font-semibold"
              onClick={() => {
                setFilter("to-do");
                // setHeading('To-do')
              }}
            >
              To-do
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-green-600 font-semibold"
              onClick={() => {
                setFilter("doing");
                // setHeading('Doing')
              }}
            >
              Doing
            </Dropdown.Item>
            <Dropdown.Item
              className="hover:text-green-600 font-semibold"
              onClick={() => {
                setFilter("done");
                // setHeading('Done');
              }}
            >
              Done
            </Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown>
        </div>
        <div className="grid grid-cols-3 gap-x-4 flex-wrap">
          {tasks?.map((task, idx) => (
            <TaskCard key={idx} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
