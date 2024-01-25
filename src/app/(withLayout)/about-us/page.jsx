import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/footer/Footer";
import React from "react";
import Hero from "./Sections/AboutUsHero/Hero";
import OurTeamMembers from "./Sections/OurTeamMembers/OurTeamMembers";
import OurVision from "./Sections/OurVision/OurVision";
import WhyPlanPixel from "./Sections/WhyPlanPixel/WhyPlanPixel";

const index = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Hero />
            <OurTeamMembers />
            <OurVision />
            <WhyPlanPixel />
        </div>
    );
};

export default index;
