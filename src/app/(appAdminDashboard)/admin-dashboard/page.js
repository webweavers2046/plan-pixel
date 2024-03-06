"use client";

import { Spinner } from "flowbite-react";
import AdminOverviewWidget from "./Components/AdminOverviewWidget/AdminOverviewWidget";
import useDynamicData from "./Components/Hooks/useDynamicData";
import UsersOverview from "./Components/UsersOverview/UsersOverview";
import LastFivePremium from "./Components/lastFivePremiumMembers/LastFivePremium";
import PlanDistribution from "./Components/PlanDistribution/PlanDistribution";

const AdminDashboard = () => {
    const { data: premiumMembersAmount, isLoading } = useDynamicData(
        "premiumMembersAmount",
        "/paymentInfo"
    );

    if (isLoading) {
        return <Spinner />;
    }

    const totalAmount = premiumMembersAmount.reduce(
        (acc, current) => acc + current.amount,
        0
    );
    return (
        <section>
            <AdminOverviewWidget />
            {/* <div className="mt-6 grid grid-cols-8">
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
            </div> */}
            <div className="lg:grid lg:grid-cols-9 gap-6 mt-6  ">
                <div className="lg:col-span-4">
                    <LastFivePremium />
                </div>
                <div className="lg:col-span-5">
                    <PlanDistribution />
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
