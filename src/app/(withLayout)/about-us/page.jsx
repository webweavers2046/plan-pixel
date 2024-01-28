import React from "react";
import Hero from "./Sections/AboutUsHero/Hero";
import OurTeamMembers from "./Sections/OurTeamMembers/OurTeamMembers";
import OurVision from "./Sections/OurVision/OurVision";
import WhyPlanPixel from "./Sections/WhyPlanPixel/WhyPlanPixel";

const index = () => {
    return (
        <div className="container mx-auto px-6">
            <Hero />
            <OurTeamMembers />
            <OurVision />
            <WhyPlanPixel />
        </div>
    );
};

export default index;
