import Link from "next/link";
import { navLinksData } from "./navLinksData";
import MenuTitle from "./MenuTitle";
import { CiHome } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { MdGroups2 } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdArrowDropup } from "react-icons/io";
import CloseMenu from "./closeMenu";




const RevealMenu = ({ isOpenMenu, handleToggleMenu}) => {
      // Icons for visual routes 
      const menuItemIcons = [
            <CiHome key="home" />,
            <CiBadgeDollar key="badge" className="text-[30px]" />,
            <MdGroups2 key="groups" />,
            <MdPhoneEnabled key="phone" />,
          ];
          
      return (
        <div
          className={` transition-all duration-500 ease-in-out transform ${isOpenMenu ? 'w-full sm:w-1/2 md:w-0 opacity-100' : 'w-0 opacity-0'} absolute top-0 right-0 bg-bgBlack h-[100%] text-white pt-24`}
        >
            
      {/* <div className="outline outline-[1px] outline-[#2e2e2e]"></div> */}
        <MenuTitle isOpenMenu={isOpenMenu}/>
        {/* passing handler to close the menu */}
        <CloseMenu handleToggleMenu={handleToggleMenu}/>
              {navLinksData?.map((navLink,index) => (
            <div className=" hover:bg-[#000] relative justify-between cursor-pointer flex transition-all transform px-2 sm:px-6 items-center mt-2" key={navLink.id}>
              <div className="flex items-center">
              <div className="h-6 w-6 rounded-full p-1 flex justify-center items-center">{menuItemIcons[index]}</div>
              <Link
                href="#" // Change to navLink.url when you have proper URLs
                className="block text-[13px] sm:text-[15px] text-left py-2 px-2 rounded   md:p-0"
                aria-current="page">
                {navLink?.text}
              </Link>

              </div>
              <TiArrowSortedDown/>
              {/* <IoMdArrowDropup/> */}
            </div>
          ))}
        </div>
      );
    };
    
    export default RevealMenu;
    