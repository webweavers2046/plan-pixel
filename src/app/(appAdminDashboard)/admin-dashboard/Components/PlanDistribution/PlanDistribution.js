"use client";

import { useState, useEffect } from "react";
import ChartComponent from "./ChartComponent";
import useDynamicData from "../Hooks/useDynamicData";
import { Spinner } from "flowbite-react";

const PlanDistribution = () => {
    const { data: premiumMembers, isLoading: premiumMembersLoading } =
        useDynamicData("adminPremiumMembers", "/paymentInfo");

    if (premiumMembersLoading) {
        return <Spinner />;
    }

    // Process the data to count the number of users for each plan
    const countedData = countUsersByPlan(premiumMembers);

    // Function to count the number of users for each plan
    function countUsersByPlan(usersData) {
        const planCounts = {
            enterprise: 0,
            basic: 0,
            pro: 0,
        };

        usersData.forEach((user) => {
            if (user.planName === "enterprise") {
                planCounts.enterprise++;
            } else if (user.planName === "basic") {
                planCounts.basic++;
            } else if (user.planName === "pro") {
                planCounts.pro++;
            }
        });

        return planCounts;
    }

    return (
        <div className="rounded-xl p-6 border-2 border-primary bg-primary/5 hidden md:block">
            <h1 className="text-2xl font-bold mb-4">User Plan Distribution</h1>
            <div>
                <ChartComponent
                    data={[
                        { name: "Enterprise", users: countedData.enterprise },
                        { name: "Basic", users: countedData.basic },
                        { name: "Pro", users: countedData.pro },
                    ]}
                />
            </div>
        </div>
    );
};

export default PlanDistribution;
