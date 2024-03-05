"use client";

import avatar from "@/assets/person/avatar.jpg";
import Image from "next/image";
import bgPattern from "@/assets/pattern.png";
import { MdOutlineFormatQuote } from "react-icons/md";
import { motion } from "framer-motion";

const Testimonial = () => {
    return (
        <section className="bg-footer testimonial-bg relative -z-20">
            <Image
                src={bgPattern}
                alt="testimonial bg pattern"
                className="absolute bottom-0 h-full object-cover right-0 -z-10 opacity-45"
            ></Image>
            <div className="container mx-auto py-32 md:px-24 px-7 z-30">
                <div className="grid lg:grid-cols-2 xl:gap-10 gap-6">
                    <div className="">
                        <div className="">
                            <h2 className="xl:text-5xl font-semibold text-3xl 2xl:w-7/12 lg:w-8/12">
                                What People Say About Us?{" "}
                            </h2>
                            <p className="2xl:w-7/12 lg:w-10/12 pt-4">
                                I don’t know what do you say about us. But I
                                don’t give a lNow go and cry you biauth. Laurum
                                Ipsum idk.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 xl:gap-10 gap-6 lg:mt-24 mt-16">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:mt-16"
                            >
                                <div className="bg-white 2xl:px-10 2xl:pb-10 px-7 pb-7 pt-5 rounded-xl shadow-lg shadow-primary/40">
                                    <MdOutlineFormatQuote className="xl:text-7xl text-4xl text-black/10  mb-2" />
                                    <p className="xl:text-sm text-xs font-medium">
                                        Discovering Plan Pixel was a
                                        game-changer for our team. The intuitive
                                        interface and robust collaboration
                                        features transformed the way we manage
                                        projects.{" "}
                                    </p>
                                    <div className="flex items-center gap-3 mt-6">
                                        <div className="">
                                            <Image
                                                className="w-10 h-10 rounded-full"
                                                src={avatar}
                                                alt="avatar"
                                            ></Image>
                                        </div>
                                        <div className="">
                                            <h6 className="font-semibold 2xl:text-base text-sm">
                                                Johnathan Winters
                                            </h6>
                                            <p className="opacity-45 text-xs">
                                                Project Manager
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className=""
                            >
                                <div className="bg-white 2xl:px-10 2xl:pb-10 px-7 pb-7 pt-5 rounded-xl shadow-lg shadow-primary/40">
                                    <MdOutlineFormatQuote className="xl:text-7xl text-4xl text-black/10 mb-2" />
                                    <p className="xl:text-sm text-xs font-medium">
                                        Discovering Plan Pixel was a
                                        game-changer for our team. The intuitive
                                        interface and robust collaboration
                                        features transformed the way we manage
                                        projects.{" "}
                                    </p>
                                    <div className="flex items-center gap-3 mt-6">
                                        <div className="">
                                            <Image
                                                className="w-10 h-10 rounded-full"
                                                src={avatar}
                                                alt="avatar"
                                            ></Image>
                                        </div>
                                        <div className="">
                                            <h6 className="font-semibold 2xl:text-base text-sm">
                                                Johnathan Winters
                                            </h6>
                                            <p className="opacity-45 text-xs">
                                                Project Manager
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 xl:gap-10 gap-6">
                        <div className="xl:space-y-10 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-white 2xl:px-10 2xl:pb-10 px-7 pb-7 pt-5 rounded-xl shadow-lg shadow-primary/40"
                            >
                                <MdOutlineFormatQuote className="xl:text-7xl text-4xl text-black/10  mb-2" />
                                <p className="xl:text-sm text-xs font-medium">
                                    Discovering Plan Pixel was a game-changer
                                    for our team. The intuitive interface and
                                    robust collaboration features transformed
                                    the way we manage projects.{" "}
                                </p>
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="">
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src={avatar}
                                            alt="avatar"
                                        ></Image>
                                    </div>
                                    <div className="">
                                        <h6 className="font-semibold 2xl:text-base text-sm">
                                            Johnathan Winters
                                        </h6>
                                        <p className="opacity-45 text-xs">
                                            Project Manager
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-white 2xl:px-10 2xl:pb-10 px-7 pb-7 pt-5 rounded-xl shadow-lg shadow-primary/40"
                            >
                                <MdOutlineFormatQuote className="xl:text-7xl text-4xl text-black/10  mb-2" />
                                <p className="xl:text-sm text-xs font-medium">
                                    Discovering Plan Pixel was a game-changer
                                    for our team. The intuitive interface and
                                    robust collaboration features transformed
                                    the way we manage projects.{" "}
                                </p>
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="">
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src={avatar}
                                            alt="avatar"
                                        ></Image>
                                    </div>
                                    <div className="">
                                        <h6 className="font-semibold 2xl:text-base text-sm">
                                            Johnathan Winters
                                        </h6>
                                        <p className="opacity-45 text-xs">
                                            Project Manager
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:mt-16 xl:space-y-10 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-white 2xl:px-10 2xl:pb-10 px-7 pb-7 pt-5 rounded-xl shadow-lg shadow-primary/40"
                            >
                                <MdOutlineFormatQuote className="xl:text-7xl text-4xl text-black/10  mb-2" />
                                <p className="xl:text-sm text-xs font-medium">
                                    Discovering Plan Pixel was a game-changer
                                    for our team. The intuitive interface and
                                    robust collaboration features transformed
                                    the way we manage projects.{" "}
                                </p>
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="">
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src={avatar}
                                            alt="avatar"
                                        ></Image>
                                    </div>
                                    <div className="">
                                        <h6 className="font-semibold 2xl:text-base text-sm">
                                            Johnathan Winters
                                        </h6>
                                        <p className="opacity-45 text-xs">
                                            Project Manager
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-white 2xl:px-10 2xl:pb-10 px-7 pb-7 pt-5 rounded-xl shadow-lg shadow-primary/40"
                            >
                                <MdOutlineFormatQuote className="xl:text-7xl text-4xl text-black/10  mb-2" />
                                <p className="xl:text-sm text-xs font-medium">
                                    Discovering Plan Pixel was a game-changer
                                    for our team. The intuitive interface and
                                    robust collaboration features transformed
                                    the way we manage projects.{" "}
                                </p>
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="">
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src={avatar}
                                            alt="avatar"
                                        ></Image>
                                    </div>
                                    <div className="">
                                        <h6 className="font-semibold 2xl:text-base text-sm">
                                            Johnathan Winters
                                        </h6>
                                        <p className="opacity-45 text-xs">
                                            Project Manager
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
