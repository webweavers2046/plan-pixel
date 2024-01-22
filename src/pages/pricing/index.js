import React from 'react';
import PricePlans from './PricePlans/PricePlans';

const index = () => {
    const basicOffers = [
        "Ideal for individuals and freelancers",
        "Unlimited task creation and management",
        "Basic collaboration features",
        "Standard customer support",
        "Ideal for individuals and freelancers"
    ]
    return (
        <div className='px-[190px]'>
            {/* Pricing plans */}
            <PricePlans></PricePlans>
        </div>
    );
};

export default index;