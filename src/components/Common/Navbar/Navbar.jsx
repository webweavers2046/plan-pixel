"use client";

import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import logo from "@/assets/Logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "@/Providers/AuthProviders";

const Navbar = () => {
    const [closeMenu, setCloseMenu] = useState(false);
    const { user } = useContext(AuthContext);
    const navLinks = [
        {
            route: "Home",
            path: "/",
        },
        {
            route: "Pricing",
            path: "/pricing",
        },

        {
            route: "About Us",
            path: "/about-us",
        },
        {
            route: "Contact Us",
            path: "/contact",
        },
        {
            route: "Dashboard",
            path: "/dashboard",
        },
    ];
    return (
        <header className="backdrop:blur-2xl md:px-24">
            <div className="container mx-auto relative py-4 xl:px-0 lg:px-6 px-2">
                <div className=" rounded-full pt-4 pb-4 text-base font-semibold">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-16">
                            <div className="">
                                <Image
                                    className="h-10 w-auto lg:mb-0.5  mb-2.5"
                                    src={logo}
                                    alt="heartbeat givers' logo"
                                ></Image>
                            </div>
                            <nav className="lg:block hidden">
                                <ul className="flex gap-2">
                                    {navLinks.map((link, idx) => (
                                        <Link
                                            href={link?.path}
                                            className="px-3 text-base font-medium"
                                            key={idx}
                                        >
                                            {link?.route}
                                        </Link>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="lg:block hidden items-center gap-3">
                            <Link
                                className="py-3 px-6 bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold text-base rounded-sm"
                                href={`${user ? "/dashboard" : "/sign-in"}`}
                            >
                                Get Started
                            </Link>
                        </div>
                        {/* mobile menu button  */}
                        <div className="block lg:hidden">
                            <button
                                className=" font-bold text-2xl text-primary rounded-full"
                                onClick={() => setCloseMenu(!closeMenu)}
                            >
                                <TbMenu />
                            </button>
                        </div>
                    </div>
                    {closeMenu && (
                        <div className="bg-gray-300 h-screen  absolute top-0 right-0 w-80">
                            <div className="flex justify-between p-10 items-end">
                                <div className="">
                                    <Image
                                        className="h-8 w-auto mb-2.5"
                                        src={logo}
                                        alt="heartbeat givers' logo"
                                    ></Image>
                                </div>
                                <div className="block lg:hidden">
                                    <button
                                        onClick={() => setCloseMenu(!closeMenu)}
                                        className=" font-bold text-2xl text-primary rounded-full pt-3 mb-0"
                                    >
                                        <IoClose />
                                    </button>
                                </div>
                            </div>
                            <nav className="">
                                <ul className="flex flex-col px-10 gap-y-2">
                                    {navLinks.map((link, idx) => (
                                        <Link
                                            href={link?.path}
                                            className=" text-sm font-medium"
                                            key={idx}
                                        >
                                            {link?.route}
                                        </Link>
                                    ))}
                                </ul>
                            </nav>
                            <div className="ps-8 mt-3">
                                <Link
                                    href={"/register"}
                                    className="py-3 font-medium px-2  text-primary rounded-full"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
