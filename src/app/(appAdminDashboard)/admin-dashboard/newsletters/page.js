"use client";

import User from "./User";
import Spinner from "@/components/Common/CommonModal/Spinner";
import useDynamicData from "../Components/Hooks/useDynamicData";

const page = () => {
    const {
        data: newsletterSubscribers,
        isLoading,
        refetch,
    } = useDynamicData("newsletters", "/api/newsletters");

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <h1 className="text-lg font-semibold">Newsletter Subscribers</h1>
            <div className="pt-6">
                {newsletterSubscribers.map((member) => (
                    <User member={member} refetch={refetch} />
                ))}
            </div>
        </div>
    );
};

export default page;
