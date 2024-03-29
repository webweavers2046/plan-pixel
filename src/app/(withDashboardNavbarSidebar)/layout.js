"use client";

import PrivateRoute from "@/components/Common/PrivateRoute";
import DashboardNavbar from "./dashboard/Components/DashboardNavbar";
import DashboardSidebar from "./dashboard/Components/DashboardSidebar";
import "@/styles/globals.css";
import TanstackProvider from "@/Providers/TanstackProvider";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Drawer from "./dashboard/Components/Drawer";

export default function DashboardLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };
    return (
        <section>
            <PrivateRoute>
                <div className="grid grid-cols-12 min-h-screen w-full">
                    {openSidebar && (
                        <div className="fixed w-full left-0 top-0 h-screen bg-slate-200/10 backdrop-blur-2xl z-50 xl:hidden block">
                            <div className="w-80 bg-white h-full relative">
                                <Drawer />

                                <button
                                    onClick={toggleSidebar}
                                    className="border-2 p-1 flex items-center justify-center absolute bg-[#50B577] text-white rounded-full transform -translate-y-1/2 top-1/2 -right-3 z-50"
                                >
                                    <IoIosArrowForward className="inline text-xl rotate-180" />
                                </button>

                            </div>
                        </div>
                    )}
                    <div className="xl:col-span-2 col-span-0 xl:block hidden ">
                        <DashboardSidebar />
                    </div>

                    <div className="xl:col-span-10 col-span-12 xl:py-4 py-2 xl:px-3 lg:pl-11 lg:pr-5 pl-9 pr-4">
                        <div className={`flex`}>
                            <div className="fixed top-0 md:left-2 left-1">
                                <div className="w-4 flex items-center justify-center h-screen border-r-2 xl:hidden relative">
                                    <button
                                        onClick={toggleSidebar}
                                        className="border-2 p-1 flex items-center justify-center absolute bg-[#50B577] text-white rounded-full transform -translate-y-1/2 -left-0"
                                    >
                                        <IoIosArrowForward className="inline text-xl" />
                                    </button>
                                </div>
                            </div>
                            <div className="grow">
                                <div className="">
                                    <DashboardNavbar />
                                </div>
                                <TanstackProvider>
                                    <div>{children}</div>
                                </TanstackProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </PrivateRoute>
        </section>

    );
}
