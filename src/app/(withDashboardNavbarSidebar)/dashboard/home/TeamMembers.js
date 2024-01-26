"use client";

import Image from "next/image";
import memberImg from "@/assets/team-members/member.png";
import MassageIcon from "@/assets/dashboard/Message.svg";
import { useState } from "react";
import SendMessageModal from "../Components/SendMessageModal";

const TeamMembers = () => {
    return (
        <div className="shadow-md rounded-xl p-6 max-h-dvh overscroll-auto">
            <h1 className=" text-2xl font-bold p-4">Team Member</h1>
            {teamMemberData.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    email={member.email}
                    avatar={member.avatar}
                />
            ))}
        </div>
    );
};

export default TeamMembers;

function TeamMember({ name, email, avatar }) {
    const [openModal, setOpenModal] = useState(false);
    const sendMessage = () => {
        setOpenModal(!openModal);
        console.log("object");
    };

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-[#F9F9F9] mb-3">
            <div className="flex items-center gap-2">
                <Image
                    width={44}
                    height={44}
                    className="rounded-full"
                    src={avatar}
                    alt="timeIcon"
                />

                <p className="text-sm font-semibold">
                    {name} <br />{" "}
                    <span className="text-xs font-medium text-black/50">
                        {email}
                    </span>
                </p>
            </div>
            <button onClick={() => sendMessage()} className="">
                <Image className="" src={MassageIcon} alt="team member" />
            </button>
            <SendMessageModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            ></SendMessageModal>
        </div>
    );
}

const teamMemberData = [
    {
        name: "Abdul Hamid",
        email: "smd71430@gmail.com",
        avatar: memberImg,
    },
    {
        name: "Shakil Ahmed",
        email: "shakilahmmed8882@gmail.com",
        avatar: memberImg,
    },
    {
        name: "MD Rahim",
        email: "alamin102410@gmail.com",
        avatar: memberImg,
    },
    {
        name: "Ahetesham Sajid",
        email: "ahteshamsajid8@gmail.com",
        avatar: memberImg,
    },
    {
        name: "Mazharul Shishir",
        email: "mdmazharulislam2046@gmail.com",
        avatar: memberImg,
    },
];
