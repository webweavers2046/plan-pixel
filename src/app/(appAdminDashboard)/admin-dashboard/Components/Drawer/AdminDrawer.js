"use client";

import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import "@/styles/globals.css";
import { IoSettingsSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FaUsers } from "react-icons/fa6";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";

const AdminDrawer = () => {
    const pathname = usePathname();
    return (
        <div className="w-full">
            <div
                className={`   h-screen block xl:hidden border-r-2 relative z-30`}
            >
                <div className="py-4 px-3">
                    <div className="ms-7 mt-1">
                        <Link href={"/"}>
                            <Image
                                className="w-auto max-h-9 lg:mb-0.5  mb-2.5"
                                src={logo}
                                alt="Plan Pixel"
                            ></Image>
                        </Link>
                    </div>
                    <ul className="mt-12 text-black space-y-2 mx-4">
                        <li>
                            <Link
                                className={`flex items-center  gap-x-4 ${
                                    pathname == "/admin-dashboard"
                                        ? "active"
                                        : "inactive"
                                }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                href="/admin-dashboard"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 26"
                                    fill="none"
                                    style={{ minWidth: "22px" }}
                                >
                                    <rect
                                        x="-0.00390625"
                                        width="12"
                                        height="11.5"
                                        rx="3"
                                        fill="black"
                                    />
                                    <rect
                                        x="15.459"
                                        width="12.2637"
                                        height="11.5"
                                        rx="3"
                                        fill="black"
                                    />
                                    <rect
                                        x="15.459"
                                        y="14.5"
                                        width="12.2637"
                                        height="11.5"
                                        rx="3"
                                        fill="black"
                                    />
                                    <rect
                                        x="-0.00390625"
                                        y="14.5"
                                        width="12.2637"
                                        height="11.5"
                                        rx="3"
                                        fill="black"
                                    />
                                </svg>
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                className={`flex items-center  gap-x-4 ${
                                    pathname ==
                                    "/admin-dashboard/premium-members"
                                        ? "active"
                                        : "inactive"
                                }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                href="/admin-dashboard/premium-members"
                            >
                                <div className="flex items-center">
                                    <FaUsers className="text-3xl me-4" />
                                    <p>Premium Members</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`flex items-center gap-x-4  ${
                                    pathname ==
                                    "/admin-dashboard/profile-setting"
                                        ? "active"
                                        : "inactive"
                                } px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                href="/admin-dashboard/profile-setting"
                            >
                                <IoSettingsSharp className="w-7 h-7" />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`flex items-center  gap-x-4 ${
                                    pathname ==
                                    "/admin-dashboard/users-feedback"
                                        ? "active"
                                        : "inactive"
                                }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                href="/admin-dashboard/users-feedback"
                            >
                                <div className="flex items-center">
                                    <TbHelpSquareRoundedFilled className="text-4xl me-3" />
                                    <p>Users Feedback</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDrawer;
