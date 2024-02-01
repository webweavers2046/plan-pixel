import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const AllWorkspace = () => {
    return (
        <div className="w-full px-10">
            <h3 className="text-xl font-semibold mb-5">All workspace</h3>
            
                <div className="w-full h-16 bg-gray-200 rounded-md flex items-center justify-between px-5 py-2">
                    <h1 className="text-lg ">Ring of fire</h1>
                    <div className="flex gap-x-4">
                        <Image width={10} height={10} alt="member pic"></Image>
                        <BsThreeDotsVertical className="cursor-pointer" />
                    </div>
                </div>
                <div className="w-full h-16 bg-gray-200 rounded-md flex items-center justify-between px-5 py-2 mt-2">
                    <h1 className="text-lg ">Hello vai workspace</h1>
                    <div className="flex gap-x-4">
                        <Image width={10} height={10} alt="member pic"></Image>
                        <BsThreeDotsVertical className="cursor-pointer" />
                    </div>
                </div>
                <div className="w-full h-16 bg-gray-200 rounded-md flex items-center justify-between px-5 py-2 mt-2">
                    <h1 className="text-lg ">Shuffle the Square</h1>
                    <div className="flex gap-x-4">
                        <Image width={10} height={10} alt="member pic"></Image>
                        <BsThreeDotsVertical className="cursor-pointer" />
                    </div>
                </div>
            </div>
       
    );
};

export default AllWorkspace;