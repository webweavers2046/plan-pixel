"use client";

import OverviewWidgetBg from "@/assets/pattern/admin-info-pattern.png";
import OverviewWidgetBg02 from "@/assets/pattern/admin-info-pattern02.png";
import OverviewWidgetBg03 from "@/assets/pattern/admin-info-pattern03.png";
import useIncrementingNumber from "../Hooks/useIncrementingNumber";

const AdminOverviewWidget = () => {
    const totalUsers = useIncrementingNumber(264);
    const totalPremiumUsers = useIncrementingNumber(64);
    const totalWorkspace = useIncrementingNumber(154);
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
                        <h5 className="text-lg font-semibold">Total users</h5>
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
