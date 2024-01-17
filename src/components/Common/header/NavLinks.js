"use client";

import Link from "next/link";
import { navLinksData } from "./navLinksData";

const Navlinks = () => {
  return (
    <div>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {/* this links are in navLinksData file */}
          {navLinksData?.map((navLink) => (
            <li key={navLink.id}>
              <Link
                href="#" // Change to navLink.url when you have proper URLs
                className="block py-2 px-3 text-[black] rounded   md:p-0"
                aria-current="page">
                {navLink?.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navlinks;
