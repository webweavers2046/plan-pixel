"use client";

// Add this import at the top if it's not already there
import React, { useState } from "react";

import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { navLinksData } from "./navLinksData";
import Image from "next/image";
import OpenMenu from "./MenuBar";
import LogoAndName from "./LogoAndName";
import Navlinks from "./NavLinks";
import RevealMenu from "./RevealMenu";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // This will open menu bar
  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav className=" container mx-auto bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between md:justify-around mx-auto p-4">
        <LogoAndName />
        {/* All Nav links  */}
        <Navlinks />
        {/* Hambarger menu for small device  */}
        <div />
        {/* passing handler to open menu */}
        <OpenMenu handleToggleMenu={handleToggleMenu} isOpenMenu={isOpenMenu} />
        <div className=" hidden md:block">
          <PrimaryButton
            buttonText="Get started"
            onClickHandler={"handler name"}
          />
        </div>
      </div>
      <RevealMenu isOpenMenu={isOpenMenu} handleToggleMenu={handleToggleMenu} />
    </nav>
  );
};

export default Navbar;
