"use client";
import { logos } from "./companiesLogosData";
import style from "./company.module.css";
import Image from "next/image";


const OurCompany = () => {
  return (
    <div>
      <h1 className="text-[13px] md:text-[16px] text-center mb-6">Trusted by Fast - Growing Companies</h1>
      <div className={`${style.gridLayout} container md:mx-auto md:px-28 px-3 `}>
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
