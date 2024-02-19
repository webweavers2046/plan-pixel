
import { GoPlus } from "react-icons/go";
import Image from "next/image";
import SingleMember from "./SingleMember";

const CardMembers = ({ members }) => {
    // console.log(members);

    return (
        <div className="flex items-center mt-4">
            <div className="flex -space-x-4 rtl:space-x-reverse">
                {
                    members?.map(member =>
                        <SingleMember key={member} member={member}></SingleMember>
                    )}

                {/* <button className="w-8 h-8 border-2 flex justify-center items-center border-white rounded-full bg-[#D9D9D9]">
                    <GoPlus></GoPlus>
                </button> */}
            </div>

        </div>
    );
};

export default CardMembers;