"use client";

import { Spinner } from "flowbite-react";
import useDynamicData from "../Components/Hooks/useDynamicData";

import Member from "./Member";

const PremiumMembers = () => {
    const {
        data: premiumMembers,
        isLoading,
        refetch,
    } = useDynamicData("premiumMembers", "/paymentInfo");

    if (isLoading) {
        return <Spinner />;
    }

    console.log(premiumMembers);

    return (
        <div>
            <h1 className="text-lg font-semibold">Premium Members</h1>
            <div className="pt-6">
                {premiumMembers.map((member) => (
                    <Member
                        key={member._id}
                        member={member}
                        refetch={refetch}
                    />
                ))}
            </div>
        </div>
    );
};

export default PremiumMembers;
