import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const AllWorkspace = () => {
  const { workspaces } = useGlobalContext();

  return (
    <div className="w-full px-10 mt-10">
      <h3 className="text-xl font-semibold mb-5">All workspace</h3>
      {workspaces?.map((workspace) => {
        return <div key={workspace._id} className="w-full my-2 h-16 bg-gray-200 rounded-md flex items-center justify-between px-5 py-2">
          <h1 className="text-lg ">{workspace?.title}</h1>
          <div className="flex gap-x-4">
            <Image width={10} height={10} alt="member pic"></Image>
            <BsThreeDotsVertical className="cursor-pointer" />
          </div>
        </div>;
      })}
    </div>
  );
};

export default AllWorkspace;
