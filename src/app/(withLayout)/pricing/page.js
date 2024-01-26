import React from "react";
import PricePlans from "./PricePlans/PricePlans";
import EnterpriseOffer from "./EnterpriseOffers/EnterpriseOffers";

const page = () => {
    return (
        <div className="container mx-auto lg:px-24 px-4">
            {/* Pricing plans */}
            <PricePlans></PricePlans>
            {/* EnterpriseOffers */}
            <EnterpriseOffer></EnterpriseOffer>
        </div>
    );
};

export default page;
