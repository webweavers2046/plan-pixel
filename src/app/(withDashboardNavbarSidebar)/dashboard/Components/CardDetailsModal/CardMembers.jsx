import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/shakil.jpg";
import { GoPlus } from "react-icons/go";
import Image from "next/image";

const CardMembers = () => {
    return (
        <div className="flex items-center mt-4">
            <div className="flex -space-x-4 rtl:space-x-reverse">
                <Image
                    width={30}
                    height={30}
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={member01Img}
                    alt=""
                />
                <Image
                    width={30}
                    height={30}
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={member02Img}
                    alt=""
                />
                <Image
                    width={30}
                    height={30}
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={member03Img}
                    alt=""
                />
                <Image
                    width={30}
                    height={30}
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={member04Img}
                    alt=""
                />
                <button className="w-8 h-8 border-2 flex justify-center items-center border-white rounded-full bg-[#D9D9D9]">
                    <GoPlus></GoPlus>
                </button>
            </div>

        </div>
    );
};

export default CardMembers;