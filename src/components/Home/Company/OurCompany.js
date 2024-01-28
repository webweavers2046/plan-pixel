"use client";

import Image from "next/image";
// import logos from "./companiesLogosData";
import style from "./company.module.css";

const logos = [
    { id: 1, src: "/asset/img/google.png", alt: "Google" },
    { id: 2, src: "/asset/img/meta.png", alt: "Meta" },
    { id: 3, src: "/asset/img/netflix.png", alt: "Netflix" },
    { id: 4, src: "/asset/img/pandg 1.png", alt: "Microsoft" },
    { id: 5, src: "/asset/img/paypal (1).png", alt: "PayPal" },
];

const OurCompany = () => {
    return (
        <div className="md:px-18 my-16">
                <h1 className="text-[13px] md:text-[20px] text-center mb-10">
                Trusted by Fast - Growing Companies
            </h1>
            <div
                className={`${style.gridLayout} container mx-auto`}
            >
                {logos?.map(((img,index) => (
                    <div
                        key={img.id}
                        className={` h-20  grid rounded-lg shadow-sm justify-center`}
                    >
                        <Image
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
                            width={100}
                            height={80}
                            src={img.src}
                            alt={img.alt}
                        />
                    </div>
                )))}
            </div>
        </div>
    );
};

export default OurCompany;
