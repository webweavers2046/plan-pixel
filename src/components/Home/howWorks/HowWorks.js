"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const HowWorks = () => {
    return (
        <div className="container mx-auto md:px-24 px-5  mb-10 md:mt-10 md:mb-48 ">
            <h2 className="lg:text-6xl md:text-5xl text-2xl text-center font-semibold md:mb-16 mb-2">
                How It Works & Get <br /> Best Output
            </h2>
            <div className="flex items-center justify-center  gap-2 mx-4 lg:mx-0">
                <span className="bg-[#FBBC05] lg:block hidden px-3 py-1 text-white rounded-b-xl rounded-tr-xl">
                    1
                </span>
                <span className=" border-t-2 lg:flex hidden border-dashed border-black  grow"></span>
                <span className="bg-[#93C648] lg:block hidden px-3 py-1 text-white rounded-b-xl rounded-tr-xl">
                    2
                </span>
                <span className=" border-t-2 border-dashed border-black lg:flex hidden flex-grow"></span>
                <span className="bg-[#50B577] lg:block hidden px-3 py-1 text-white rounded-b-xl rounded-tr-xl">
                    3
                </span>
                <span className=" border-t-2 lg:flex hidden border-dashed border-black flex-grow"></span>
            </div>
            {/* divider */}

            <div className="grid lg:grid-cols-3  gap-6 mt-8">
                {/* card */}
                {cardsData.map((card, index) => (
                    <Card key={index} index={index} {...card} />
                ))}
            </div>
        </div>
    );
};
export default HowWorks;

const Card = ({ index, title, description }) => {
    const speed = index * 0.3;

    return (
        <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 + speed }}
            className={`mx-4 lg:mx-0 p-10 rounded-b-2xl rounded-tr-2xl ${
                index === 0
                    ? "bg-[rgba(147,198,72,0.3)]"
                    : index === 1
                      ? "bg-[rgba(80,181,119,0.3)]"
                      : "bg-[rgba(251,188,5,0.3)]"
            }`}
        >
            <div>
                <div className="flex items-center lg:hidden gap-3 my-4 ">
                    <span className="bg-[#FBBC05]  px-3 py-1 text-white rounded-full">
                        {index + 1}
                    </span>
                    <span className=" border-t-2 flex  border-dashed border-black  grow"></span>
                </div>
                <h3 className="text-2xl font-bold md:text-[25px]">{title}</h3>
                <p className="text-[16px] text-[#494949] mt-2 md:mt-3">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const cardsData = [
    {
        title: "Sign Up or Log In",
        description:
            "Begin your journey by signing up for a new account or logging in if you're already a member.",
    },
    {
        title: "Personalized Dashboard Overview",
        description:
            "Navigate effortlessly through different sections to gain comprehensive insights into your work.",
    },
    {
        title: "Dynamic Task Organization",
        description:
            "Enhance organization by assigning labels or tags, allowing for quick filtering and sorting.",
    },
];
