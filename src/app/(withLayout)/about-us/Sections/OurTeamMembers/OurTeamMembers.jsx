"use client";

import Image from "next/image";
import React from "react";
import mz from "@/assets/team-members/mazharul.jpg";
import sajid from "@/assets/team-members/sajid.jpg";
import rahim from "@/assets/team-members/rahim.jpg";
import sami from "@/assets/team-members/sami.jpg";
import { motion } from "framer-motion";
import { GrGithub } from "react-icons/gr";
import { TfiLinkedin } from "react-icons/tfi";
import { LiaBattleNet } from "react-icons/lia";
import "./team-members.css";

const OurTeamMembers = () => {
    const contacts = [
        {
            name: "Md Mazharul Islam",
            address: "Mohammadpur, Dhaka-1207",
            designation: "Front-end Developer",
            image: mz,
            email: "ahteshamsajid8@gmail.com",
            github: "https://github.com/sajid3366",
            linkedin: "https://www.linkedin.com/in/ahtesham-sajid-68aa2022a/",
            facebook: "https://www.facebook.com/ahtesham.sajid.1",
            portfolio: "",
        },
        {
            name: "Ahtesham Sajid",
            address: "Mohammadpur, Dhaka-1207",
            designation: "Front-end Developer",
            image: sajid,
            email: "ahteshamsajid8@gmail.com",
            github: "https://github.com/sajid3366",
            linkedin: "https://www.linkedin.com/in/ahtesham-sajid-68aa2022a/",
            facebook: "https://www.facebook.com/ahtesham.sajid.1",
            portfolio: "",
        },
        {
            name: "Mohammad Rahim",
            address: "Narayanganj, Dhaka",
            designation: "Back-end Developer",
            image: rahim,
            email: "alamin102410@gmail.com",
            github: "https://github.com/Thejellyfish1024",
            linkedin: "https://www.linkedin.com/in/md-rahim-6265342a3/",
            facebook: "https://www.facebook.com/dilwale.devil.18",
            portfolio: "",
        },
        {
            name: "Sabbir Mohammad Sami",
            address: "Dhaka",
            email: "smd71430@gmail.com",
            designation: "Full Stack Developer",
            image: sami,
            github: "https://github.com/sabbirsami",
            linkedin: "https://www.linkedin.com/in/sabbir-mohammad-sami/",
            facebook: "https://www.facebook.com/vladimir.de.oppenheimer",
            portfolio: "https://sabbir-mohammad-sami.web.app/",
        },
    ];

    return (
        <div className="">
            <h2 className="text-[30px] md:text-[40px] font-bold mb-10">
                Our Team Members:
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {contacts.map((member, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 90 + idx * 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + idx * 0.4 }}
                        key={idx}
                    >
                        <div className="relative">
                            <Image
                                className="lg:mb-0.5  mb-2.5"
                                src={member?.image}
                                alt="Team members image"
                            ></Image>
                            <div className="absolute top-6 left-6 space-x-1">
                                <div className="social-icons">
                                    {member?.github && (
                                        <a
                                            href={member?.github}
                                            className="social-button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GrGithub className="icon" />
                                            <span className="text">GitHub</span>
                                        </a>
                                    )}
                                    {member?.linkedin && (
                                        <a
                                            href={member?.linkedin}
                                            className="social-button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <TfiLinkedin className="icon" />
                                            <span className="text">
                                                LinkedIn
                                            </span>
                                        </a>
                                    )}
                                    {member?.portfolio && (
                                        <a
                                            href={member?.portfolio}
                                            className="social-button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <LiaBattleNet className="icon" />
                                            <span className="text">
                                                Portfolio
                                            </span>
                                        </a>
                                    )}
                                    {/* Add similar code for other social icons */}
                                </div>
                                {/* <div className="bg-white p-2 rounded-full">
                                    <GrGithub className="text-xl" />
                                </div>
                                <TfiLinkedin />
                                <LiaBattleNet /> */}
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm text-primary font-semibold">
                                {member.designation}
                            </p>
                            <h1 className="text-3xl">{member.name}</h1>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurTeamMembers;
