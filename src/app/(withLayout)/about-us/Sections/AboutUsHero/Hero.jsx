import Image from "next/image";
import React from "react";
import logo from "@/assets/logo2.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px md:px-20 md:pt-20 my-10 md:pb-40">
      <Image
        className="lg:mb-0.5  mb-2.5"
        src={logo}
        alt="heartbeat givers' logo"
      ></Image>
      <h1 className="text-4xl md:text-6xl font-semibold mb-7 mt-3">Plan Pixel</h1>
      <p className="md:leading-loose text-lg">
        Welcome to Plan Pixel, where innovation meets organization in the
        digital landscape. At Plan Pixel, we believe <br /> in transforming the way
        individuals and teams approach project management. Our journey began
        with a <br /> simple yet powerful idea: to create a platform that seamlessly
        integrates pixels of <br /> creativity with the precision of planning.
      </p>
    </div>
  );
};

export default Hero;
