"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/logo2.png";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center px md:px-20 md:pt-20 my-10 md:pb-40">
            <motion.div
                initial={{ opacity: 0, y: 180 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=""
            >
                <Image
                    className="lg:mb-0.5  mb-2.5"
                    src={logo}
                    alt="logo"
                ></Image>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 180 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-semibold mb-7 mt-3"
            >
                Plan Pixel
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 180 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="md:leading-loose text-lg"
            >
                Welcome to Plan Pixel, where innovation meets organization in
                the digital landscape. At Plan Pixel, we believe <br /> in
                transforming the way individuals and teams approach project
                management. Our journey began with a <br /> simple yet powerful
                idea: to create a platform that seamlessly integrates pixels of{" "}
                <br /> creativity with the precision of planning.
            </motion.p>
        </div>
    );
};

export default Hero;
