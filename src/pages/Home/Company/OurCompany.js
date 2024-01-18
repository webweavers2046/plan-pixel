"use client";
import style from "./company.module.css";
import Image from "next/image";

const OurCompany = () => {
  const logos = [
    { id: 1, src: "/asset/img/google.png", alt: "Google" },
    { id: 2, src: "/asset/img/meta.png", alt: "Meta" },
    { id: 3, src: "/asset/img/netflix.png", alt: "Netflix" },
    { id: 4, src: "/asset/img/microsoft2.png", alt: "Microsoft" },
    { id: 5, src: "/asset/img/paypal.png", alt: "PayPal" },
  ];
  return (
    <div>
      <h1 className="text-center mb-6">Trusted by Fast - Growing Companies</h1>
      <div className={`${style.gridLayout} container md:mx-auto md:px-32 px-3 `}>
        {logos?.map((img) => (
          <div
            key={img.id}
            className="bg-white py-2 h-20 px-4 flex justify-center items-center rounded-lg shadow-sm">
            <Image
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
              width={110}
              height={80}
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCompany;
