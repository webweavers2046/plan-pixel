"use client";

import { Spinner } from "flowbite-react";
import AdminOverviewWidget from "./Components/AdminOverviewWidget/AdminOverviewWidget";
import useDynamicData from "./Components/Hooks/useDynamicData";
import UsersOverview from "./Components/UsersOverview/UsersOverview";

const AdminDashboard = () => {
    const {
        data: premiumMembersAmount,
        isLoading,
        refetch,
    } = useDynamicData("premiumMembersAmount", "/paymentInfo");

    const chartData = {
        categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "Jun",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        series: [
            {
                name: "Free Users",
                data: [150, 81, 145, 152, 115, 125, 100, 86, 40, 96, 136, 55],
                color: "#FBBC05",
            },
            {
                name: "Premium Users",
                data: [43, 13, 165, 32, 142, 173, 180, 185, 199, 162, 114, 155],
                color: "#50B577",
            },
        ],
    };
    if (isLoading) {
        return <Spinner />;
    }

    const totalAmount = premiumMembersAmount.reduce(
        (acc, current) => acc + current.amount,
        0
    );
    console.log(chartData, totalAmount);
    return (
        <section>
            <AdminOverviewWidget />
            <div className="mt-6 grid grid-cols-8">
                <div className="col-span-8">
                    {isLoading ? (
                        Spinner
                    ) : (
                        // <UsersOverview
                        //     chartData={chartData}
                        //     totalAmount={totalAmount}
                        //     premiumMembersAmount={premiumMembersAmount}
                        // /> 
                        ""
                    )}
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
