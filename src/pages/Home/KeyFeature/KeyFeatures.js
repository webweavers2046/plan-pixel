"use client";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";
// import taskManagementArray, { collaborationArray, customizationArray } from "./keyFeatureData";
// import style from "./key.module.css"
import ArrowBoldSign from "./ArrowBoldSign";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import GradientBg from "@/components/Common/gradientBg/GradientBg";


const taskManagementArray = [
  { id: 1, text: "Intuitive Task Creation and Management" },
  { id: 2, text: "Experience Effortless Task Management with our Intuitive Interface." },
  { id: 3, text: "Seamlessly Organize Your Tasks for Enhanced Productivity" },
  { id: 4, text: "Unlock Efficiency with our Streamlined Task Creation Process" }
];

const collaborationArray = [
  { id: 5, text: "Real-time Collaboration and Communication" },
  { id: 6, text: "Enhance Team Collaboration with Instant Communication Features." },
  { id: 7, text: "Create an Instant Communication Hub for Seamless Teamwork." },
  { id: 8, text: "Achieve Real-Time Collaboration for Increased Project Efficiency." }
];

export const customizationArray = [
  { id: 9, text: "Customizable Workflows and Boards." },
  { id: 10, text: "Tailor Workflows to Fit Your Project's Unique Requirements." },
  { id: 11, text: "Flexible Project Management Boards for Your Changing Needs." },
  { id: 12, text: "Create Your Ideal Workflow with Customizable Features." }
];


const KeyFeatures = () => {
  return (
    <div className="px-3 relative z-20 overflow-hidden">
      <GradientBg/>
      <SectionTitle title={"Our Key Features."} />
      <div className="container mx-auto">
        <div>
          {/* Task management (smaller card) */}
          <div className="relative bg-[white] shadow-md p-3 text-[11px] sm:text-[15px] ml-0 md:text-[14px] lg:text-[16px] mx-3 md:ml-24 lg:ml-32 mb-7 w-full md:w-[600px] rounded-md">
            <ol className={`space-y-1`}>
              <ArrowBoldSign leftSpace={"-left-[1020px]"} />
              {taskManagementArray?.map((task) => (
                <span className="flex items-center gap-2" key={task.id}>
                  <IoMdCheckmarkCircleOutline />
                  <li className="my-[2px]">{task.text}</li>
                </span>
              ))}
            </ol>
          </div>

          {/* Collaboration (medium card) */}
          <div className="bg-gradient-to-r text-[11px] sm:text-[15px] from-[#5212B9] to-[#7525F7] text-[#edecec] relative shadow-md p-3 ml-0 md:ml-36 lg:ml-72 mb-7 w-full md:w-[600px] md:text-[14px] lg:text-[16px] rounded-md ">
            <ol className="space-y-1">
              <ArrowBoldSign leftSpace={"-left-[1020px]"} />
              {collaborationArray?.map((task) => (
              <span className="flex gap-2" key={task.id}>
                  <IoMdCheckmarkCircle className="text-white mt-1 md:w-5 md:h-5"/>
                  <li className="my-[2px]">{task.text}</li>
                </span>
              ))}
            </ol>
          </div>

          {/* Customization (larger card) */}
          <div className="bg-white relative shadow-md p-3 mx-3 ml-0 text-[11px] sm:text-[15px] lg:text-[16px] md:ml-48  lg:ml-[420px] mb-7 w-full md:w-[600px] rounded-md ">
            <ol className="space-y-1">
              <ArrowBoldSign leftSpace={"-left-[1020px]"} />
              {customizationArray?.map((task) => (
                <span className="flex items-center gap-2" key={task.id}>
                <IoMdCheckmarkCircleOutline />
                <li className="my-[2px]">{task.text}</li>
              </span>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
