import { Spinner } from "flowbite-react";
import React from "react";
import useDynamicData from "../Hooks/useDynamicData";
import Member from "./Member";

const LastFivePremium = () => {
    const {
        data: lastFivePremiumMembers,
        isLoading: lastFivePremiumMembersLoading,
    } = useDynamicData("lastFivePremiumMembers", "/last-five-premium-members");

    if (lastFivePremiumMembersLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <div className="rounded-xl p-6 border-2 border-tertiary bg-tertiary/5">
                <h1 className=" text-2xl font-bold">Last 05 Premium Members</h1>
                <div className="mt-6">
                    {lastFivePremiumMembers.map((member) => (
                        <Member member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LastFivePremium;
