import Image from "next/image";
import React from "react";
import logo from "@/assets/logo2.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 md:px-20 pt-20 pb-40">
      <Image
        className="lg:mb-0.5  mb-2.5"
        src={logo}
        alt="heartbeat givers' logo"
      ></Image>
      <h1 className="text-3xl md:text-6xl font-semibold mb-7 mt-3">Plan Pixel</h1>
      <p className="leading-loose text-lg">
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
