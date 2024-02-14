"use client";

import "@/styles/globals.css";
import PrivateRoute from "@/components/Common/PrivateRoute";
import TanstackProvider from "@/Providers/TanstackProvider";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AdminDashboardSidebar from "./admin-dashboard/Components/Sidebar/AdminDashboardSidebar";
import AdminDashboardNavbar from "./admin-dashboard/Components/Navbar/AdminDashboardNavbar";

export default function DashboardLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };
    return (
        <section>
            <PrivateRoute>
                <div className="grid grid-cols-12 min-h-screen relative">
                    {openSidebar && (
                        <div className="absolute w-full left-0 top-0 h-screen bg-slate-200/10 backdrop-blur-2xl z-50 xl:hidden block">
                            <div className="w-80 bg-white h-full relative">
                                <Drawer />
                                <button
                                    onClick={toggleSidebar}
                                    className="border-2 p-1 flex items-center justify-center absolute bg-white rounded-full top-1/4 transform -translate-y-1/2 -right-3 z-40"
                                >
                                    <IoIosArrowForward className="inline text-xl rotate-180" />
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="xl:col-span-2 col-span-0 xl:block hidden">
                        <AdminDashboardSidebar />
                    </div>

                    <div className="xl:col-span-10 col-span-12 xl:ms-0 ms-5">
                        <div className={`flex`}>
                            <div className="sticky top-0">
                                <div className="w-4 h-screen border-r-2 xl:hidden block relative">
                                    <button
                                        onClick={toggleSidebar}
                                        className="border-2 p-1 flex items-center justify-center absolute bg-white rounded-full top-1/4 transform -translate-y-1/2 -left-0 "
                                    >
                                        <IoIosArrowForward className="inline text-xl" />
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <AdminDashboardNavbar />
                                </div>
                                <TanstackProvider>
                                    <div className="p-4">{children}</div>
                                </TanstackProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </PrivateRoute>
        </section>
    );
}
