import Image from "next/image";
import React from "react";
import camera from "@/assets/icons/camera-icon.png";

const OurVision = () => {
  return (
    <div className="flex justify-between items-center flex-wrap my-10 md:my-28">
      {/* Left Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-[30px] md:text-[40px] font-bold mb-5 md:mb-10">Our Vision</h2>
        <div className="text-lg leading-normal space-y-5">
          <p>
            We envision a world where projects are executed with precision,
            creativity is celebrated, and collaboration knows no bounds. Plan
            Pixel is the manifestation of this vision—a tool designed to empower
            individuals, teams, and organizations to navigate the complexities
            of project management with ease.
          </p>
          <p>
            At the core of our philosophy is the understanding that every
            project is a unique canvas, and each pixel contributes to the grand
            masterpiece. Plan Pixel is more than just a task management
            platform; it&apos;s a dynamic space where ideas come to life,
            projects find structure, and teams collaborate with unparalleled
            synergy.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-1 w-14 bg-[#50B577]"></div>
            <p className="font-medium">Plan Pixel</p>
          </div>
        </div>
      </div>

      {/* Right Image Content */}

        <Image
          className=""
          src={camera}
          alt="camera image"
        ></Image>
    </div>
  );
};

export default OurVision;
