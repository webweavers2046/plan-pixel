"use client";

import React from "react";
import ChoosePlanBtn from "../ChoosePlanBtn/ChoosePlanBtn";
import { motion } from "framer-motion";

const PricePlans = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$12",
            description:
                "Get started with unlimited task creation and management.",
            offers: [
                "Ideal for individuals and freelancers.",
                "Unlimited task creation and management.",
                "Basic collaboration features.",
                "Standard customer support.",
                "Ideal for individuals and freelancers.",
            ],
            bgColor: "rgba(251, 188, 5, 0.50)",
            btnHover: "hover:bg-[#fbbc05cc] hover:text-white hover:border-none",
            planName: "basic",
        },
        {
            name: "Enterprise Plan",
            price: "$30",
            description:
                "Customize workflows and project boards to fit your unique needs.",
            offers: [
                "Tailored for large organizations and businesses.",
                "Includes all features from Pro Plan.",
                "24/7 premium customer support.",
                "All features from the Pro Plan.",
                "Includes all features from Pro Plan.",
                "Customizable workflows and project boards.",
                "Standard customer support.",
                "Dedicated account manager.",
                "Enjoy the services of a dedicated account manager and 24/7 premium customer support.",
            ],
            bgColor: "rgba(80, 181, 119, 0.50)",
            btnHover: "hover:bg-[#50B577] hover:text-white hover:border-none",
            planName: "enterprise",
        },
        {
            name: "Pro Plan",
            price: "$23",
            description:
                "Enhance collaboration with real-time chat and advanced reporting.",
            offers: [
                "Perfect for small to medium-sized teams.",
                "Includes all features from Basic Plan.",
                "Basic collaboration features.",
                "Standard customer support.",
                "Advanced task analytics and reporting",
                "Priority customer support for a more responsive experience.",
            ],
            bgColor: "rgba(147, 198, 72, 0.5)",
            btnHover: "hover:bg-[#93c648cc] hover:text-white hover:border-none",
            planName: "pro",
        },
    ];

    return (
        <section className="lg:mt-20 md:mt-12 mt-6 lg:mb-44 mb-32">
            <h5 className="text-[#50B577] text-center text-xl font-bold">
                Pricing
            </h5>
            <h3 className="md:text-5xl text-3xl font-bold mt-3 text-center">
                Right plan for you
            </h3>

            <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-1 gap-5 md:w-3/4 lg:w-full mx-auto p-3 lg:p-0">
                {plans.map((plan, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 90 + index * 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + index * 0.4 }}
                        key={index}
                    >
                        <h4
                            className="text-2xl font-bold px-9 rounded-t-lg pt-14"
                            style={{ backgroundColor: plan.bgColor }}
                        >
                            {plan.name}
                        </h4>
                        <div
                            style={{ backgroundColor: plan.bgColor }}
                            className="px-9 rounded-b-lg mt-[2px] pt-14"
                        >
                            <h2 className="font-bold text-6xl italic">
                                {plan.price}{" "}
                                <span className="text-xl">/Month</span>
                            </h2>
                            <p className="mt-5 mb-8">{plan.description}</p>
                            <ul>
                                {plan.offers.map((offer, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-4 mb-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M16 8L8.70711 15.2929C8.31658 15.6834 7.68342 15.6834 7.29289 15.2929L4 12"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M22 8L14.7071 15.2929C14.3166 15.6834 13.6834 15.6834 13.2929 15.2929L11 13"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span>{offer}</span>
                                    </li>
                                ))}
                            </ul>
                            <ChoosePlanBtn
                                name={plan?.planName}
                                price={plan?.price}
                                btnHover={plan?.btnHover}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PricePlans;
