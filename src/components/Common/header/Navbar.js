"use client";

// Add this import at the top if it's not already there
import React from "react";

import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { navLinksData } from "./navLinksData";
import Image from "next/image";
import MenuBar from "./MenuBar";
import LogoAndName from "./LogoAndName";
import Navlinks from "./NavLinks";

const Navbar = () => {
  
  const handleReveal = () => {
    console.log('click')
  }

  return (
    <nav className="container mx-auto bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-around mx-auto p-4">
        <LogoAndName />
        {/* All Nav links  */}
        <Navlinks />
        {/* Hambarger menu for small device  */}
        <div />
        <MenuBar handleReveal={handleReveal} />
        <div className=" hidden md:block">
        <PrimaryButton
          buttonText="Get started"
          onClickHandler={"handler name"}
        />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
