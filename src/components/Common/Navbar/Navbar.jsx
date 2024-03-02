"use client";

import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import logo from "@/assets/Logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "@/Providers/AuthProviders";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useContext(AuthContext);

    const isAdmin = user?.email === "admin@gmail.com";

    const navLinks = [
        { route: "Home", path: "/" },
        { route: "Pricing", path: "/pricing" },
        { route: "About Us", path: "/about-us" },
        { route: "Contact Us", path: "/contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="border-b-2">
            <div className="container mx-auto relative py-4 px-7">
                <div className="rounded-full pt-4 pb-4 text-base font-semibold">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-16">
                            <div className="">
                                <Link href={"/"}>
                                    <Image
                                        className="h-10 w-auto lg:mb-0.5  mb-2.5"
                                        src={logo}
                                        alt="heartbeat givers' logo"
                                    ></Image>
                                </Link>
                            </div>
                            <nav className="lg:block hidden">
                                <ul className="flex gap-2">
                                    {navLinks.map((link, idx) => (
                                        <Link
                                            href={link.path}
                                            className="px-3 text-base font-medium"
                                            key={idx}
                                        >
                                            {link.route}
                                        </Link>
                                    ))}
                                    {isAdmin ? (
                                        <Link
                                            href={"/admin-dashboard"}
                                            className="px-3 text-base font-medium"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <Link
                                            href={"/dashboard"}
                                            className="px-3 text-base font-medium"
                                        >
                                            Dashboard
                                        </Link>
                                    )}
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
                                onClick={toggleMenu}
                            >
                                <div className="space-y-2">
                                    <div className="h-0.5 w-8 bg-black"></div>
                                    <div className="h-0.5 w-8 bg-black"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* for mobile sidebar  */}
                    <div
                        className={`fixed top-0 right-0 h-screen overflow-hidden ${
                            isMenuOpen ? "w-full" : "w-0"
                        } transition-all duration-300`}
                    >
                        <div
                            className="bg-black bg-opacity-50 absolute top-0 right-0 h-full w-full"
                            onClick={toggleMenu}
                        ></div>
                        <div className="bg-white h-full w-80 transform transition-transform ease-in-out">
                            <div className="flex justify-between p-10 items-end">
                                <div className="">
                                    <Link href={"/"} onClick={toggleMenu}>
                                        <Image
                                            className="h-8 w-auto mb-2.5"
                                            src={logo}
                                            alt="heartbeat givers' logo"
                                        ></Image>
                                    </Link>
                                </div>
                                <div className="block lg:hidden">
                                    <button
                                        onClick={toggleMenu}
                                        className=" mb-5"
                                    >
                                        <div className="space-y-2 ">
                                            <div className="h-0.5 w-8 bg-black rotate-45"></div>
                                            <div className="h-0.5 w-8 bg-black -rotate-45 "></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <nav className="ps-1">
                                <ul className="flex flex-col px-10 gap-y-2">
                                    {navLinks.map((link, idx) => (
                                        <Link
                                            href={link.path}
                                            className="  text-base font-medium"
                                            key={idx}
                                            onClick={toggleMenu}
                                        >
                                            {link.route}
                                        </Link>
                                    ))}
                                </ul>
                            </nav>
                            <nav className="ps-11 mt-3">
                                <ul className="flex gap-2">
                                    {isAdmin ? (
                                        <Link
                                            href={"/admin-dashboard"}
                                            className=" text-base font-medium"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <Link
                                            href={"/dashboard"}
                                            className=" text-base font-medium"
                                        >
                                            Dashboard
                                        </Link>
                                    )}
                                </ul>
                            </nav>
                            <div className="ps-10 mt-5">
                                <div className=" items-center gap-3">
                                    <Link
                                        className="py-3 px-6 bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold text-base rounded-sm"
                                        href={`${
                                            user ? "/dashboard" : "/sign-in"
                                        }`}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
