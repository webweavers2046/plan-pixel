"use client";
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";

import { useState } from "react";
import Image from "next/image";

const PremiumMembers = () => {
    // Sample premium members data
    const [premiumMembers, setPremiumMembers] = useState([
        {
            id: "1",
            userImage: member01Img,
            name: "Premium User 1",
            email: "premiumuser1@example.com",
            premiumPlanType: "Gold",
        },
        {
            id: "2",
            userImage: member02Img,
            name: "Premium User 2",
            email: "premiumuser2@example.com",
            premiumPlanType: "Silver",
        },
        {
            id: "3",
            userImage: member03Img,
            name: "Premium User 3",
            email: "premiumuser3@example.com",
            premiumPlanType: "Platinum",
        },
    ]);

    // Function to delete a premium member
    const deletePremiumMember = (idToDelete) => {
        const updatedPremiumMembers = premiumMembers.filter(
            (member) => member.id !== idToDelete
        );
        setPremiumMembers(updatedPremiumMembers);
    };

    return (
        <div>
            <h1 className="text-lg font-semibold">Premium Members</h1>
            <div className="pt-6">
                {premiumMembers.map((member) => (
                    <div
                        className="grid grid-cols-7 items-center justify-between bg-dashboardPrimaryColor mb-3 px-3 py-3 rounded-lg"
                        key={member.id}
                    >
                        <div className="flex col-span-2 gap-6 items-center">
                            <div className="">
                                <Image
                                    className="rounded-lg"
                                    width={50}
                                    height={50}
                                    src={member.userImage}
                                    alt={member.name}
                                />
                            </div>
                            <div className="">
                                <p className="text-xs opacity-70">Name: </p>
                                <h2 className="text-lg font-semibold -mt-0.5">
                                    {member.name}
                                </h2>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <p className="text-xs opacity-70">Email: </p>
                            <h6 className="">{member.email}</h6>
                        </div>
                        <div className="col-span-2">
                            <p className="text-xs opacity-70">Plan Type: </p>
                            <h6 className="">{member.premiumPlanType}</h6>
                        </div>
                        <div className="col-span-1 text-end">
                            <button
                                className="text-sm font-semibold px-3 py-0.5 text-white bg-rose-600 rounded-full"
                                onClick={() => deletePremiumMember(member.id)}
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
