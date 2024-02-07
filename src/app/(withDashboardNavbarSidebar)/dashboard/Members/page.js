"use client"
import React, { useState } from "react";
import TeamMembers from "./Components/TeamMembers";
import useGlobalTaskData from "@/hooks/useGlobalTaskData";
import { Dropdown } from "flowbite-react";
import TaskCard from "./Components/TaskCard";
import useFilterTasks from "@/hooks/useFilterTasks ";

const page = () => {
  const { alltasks } = useGlobalTaskData();
  const [filter, setFilter] = useState("to-do")
  const tasks = useFilterTasks(alltasks, filter);

  return (
    <div className="grid grid-cols-3">
      <div className="">
        <TeamMembers />
      </div>
      <div className="col-span-2 p-8">
      <div className="bg-[#F9F9F9] w-fit pr-6 py-3 rounded-md shadow-md">
      <Dropdown
                    className="bg-gray-100 py-2 px-3 rounded-lg mt-4"
                    inline
                    label={
                        <div className="text-start px-6">
                            <p className="text-xs opacity-55">workspace -</p>
                            <h2 className="">Workspace 01</h2>
                        </div>
                    }
                >
                    <Dropdown.Item>Workspace 02</Dropdown.Item>
                    <Dropdown.Item>Workspace 03</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <div className=" py-2 px-4 border-dashed border-black border rounded-lg">
                            <p className="">Add New Workspace</p>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
      </div>
        <div className="gap-4 flex flex-wrap">{
            tasks.map((task)=> (
                <TaskCard task={task} />
            ))
            }
        </div>
            
        
      </div>
    </div>
  );
};

export default page;
