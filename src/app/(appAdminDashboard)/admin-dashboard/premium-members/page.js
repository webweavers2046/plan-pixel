"use client";
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/sajid.jpg";
import member06Img from "@/assets/team-members/shakil.jpg";

import { useEffect, useState } from "react";
import Image from "next/image";
import CalculateCountdown from "./CalculateCountdown";

const PremiumMembers = () => {
    // Sample premium members data

    const [premiumMembers, setPremiumMembers] = useState([
        {
            id: 1,
            name: "John Doe",
            image: member01Img,
            email: "john@example.com",
            planType: "Basic",
            subscriptionEndDate: "2024-03-17T23:59:55",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: member02Img,
            email: "jane@example.com",
            planType: "Enterprise",
            subscriptionEndDate: "2024-04-20T23:59:48",
        },
        {
            id: 3,
            name: "Alex Johnson",
            image: member03Img,
            email: "alex@example.com",
            planType: "Premium",
            subscriptionEndDate: "2024-05-15T23:59:19",
        },
        {
            id: 4,
            name: "Emma Brown",
            image: member04Img,
            email: "emma@example.com",
            planType: "Basic",
            subscriptionEndDate: "2024-06-10T23:59:59",
        },
        {
            id: 5,
            name: "Michael Wilson",
            image: member06Img,
            email: "michael@example.com",
            planType: "Pro",
            subscriptionEndDate: "2024-07-25T23:59:30",
        },
        {
            id: 6,
            name: "Sophia Garcia",
            image: member01Img,
            email: "sophia@example.com",
            planType: "Enterprise",
            subscriptionEndDate: "2024-08-30T23:59:25",
        },
        {
            id: 7,
            name: "William Martinez",
            image: member03Img,
            email: "william@example.com",
            planType: "Basic",
            subscriptionEndDate: "2024-09-18T23:59:59",
        },
        {
            id: 8,
            name: "Olivia Lee",
            image: member01Img,
            email: "olivia@example.com",
            planType: "Premium",
            subscriptionEndDate: "2024-10-05T23:59:09",
        },
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            updateCountdown();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const updateCountdown = () => {
        const updatedMembers = premiumMembers.map((member) => ({
            ...member,
            countdown: CalculateCountdown(member.subscriptionEndDate),
        }));
        setPremiumMembers(updatedMembers);
    };

    const handleDelete = (id) => {
        const updatedMembers = premiumMembers.filter(
            (member) => member.id !== id
        );
        setPremiumMembers(updatedMembers);
    };

    return (
        <div>
            <h1 className="text-lg font-semibold">Premium Members</h1>
            <div className="pt-6">
                {premiumMembers.map((member) => (
                    <div
                        key={member.id}
                        className="grid md:grid-cols-9 gap-2 items-center justify-between bg-dashboardPrimaryColor/50 mb-3 px-3 py-3 rounded-lg"
                    >
                        <div className="flex col-span-2 gap-6 items-center">
                            <div className="">
                                <Image
                                    className="rounded-lg"
                                    width={50}
                                    height={50}
                                    src={member.image}
                                    alt={member.name}
                                />
                            </div>
                            <div className="">
                                <p className="text-xs opacity-70">Name: </p>
                                <h2 className="lg:text-xl text-lg font-semibold -mt-0.5">
                                    {member.name}
                                </h2>
                            </div>
                        </div>

                        <div className="lg:col-span-2 col-span-3">
                            <p className="text-xs opacity-70">Email: </p>
                            <h6 className="font-semibold">{member.email}</h6>
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <p className="text-xs opacity-70">Plan Type: </p>
                            <h6 className="font-semibold">{member.planType}</h6>
                        </div>
                        <div className="col-span-2">
                            <p className="text-xs opacity-70">Deadline: </p>
                            <h6 className="text-lg font-semibold">
                                {member.countdown &&
                                    `${member.countdown.days}: ${member.countdown.hours}: ${member.countdown.minutes}: ${member.countdown.seconds}`}
                            </h6>
                        </div>
                        <div className="col-span-1 text-end">
                            <button
                                className="text-sm font-semibold px-3 py-0.5 text-white bg-rose-600 rounded-full"
                                onClick={() => handleDelete(member.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumMembers;
