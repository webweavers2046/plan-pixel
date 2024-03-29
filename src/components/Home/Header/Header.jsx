"use client";

import Image from "next/image";
import bannerPie from "@/assets/banner/bannerPie.png";
import bannerPic2 from "@/assets/banner/pic1.png";
import bannerPic3 from "@/assets/banner/pic2.png";
import bannerPic4 from "@/assets/banner/pic3.png";
import bannerPic5 from "@/assets/banner/pic4.png";
import "@/styles/globals.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/Providers/AuthProviders";

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="pt-8 lg:px-24 px-8 text-center border-b-2 banner-bg">
            <div className="flex flex-col items-center">
                <motion.h4
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="py-2 px-5 bg-[#E9F5E3] rounded-xl mb-4 text-xs font-semibold"
                >
                    Version 2.4 Released
                </motion.h4>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-extrabold xl:text-6xl lg:text-5xl md:text-5xl text-2xl md:leading-[76px]"
                >
                    Manage all your task <br /> activities in one place
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-5 mb-8 leading-relaxed md:text-base text-sm"
                >
                    Boost productivity with Plan Pixel, the ultimate task
                    management solution. Effortlessly organize, <br />
                    prioritize, and track tasks for seamless project success.{" "}
                    <span className="2xl:inline hidden">
                        {" "}
                        Try it now for streamlined efficiency!
                    </span>
                </motion.p>
                <Link href={`${user ? "/dashboard" : "/sign-in"}`}>
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="py-4 px-8 rounded-xl bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold"
                    >
                        Get Started Today
                    </motion.button>
                </Link>
            </div>
            <div className="flex justify-center lg:gap-6 md:gap-4 gap-2  mt-12">
                <div className="flex items-center justify-center mb-8">
                    <Image
                        width={1000}
                        className="w-32 xl:rounded-t-3xl md:rounded-t-xl"
                        src={bannerPic2}
                        alt="pic1"
                    />
                </div>
                <div className="flex items-end">
                    <Image
                        width={1000}
                        className="w-80 xl:rounded-t-3xl md:rounded-t-xl"
                        src={bannerPic3}
                        alt="pic2"
                    />
                </div>
                <div className="flex items-end justify-center">
                    <Image
                        width={1000}
                        className="w-80 xl:rounded-t-3xl md:rounded-t-xl"
                        src={bannerPic4}
                        alt="pic3"
                    />
                </div>
                <div className="flex items-end justify-center mb-6">
                    <Image
                        width={1000}
                        className="w-32 xl:rounded-t-3xl md:rounded-t-xl"
                        src={bannerPic5}
                        alt="pic4"
                    />
                </div>
                <div className="lg:flex hidden items-end justify-end">
                    <Image
                        width={1000}
                        src={bannerPie}
                        alt="pic4"
                        className="w-72 xl:rounded-t-3xl md:rounded-t-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
