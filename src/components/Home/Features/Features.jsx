"use client";

import featureImage01 from "@/assets/features/f2.png";
import featureImage02 from "@/assets/features/f1.png";
import featureImage03 from "@/assets/features/f3.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
    return (
        <section className="container mx-auto py-16 md:px-24 px-7">
            <div className="">
                <p className="text- font-semibold mb-2 text-green-500">
                    Key Features
                </p>
                <h2 className="lg:text-6xl md:text-5xl text-2xl font-semibold 2xl:w-6/12 lg:w-8/12 text- ">
                    A task manager you can trust for teams.
                </h2>
            </div>
            <div className="md:mt-20 mt-6 mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 180 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-[#50B577]/30 rounded-xl xl:px-16 md:px-10 px-6 xl:py-16 md:py-16 py-8 lg:grid grid-cols-7 justify-between items-center"
                >
                    <div className="col-span-5 md:px-6 space-y-4">
                        <div className="flex gap-6">
                            <div className="md:flex hidden flex-col items-center gap-2">
                                <div className="mt-2">
                                    <div className="w-8 h-8 md:block hidden bg-[#50B577] rounded-full"></div>
                                </div>
                                <div className="w-0.5 h-full bg-[#50B577] rounded-full"></div>
                            </div>
                            <div className="">
                                <div className="2xl:text-5xl md:text-4xl text-xl font-semibold ">
                                    <h2 className="">Simple to use,</h2>
                                    <h2 className="">Powerful when need.</h2>
                                </div>
                                <p className="xl:w-7/12 lg:text-base md:text-sm text-xs font-medium mt-4">
                                    Drag and drop feature enables users to
                                    intuitively move elements by clicking,
                                    dragging, and releasing them onto a
                                    designated area, streamlining interaction
                                    and enhancing user experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex  md:gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 md:block hidden bg-[#50B577] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#50B577] text-white lg:text-base md:text-sm text-xs">
                                    Harness the Power of Drag and Drop
                                </p>
                            </div>
                        </div>
                        <div className="flex md:gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 md:block hidden bg-[#50B577] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#50B577] text-white lg:text-base md:text-sm text-xs">
                                    Master Efficiency
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 me-0 relative lg:mt-0 mt-10">
                        <Image
                            className="2xl:-mt-40 xl:-mt-32 -mt-0 me-0"
                            src={featureImage01}
                            alt="Feature Image"
                        ></Image>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 180 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#FBBC05]/30 rounded-xl xl:px-16 md:px-10 px-6 xl:py-16 md:py-16 py-8 lg:grid grid-cols-8 justify-between items-center md:mt-16 mt-6"
                >
                    <div className="xl:col-span-4 lg:col-span-5 md:px-6 space-y-4">
                        <div className="flex md:gap-6">
                            <div className="md:flex hidden flex-col items-center gap-2">
                                <div className="mt-2">
                                    <div className="w-8 h-8 md:block hidden bg-[#FBBC05] rounded-full"></div>
                                </div>
                                <div className="w-0.5 h-full bg-[#FBBC05] rounded-full"></div>
                            </div>
                            <div className="">
                                <div className="2xl:text-5xl md:text-4xl text-xl font-semibold ">
                                    <h2 className="">
                                        Message Your Team Members Effortlessly!
                                    </h2>
                                </div>
                                <p className=" font-medium mt-4 lg:text-base md:text-sm text-xs">
                                    Stay in sync with your team by utilizing the
                                    message team member option, facilitating
                                    quick communication and collaboration on
                                    projects, tasks, and ideas.
                                </p>
                            </div>
                        </div>
                        <div className="flex  md:gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 md:block hidden bg-[#FBBC05] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className=" px-6 py-2 rounded-full bg-[#FBBC05] text-black font-semibold lg:text-base md:text-sm text-xs">
                                    Harness the Power of Drag and Drop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3  me-0 relative lg:mt-0 mt-10">
                        <Image
                            className="-mt- me-0"
                            src={featureImage02}
                            alt="Feature Image"
                        ></Image>
                    </div>
                    <div className="xl:block hidden">
                        <div className="flex gap-2">
                            <div className="flex flex-col items-center">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 md:block hidden bg-[#FBBC05] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="px-6 py-2 rounded-full bg-[#FBBC05] text-black font-semibold text-xs">
                                    Connect Seamlessly
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 180 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#93C648]/30 rounded-xl xl:px-16 md:px-10 px-6 xl:py-16 md:py-16 py-8 lg:grid grid-cols-8 justify-between items-center md:mt-16 mt-6"
                >
                    <div className="col-span-3 me-0 relative ms-6">
                        <Image
                            className="-mt- me-0"
                            src={featureImage03}
                            alt="Feature Image"
                        ></Image>
                    </div>
                    <div className="xl:block hidden"></div>
                    <div className="xl:col-span-4 lg:col-span-5 md:px-6 space-y-4 py-10">
                        <div className="flex  md:gap-6">
                            <div className="md:flex hidden flex-col items-center gap-2">
                                <div className="mt-2">
                                    <div className="w-8 h-8 md:block hidden bg-[#93C648] rounded-full"></div>
                                </div>
                                <div className="w-0.5 h-full bg-[#93C648] rounded-full"></div>
                            </div>
                            <div className="">
                                <div className="2xl:text-5xl md:text-4xl text-xl  font-semibold ">
                                    <h2 className="">
                                        Stay on Track: Manage Tasks
                                        Effortlessly!
                                    </h2>
                                </div>
                                <p className=" font-medium mt-4 lg:text-base md:text-sm text-xs">
                                    Efficiently track your progress with the
                                    user task function, allowing you to view
                                    both completed and incomplete tasks at a
                                    glance.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 md:block hidden bg-[#93C648] rounded-full"></div>
                                </div>
                            </div>
                            <div className="md:flex hidden gap-2">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white lg:text-base md:text-sm text-xs">
                                    Time Management
                                </p>
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white lg:text-base md:text-sm text-xs">
                                    Task Tracking
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 md:block hidden bg-[#93C648] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white lg:text-base md:text-sm text-xs">
                                    Project Organization
                                </p>
                            </div>
                        </div>
                        <div className=" md:gap-6 2xl:flex md:hidden ">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 md:block hidden bg-[#93C648] rounded-full"></div>
                                </div>
                            </div>
                            <div className="md:flex hidden gap-2">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white lg:text-base md:text-sm text-xs">
                                    Efficiency Enhancement
                                </p>
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white lg:text-base md:text-sm text-xs">
                                    Goal Management
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
