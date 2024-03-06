"use client";

import { TbHelpSquareRoundedFilled } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import "@/styles/globals.css";
import OverviewWidgetBg03 from "@/assets/pattern/admin-info-pattern03copy.png";
import { IoSettingsSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { FaUsers } from "react-icons/fa6";
import phoneIcon from "@/assets/icons/phone.png";

const DashboardSidebar = () => {
    // get current route
    const pathname = usePathname();
    const isAdmin = false;

    return (
        <div className="sticky top-0">
            <div className="relative">
                <div
                    className={`mr-2 h-screen xl:block hidden border-r-2 relative `}
                >
                    <div className="py-4 px-3 h-screen flex flex-col justify-between">
                        <div className="">
                            <div className="ms-5 mt-1">
                                <Link href={"/"}>
                                    <Image
                                        className="w-auto max-h-9 lg:mb-0.5 mb-2.5"
                                        src={logo}
                                        alt="Plan Pixel"
                                    ></Image>
                                </Link>
                            </div>
                            <div className="mt-12 space-y-2 px-2">
                                {isAdmin ? (
                                    <div>
                                        <ul>
                                            <li>
                                                <Link
                                                    className={`flex items-center  gap-x-4 ${
                                                        pathname ==
                                                        "/admin-dashboard"
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
                                                        style={{
                                                            minWidth: "22px",
                                                        }}
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
                                                        "/admin-dashboard/profile"
                                                            ? "active"
                                                            : "inactive"
                                                    } px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                    href="/admin-dashboard/profile"
                                                >
                                                    <IoSettingsSharp className="w-7 h-7" />
                                                    Profile
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="flex flex-col justify-between">
                                        <ul className="space-y-2">
                                            <li>
                                                <Link
                                                    className={`flex items-center gap-x-4 ${
                                                        pathname == "/dashboard"
                                                            ? "active"
                                                            : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                    href="/dashboard"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        viewBox="0 0 28 26"
                                                        fill="none"
                                                        style={{
                                                            minWidth: "22px",
                                                        }}
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
                                                        "/dashboard/tasks"
                                                            ? "active"
                                                            : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                    href="/dashboard/tasks"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        viewBox="0 0 28 28"
                                                        fill="none"
                                                        style={{
                                                            minWidth: "22px",
                                                        }}
                                                    >
                                                        <path
                                                            d="M14.7778 9.72222C14.7778 9.0779 15.3001 8.55556 15.9444 8.55556H21.3889C22.0332 8.55556 22.5556 9.0779 22.5556 9.72222C22.5556 10.3665 22.0332 10.8889 21.3889 10.8889H15.9444C15.3001 10.8889 14.7778 10.3665 14.7778 9.72222ZM15.9446 17.1111C15.3001 17.1111 14.7779 17.6335 14.7779 18.2778C14.7779 18.9221 15.3001 19.4444 15.9446 19.4444H21.3887C22.0332 19.4444 22.5554 18.9221 22.5554 18.2778C22.5554 17.6335 22.0332 17.1111 21.3887 17.1111H15.9446ZM12.1027 8.99162C12.5583 8.53602 12.5583 7.79732 12.1027 7.34171C11.6471 6.8861 10.9085 6.8861 10.4528 7.34171L8.16667 9.62786L7.43607 8.89727C6.98046 8.44166 6.24176 8.44166 5.78615 8.89727C5.33055 9.35287 5.33055 10.0916 5.78615 10.5472L7.34171 12.1027C7.79732 12.5583 8.53602 12.5583 8.99162 12.1027L12.1027 8.99162ZM12.1027 15.8973C12.5583 16.3529 12.5583 17.0915 12.1027 17.5471L8.99162 20.6582C8.53602 21.1139 7.79732 21.1139 7.34171 20.6582L5.78615 19.1027C5.33055 18.6471 5.33055 17.9085 5.78615 17.4529C6.24176 16.9972 6.98046 16.9972 7.43607 17.4529L8.16667 18.1834L10.4528 15.8973C10.9085 15.4417 11.6471 15.4417 12.1027 15.8973ZM5.05556 0C2.26344 0 0 2.26344 0 5.05556V22.9444C0 25.7365 2.26344 28 5.05556 28H22.9444C25.7365 28 28 25.7365 28 22.9444V5.05556C28 2.26344 25.7365 0 22.9444 0H5.05556ZM2.33333 5.05556C2.33333 3.55211 3.55211 2.33333 5.05556 2.33333H22.9444C24.4479 2.33333 25.6667 3.55211 25.6667 5.05556V22.9444C25.6667 24.4479 24.4479 25.6667 22.9444 25.6667H5.05556C3.55211 25.6667 2.33333 24.4479 2.33333 22.9444V5.05556Z"
                                                            fill="#212121"
                                                        />
                                                    </svg>
                                                    Tasks
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    className={`flex items-center  gap-x-4 ${
                                                        pathname ==
                                                        "/dashboard/members"
                                                            ? "active"
                                                            : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                    href="/dashboard/members"
                                                >
                                                    <div className="flex items-center">
                                                        <FaUsers className="text-3xl me-4" />
                                                        <p>Members</p>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    className={`flex items-center gap-x-4  ${
                                                        pathname ==
                                                        "/dashboard/profile"
                                                            ? "active"
                                                            : "inactive"
                                                    } px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                    href="/dashboard/profile"
                                                >
                                                    <IoSettingsSharp className="w-7 h-7" />
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className={`flex items-center  gap-x-4 ${
                                                        pathname ==
                                                        "/dashboard/meeting"
                                                            ? "active"
                                                            : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                    href="/dashboard/meeting"
                                                >
                                                    <div className="flex items-center">
                                                        <Image
                                                            src={phoneIcon}
                                                            alt="phone icon"
                                                            className="me-3"
                                                        ></Image>
                                                        <p>Meeting</p>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className={`flex items-center  gap-x-4 ${
                                                        pathname ==
                                                        "/dashboard/add-feedback"
                                                            ? "active"
                                                            : "inactive"
                                                    }  px-4 py-3 rounded-md cursor-pointer font-semibold`}
                                                    href="/dashboard/add-feedback"
                                                >
                                                    <div className="flex items-center">
                                                        <TbHelpSquareRoundedFilled className="text-[2.5rem] me-3 -ms-0.5" />
                                                        <p>Add Feedback</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${OverviewWidgetBg03.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="relative ms-6 me-6 bg-secondary/15 border-2 border-secondary flex flex-col items-center justify-between rounded-xl px-6 py-8 gap-3"
                        >
                            <div className=" absolute -top-5 p-2.5  text-xl bg-gradient-to-tr from-primary to-secondary rounded-full inline-block  text-white">
                                <BsStars />
                            </div>
                            <h3 className=" text-xl font-bold text-center pb-1">
                                Get Plan Pixel Premium Version
                            </h3>
                            <div className="">
                                <Link
                                    className="bg-gradient-to-tr from-primary to-secondary rounded-md px-4 py-2 text-white text-sm"
                                    href={"/pricing"}
                                >
                                    <button>Get Premium</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;
