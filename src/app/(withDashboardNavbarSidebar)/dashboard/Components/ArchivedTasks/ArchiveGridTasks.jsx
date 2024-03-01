import { FcComments, FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";
import Avater from "./Avater";
import Image from "next/image";
import { FaCaretLeft } from "react-icons/fa6";
import AreYouSureModal from "@/components/Common/CommonModal/AreYouSureModal";
import useGlobalContext from "@/hooks/useGlobalContext";
import SingleArchivedTask from "./SingleArchivedTask";

const ArchiveGridTasks = ({ handleSelectedIdsChanges, setIsOpen, isOpen, archivedTasks }) => {

 



  // console.log(archivedTasks);


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 px-2 mt-6">
      {archivedTasks?.map((task) => {
        return (
         <SingleArchivedTask 
         key={task?._id} 
         task={task} 
         handleSelectedIdsChanges={handleSelectedIdsChanges}
         setIsOpen={setIsOpen}
         isOpen={isOpen}
         ></SingleArchivedTask>
        );
      })}
    </div>
  );
};
export default ArchiveGridTasks;