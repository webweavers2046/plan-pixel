"use client";

import VerticalNumber from "../VerticalNumber/HorizontalNumber";
import { motion } from "framer-motion";

const EnterpriseOffer = () => {
    const enterpriseDetails = [
        {
            _id: 1,
            title: "Customization and Scalability",
            description:
                "The Enterprise Plan offers a higher degree of customization, allowing organizations to tailor workflows and project boards to meet their specific and evolving needs. It provides scalability to accommodate a growing number of users and projects within the organization.",
            number: 1,
            color: "FBBC05",
            verticalLine: true,
        },
        {
            _id: 2,
            title: "Dedicated Account Manager",
            description:
                "With the Enterprise Plan, users benefit from the services of a dedicated account manager. This individual provides personalized assistance, ensuring that the organization maximizes the platform's potential.",
            number: 2,
            color: "93C648",
            verticalLine: true,
        },
        {
            _id: 3,
            title: "24/7 Premium Customer Support",
            description:
                "The Enterprise Plan includes 24/7 premium customer support, offering round-the-clock assistance for any issues or inquiries. This level of support is crucial for large organizations with diverse teams operating in different time zones.",
            number: 3,
            color: "50B577",
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row mb-24 md:w-3/4 lg:w-full mx-auto">
            <h2 className="text-3xl font-bold w-full text-center lg:text-left mb-10 lg:mb-0">
                Why Enterprise is better?
            </h2>
            <div>
                {enterpriseDetails?.map((offer, idx) => (
                    <motion.div
                        initial={{ opacity: 0, x: 90 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 + idx * 0.4 }}
                        key={offer?._id}
                        className="flex gap-3"
                    >
                        <VerticalNumber
                            num={offer?.number}
                            color={offer?.color}
                            verticalLine={offer?.verticalLine}
                        ></VerticalNumber>
                        <div className="mt-2">
                            <h4 className="text-xl font-semibold">
                                {offer?.title}
                            </h4>
                            <p className="pl-6 mt-5">{offer?.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EnterpriseOffer;
