import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { LuTimerReset } from "react-icons/lu";
import { BiCurrentLocation } from "react-icons/bi";
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import Image from "next/image";

const MeetingDetails = () => {
    const meeting = {
        meetingName: "Monthly Team Strategy Meeting",
        date: "12 Apr 2024",
        time: "12:00 PM",
        duration: "1 hour",
        platform: "Google Meet",
        members: [
            {
                name: "John Doe",
                email: "john.doe@example.com",
                image: member01Img,
            },
            {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                image: member02Img,
            },
            {
                name: "Michael Johnson",
                email: "michael.johnson@example.com",
                image: member03Img,
            },
        ],
    };

    return (
        <div className="">
            <h3 className="text-xl font-semibold opacity-45">
                Meeting Details
            </h3>
            <div className="">
                <div className="pt-6">
                    <h2 className="text-5xl font-semibold">
                        {meeting.meetingName}
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-6 my-10">
                    <div className="flex gap-5 items-center justify-center bg-gray-100 rounded-lg py-3 px-4">
                        <div className="">
                            <BsCalendarDate className="text-3xl" />
                        </div>
                        <div className="">
                            <p className="opacity-75 mb-0">Date:</p>
                            <h5 className="text-xl font-semibold -mt-1">
                                {meeting.date}
                            </h5>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center justify-center bg-gray-100 rounded-lg py-3 px-4">
                        <div className="">
                            <MdOutlineAccessTime className="text-3xl" />
                        </div>
                        <div className="">
                            <p className="opacity-75 mb-0">Time:</p>
                            <h5 className="text-xl font-semibold -mt-1">
                                {meeting.date}
                            </h5>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center justify-center bg-gray-100 rounded-lg py-3 px-4">
                        <div className="">
                            <LuTimerReset className="text-3xl" />
                        </div>
                        <div className="">
                            <p className="opacity-75 mb-0">Duration:</p>
                            <h5 className="text-xl font-semibold -mt-1">
                                {meeting.duration}
                            </h5>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center justify-center bg-gray-100 rounded-lg py-3 px-4">
                        <div className="">
                            <BiCurrentLocation className="text-3xl" />
                        </div>
                        <div className="">
                            <p className="opacity-75 mb-0">Platform:</p>
                            <h5 className="text-xl font-semibold -mt-1">
                                {meeting.platform}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="border-y-2">
                    <div className="">
                        {meeting.members.map((member, idx) => (
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
                                    <h2 className="text-lg font-semibold">
                                        {member.name}
                                    </h2>
                                </div>
                                <div className="opacity-40 font-semibold">
                                    <p className="">{member.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-6 text-end">
                    <button className="px-8 py-4 bg-rose-600 rounded-lg text-white">
                        Delete Meeting
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MeetingDetails;
