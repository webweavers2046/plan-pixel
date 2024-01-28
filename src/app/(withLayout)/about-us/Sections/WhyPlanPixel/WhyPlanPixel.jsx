import React from "react";

const WhyPlanPixel = () => {
  return (
    <div className="grid mb-10 md:mb-28">
      {/* 1st Row */}
      <div className="flex justify-between flex-wrap gap-6">
        {/* 1st Reason */}
        <div className="text-center">
          <h4 className="px-4 py-2 rounded-full bg-[#FBBC05] inline-block">
            1
          </h4>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 mt-2">
            Pixel-Perfect Precision
          </h3>
          <p className="leading-normal">
            We understand that every detail matters. <br /> With Plan Pixel,
            your projects are meticulously organized, <br /> ensuring
            pixel-perfect precision in execution.
          </p>
        </div>

        {/* 2nd Reason */}
        <div className="text-center">
          <h4 className="px-4 py-2 rounded-full bg-[#93C648] inline-block">
            2
          </h4>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 mt-2">
            Creative Collaboration
          </h3>
          <p className="leading-normal">
            Our platform goes beyond standard task management. <br />
            Its a space where creativity flourishes, and teams <br />
            collaborate seamlessly, bringing visions to life.
          </p>
        </div>
      </div>

      <div className="order-first md:order-none my-10">
        <h3 className="text-[#50B577] text-center text-4xl md:text-5xl font-bold tracking-wide">
          Why Plane Pixel?
        </h3>
      </div>

      {/* 3rd Row */}
      <div className="flex justify-between flex-wrap gap-6">
        {/* 3rd Reason */}
        <div className="text-center">
          <h4 className="px-4 py-2 rounded-full bg-[#50B577] inline-block">
            3
          </h4>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 mt-2">
            Pixel-Perfect Precision
          </h3>
          <p className="leading-normal">
            We understand that every detail matters. <br /> With Plan Pixel,
            your projects are meticulously organized, <br /> ensuring
            pixel-perfect precision in execution.
          </p>
        </div>

        {/* 4th Reason */}
        <div className="text-center">
          <h4 className="px-4 py-2 rounded-full bg-[#FBBC05] inline-block">
            4
          </h4>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 mt-2">
            Creative Collaboration
          </h3>
          <p className="leading-normal">
            Our platform goes beyond standard task management. <br />
            Its a space where creativity flourishes, and teams <br />
            collaborate seamlessly, bringing visions to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPlanPixel;
