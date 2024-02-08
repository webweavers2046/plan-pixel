import { GoPlus } from "react-icons/go";
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/shakil.jpg";
import Image from "next/image";

const Meetings = () => {
    const meetings = [
        {
            meetingName: "Monthly Team Meeting",
            date: "12 Apr 2024",
            time: "12:00 PM",
        },
        {
            meetingName: "Project Performance Review",
            date: "15 May 2024",
            time: "02:30 PM",
        },
        {
            meetingName: "Annual Client Presentation",
            date: "20 Jun 2024",
            time: "09:15 AM",
        },
    ];

    return (
        <div className="">
            <div className="flex items-center justify-between">
                <h4 className="text-xl">Team Meeting</h4>
                <button className="text-2xl">
                    <GoPlus />
                </button>
            </div>
            <div className=" mt-6">
                {meetings.map((meeting, idx) => (
                    <div
                        className={`p-4 rounded-md ${
                            idx === 0 &&
                            "bg-[#FBBC05]/25 border-[#FBBC05] border-2"
                        } my-2 flex items-center justify-between`}
                        key={idx}
                    >
                        <div className="">
                            <h3 className="text-lg font-semibold">
                                {meeting.meetingName}
                            </h3>
                            <div className="flex text-xs mt-0.5 gap-3 opacity-60">
                                <p className="">{meeting.date},</p>
                                <p className="">{meeting.time}</p>
                            </div>
                        </div>
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meetings;
