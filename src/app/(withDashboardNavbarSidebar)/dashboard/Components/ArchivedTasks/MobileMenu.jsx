import Toggler from "@/components/Common/CommonModal/Toggler";
import FilterModal from "@/components/Common/Filter/FilterModal";
import ListBoxDropdown from "@/components/Common/ListBoxDropdown/ListBoxDropdown";
import useGlobalContext from "@/hooks/useGlobalContext";
import { FiPlusSquare } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { IoFilterOutline } from "react-icons/io5";
// setOpenFilter={setOpenFilter} openFilter={openFilter} openModal={openModal} setOpenModal={setOpenModal}setOpenFilter={setOpenFilter} openFilter={openFilter} openModal={openModal} setOpenModal={setOpenModal}
const MobileMenu = ({setOpenFilter,openFilter,openModal,setOpenModal}) => {
    const {setIsActive,isActive,isTogglerEnabled,setIsTogglerEnabled,} = useGlobalContext()


    return (
        
        <div className={`md:hidden  fixed bg-[#212322] p-3 rounded-lg text-white right-0  w-72 h-[400px] top-32 z-40 items-center justify-between px-2  border-b pb-2 pt-1   border-white/50`}>
        <div className=" grid  gap-3 text-[16px]">
          <div
          onClick={() => setIsActive("all-tasks")}
          className={`flex items-center gap-1 ${
            isActive === "all-tasks" ? "bg-black" : ""
          } p-2 px-3 cursor-pointer rounded-lg transition-all duration-300`}
          >
            <GoTasklist className="text-[18px]" />
            All tasks
          </div>
          <div
            onClick={() => setIsActive("archived-tasks")}
            className={`${
              isActive === "archived-tasks" ? "bg-black" : ""
            } p-2 px-3 rounded-lg flex items-center gap-1 cursor-pointer transition-all duration-300 `}
          >
            <HiOutlineArchiveBox/>
            Archived tasks
          </div>
          {/* <ListBoxDropdown/> */}
        </div>
        <div className=" grid gap-1 p-2 rounded-lg">
          <div  
          onClick={() => setOpenFilter(!openFilter)}
          className={`${
            openFilter ? "bg-black" : ""
          } h-10 px-3 rounded-lg flex items-center gap-2 cursor-pointer`}
        >
            <span>Filteer</span>
            {/* Filtering modal */}
          </div>
          <div
                className={`${
                  openFilter ? "visible opacity-100" : "invisible opacity-0"
                } transition-all duration-300`}
              >
                {
                  <FilterModal
                    openFilter={openFilter}
                    setOpenFilter={setOpenFilter}
                  />
                }
              </div>

              <button
                onClick={() => setOpenModal(!openModal)}
                className="bg-black text-white flex text-sm px-5 py-3 rounded-md "
              >
                <FiPlusSquare className="inline mb-1 me-2 text-xl" /> Add Task
              </button>


          {/* <div>
            <Toggler enabled={isTogglerEnabled} setEnabled={setIsTogglerEnabled}/>
          </div> */}
        </div>
      </div>
    );
};
export default MobileMenu;