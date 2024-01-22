"use client";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";
// import taskManagementArray, { collaborationArray, customizationArray } from "./keyFeatureData";
// import style from "./key.module.css"
import ArrowBoldSign from "./ArrowBoldSign";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import GradientBg from "@/components/Common/gradientBg/GradientBg";


const taskManagementArray = [
  { id: 2, text: "Experience Effortless Task Management with our Intuitive Interface." },
  { id: 3, text: "Seamlessly Organize Your Tasks for Enhanced Productivity" },
  { id: 4, text: "Unlock Efficiency with our Streamlined Task Creation Process" }
];

const collaborationArray = [
  { id: 6, text: "Enhance Team Collaboration with Instant Communication Features." },
  { id: 7, text: "Create an Instant Communication Hub for Seamless Teamwork." },
  { id: 8, text: "Achieve Real-Time Collaboration for Increased Project Efficiency." }
];

export const customizationArray = [
  { id: 10, text: "Tailor Workflows to Fit Your Project's Unique Requirements." },
  { id: 11, text: "Flexible Project Management Boards for Your Changing Needs." },
  { id: 12, text: "Create Your Ideal Workflow with Customizable Features." }
];

const KeyFeatures = () => {
  return (
    <div className="px-3 relative z-20 overflow-hidden">
      <GradientBg />
      <SectionTitle marginB={"32"} title={"Our Key Features."} />
      <div className="container mx-auto">
        <div>
          {/* Task management (smaller card) */}
          <div className="relative bg-[#99d3a9] shadow-md p-6 text-[11px] sm:text-[15px] ml-0 md:text-[14px] lg:text-[16px] mx-3 md:ml-24 lg:ml-32 mb-7 w-full md:w-[600px] rounded-md">
            <ArrowBoldSign leftSpace={"-left-[1020px]"} />
            <li className="text-[19px] font-bold list-none pl-3">Intuitive Task Creation and Management</li>
            <ol className={`mt-2 pl-4`}>
              {taskManagementArray?.map((task, index) => (
                <li key={task.id}>
                  <span >{index + 1}.</span> {task.text}
                </li>
              ))}
            </ol>
          </div>

          {/* Collaboration (medium card) */}
          <div className="bg-gradient-to-r text-[11px] sm:text-[15px] bg-[#c9e2a3] relative shadow-md p-6 ml-0 md:ml-36 lg:ml-72 mb-7 w-full md:w-[600px] md:text-[14px] lg:text-[16px] rounded-md">
            <ArrowBoldSign leftSpace={"-left-[1020px]"} />
            <li className="text-[19px] font-bold list-none pl-3">Real-time Collaboration and Communication</li>
            <ol className="mt-2 pl-4">
              {collaborationArray?.map((task, index) => (
                <li key={task.id} className=" text-black">
                  <span >{index + 1}.</span> {task.text}
                </li>
              ))}
            </ol>
          </div>

          {/* Customization (larger card) */}
          <div className="bg-[#fddd82] relative shadow-md p-6 mx-3 ml-0 text-[11px] sm:text-[15px] lg:text-[16px] md:ml-48 lg:ml-[420px] mb-7 w-full md:w-[600px] rounded-md">
            <ArrowBoldSign leftSpace={"-left-[1020px]"} />
            <li className="text-[19px] font-bold list-none pl-3">Customizable Workflows and Boards.</li>
            <ol className="mt-2 pl-4">
              {customizationArray?.map((task, index) => (
                <li key={task.id} className="my">
                  <span >{index + 1}.</span> {task.text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;