"use client";

import OverviewWidgetBg from "@/assets/pattern/admin-info-pattern.png";
import OverviewWidgetBg02 from "@/assets/pattern/admin-info-pattern02.png";
import OverviewWidgetBg03 from "@/assets/pattern/admin-info-pattern03.png";
import useIncrementingNumber from "../Hooks/useIncrementingNumber";
import useDynamicData from "../Hooks/useDynamicData";
import WidgetSpinner from "../Shared/WidgetSpinner";

const AdminOverviewWidget = () => {
    const { data: numberOfUsers, isLoading: usersLoading } = useDynamicData(
        "numberOfUsers",
        "/api/number-of-users"
    );

    const { data: numberOfPremiumUsers, isLoading: premiumUsersLoading } =
        useDynamicData("numberOfPremiumUsers", "/api/number-of-premium-user");

    const { data: numberOfWorkspaces, isLoading: workspacesLoading } =
        useDynamicData("numberOfWorkspaces", "/api/number-of-workspace");

    const totalUsers = useIncrementingNumber(
        numberOfUsers?.numberOfData ? numberOfUsers?.numberOfData + 50 : 0
    );
    const totalPremiumUsers = useIncrementingNumber(
        numberOfPremiumUsers?.numberOfData || 0
    );
    const totalWorkspace = useIncrementingNumber(
        numberOfWorkspaces?.numberOfData || 0
    );

    if (usersLoading || premiumUsersLoading || workspacesLoading) {
        return <WidgetSpinner />;
    }

    return (
        <div className="">
            <div className="grid grid-cols-7 md:gap-6 gap-3">
                <div
                    className="lg:col-span-2 md:col-span-3 col-span-7 border-2 rounded-md border-primary bg-primary/5 py-6 xl:px-10 px-6 "
                    style={{
                        backgroundImage: `url(${OverviewWidgetBg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div className="flex justify-between items-center">
                        <h5 className="text-lg font-semibold">Total users</h5>
                        <h2 className="xl:text-7xl text-6xl ">{totalUsers}</h2>
                    </div>
                </div>
                <div
                    className="lg:col-span-2 md:col-span-4 col-span-7 border-2 rounded-md border-secondary bg-secondary/5 py-6 xl:px-10 px-6"
                    style={{
                        backgroundImage: `url(${OverviewWidgetBg03.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div className="flex justify-between items-center">
                        <h5 className="text-lg font-semibold">
                            Total premium users
                        </h5>
                        <h2 className="xl:text-7xl text-6xl ">
                            {totalPremiumUsers}
                        </h2>
                    </div>
                </div>
                <div
                    className="lg:col-span-3 col-span-7 border-2 rounded-md border-tertiary bg-tertiary/5  py-6 px-10"
                    style={{
                        backgroundImage: `url(${OverviewWidgetBg02.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div className="flex justify-between items-center">
                        <h5 className="text-lg font-semibold">
                            Total created workspace
                        </h5>
                        <h2 className=" xl:text-7xl text-6xl ">
                            {totalWorkspace}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOverviewWidget;
