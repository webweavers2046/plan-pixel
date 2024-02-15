import Image from 'next/image';
import React from 'react';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { FaEquals, FaStopwatch } from 'react-icons/fa6';
import { MdDoubleArrow } from 'react-icons/md';
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/shakil.jpg";

const TaskCard = ({task}) => {
    return (
        <div
            className="mt-4 flex-1 bg-[#F9F9F9] shadow-md rounded-md py-8 px-4 text-black h-"
        >
            <div className=" flex items-center gap-2 justify-between">
                <h2 className="font-semibold text-lg">{task.title}</h2>
                
            </div>
            <p className="text-xs opacity-65 pt-4">{task.description}</p>
            <div className="flex justify-between items-center">
                <p className="pt-3 flex items-center gap-2">
                    <FaStopwatch className="text-green-500" />{" "}
                    <span className="text-xs pt-0.5 ">
                        20 Jan 24 - 25 Apr 24
                    </span>
                </p>
                <p className="pt-3 flex items-center gap-2">
                    <span className="text-sm pt-0.5">{task.priority}</span>
                    {task?.priority == "High" ? (
                        <MdDoubleArrow className="-rotate-90 text-red-500" />
                    ) : task?.priority == "Low" ? (
                        <MdDoubleArrow className="rotate-90 text-[#93C648]" />
                    ) : (
                        <FaEquals className="text-red-500" />
                    )}
                </p>
            </div>
            <hr className="mt-5 bg-black/15 h-[2px]" />
            <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                    <Image
                        width={30}
                        height={30}
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src={member01Img}
                        alt=""
                    />
                    <Image
                        width={30}
                        height={30}
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src={member02Img}
                        alt=""
                    />
                    <Image
                        width={30}
                        height={30}
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src={member03Img}
                        alt=""
                    />
                    <Image
                        width={30}
                        height={30}
                        className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                        src={member04Img}
                        alt=""
                    />
                </div>
                <BiSolidMessageSquareDetail className="text-xl opacity-40" />
            </div>
        </div>
    );
};

export default TaskCard;