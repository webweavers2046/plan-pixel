"use client";

import axios from "axios";
import OverviewWidgetBg from "@/assets/pattern/admin-info-pattern.png";
import OverviewWidgetBg02 from "@/assets/pattern/admin-info-pattern02.png";
import OverviewWidgetBg03 from "@/assets/pattern/admin-info-pattern03.png";
import useIncrementingNumber from "../Hooks/useIncrementingNumber";
import { useEffect, useState } from "react";
import Spinner from "@/components/Common/CommonModal/Spinner";

const AdminOverviewWidget = () => {
    const [loading, setLoading] = useState(false);
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [numberOfPremiumUsers, setNumberOfPremiumUsers] = useState(0);
    const [numberOfWorkspace, setNumberOfWorkspace] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [response01, response02, response03] = await Promise.all([
                    axios.get("http://localhost:5000/api/number-of-users"),
                    axios.get(
                        "http://localhost:5000/api/number-of-premium-user"
                    ),
                    axios.get("http://localhost:5000/api/number-of-workspace"),
                ]);

                const numberOfUsersData = response01.data.numberOfData;
                setNumberOfUsers(numberOfUsersData);

                const numberOfPremiumUsersData = response02.data.numberOfData;
                setNumberOfPremiumUsers(numberOfPremiumUsersData);

                const numberOfWorkspaceData = response03.data.numberOfData;
                setNumberOfWorkspace(numberOfWorkspaceData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const totalUsers = useIncrementingNumber(numberOfUsers + 50);
    const totalPremiumUsers = useIncrementingNumber(numberOfPremiumUsers);
    const totalWorkspace = useIncrementingNumber(numberOfWorkspace);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="">
            <div className="grid grid-cols-7 gap-6">
                <div
                    className="col-span-2 border-2 rounded-md border-primary bg-primary/5 py-6 px-10 "
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
                        <h2 className="text-7xl">{totalUsers}</h2>
                    </div>
                </div>
                <div
                    className="col-span-2 border-2 rounded-md border-secondary bg-secondary/5 py-6 px-10"
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
                        <h2 className="text-7xl">{totalPremiumUsers}</h2>
                    </div>
                </div>
                <div
                    className="col-span-3 border-2 rounded-md border-tertiary bg-tertiary/5  py-6 px-10"
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
                        <h2 className="text-7xl">{totalWorkspace}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOverviewWidget;
