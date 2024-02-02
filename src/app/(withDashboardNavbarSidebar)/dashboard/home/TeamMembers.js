"use client";

import Image from "next/image";
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/shakil.jpg";
import member05Img from "@/assets/team-members/sajid.jpg";
import member06Img from "@/assets/team-members/forhad.jpg";

import MassageIcon from "@/assets/dashboard/Message.svg";
import { useState } from "react";
import SendMessageModal from "../Components/SendMessageModal";

const TeamMembers = () => {
    return (
        <div className="shadow-md rounded-xl p-6 max-h-dvh overscroll-auto border">
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
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9F9F9] mb-3">
            <div className="flex items-center gap-4">
                <Image
                    width={44}
                    height={44}
                    className="rounded-full object-cover w-10 h-10"
                    src={avatar}
                    alt="timeIcon"
                />

                <div className="">
                    <p className="text- font-semibold">{name}</p>
                    <p className="text-xs font-medium text-black/50">{email}</p>
                </div>
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
        name: "Sabbir Mohammad Sami",
        email: "smd71430@gmail.com",
        avatar: member01Img,
    },
    {
        name: "Mazharul Shishir",
        email: "mdmazharulislam2046@gmail.com",
        avatar: member02Img,
    },
    {
        name: "MD Rahim",
        email: "alamin102410@gmail.com",
        avatar: member03Img,
    },
    {
        name: "Shakil Ahmed",
        email: "shakilahmmed8882@gmail.com",
        avatar: member04Img,
    },

    {
        name: "Ahetesham Sajid",
        email: "ahteshamsajid8@gmail.com",
        avatar: member05Img,
    },

    {
        name: "Forhad hossine",
        email: "forhossen@gmail.com",
        avatar: member06Img,
    },
];
