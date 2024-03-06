import useUser from "@/hooks/useUser";
import Image from "next/image";

const Member = ({ member }) => {
    console.log(member);
    const { data: userData } = useUser(member?.email);
    return (
        <div className="flex items-center justify-between w-full gap-x-4 px-4 py-2.5 bg-tertiary/30 mb-1 rounded-md">
            <div className="flex items-center gap-x-4">
                <Image
                    width={44}
                    height={44}
                    className="rounded-full object-cover w-10 h-10 border-4 border-tertiary/30"
                    src={userData?.image}
                    alt="timeIcon"
                />

                <div className="text-left">
                    <p className=" font-semibold">{userData?.name}</p>
                    <p className="text-xs font-medium text-black/50">
                        {member?.email}
                    </p>
                </div>
            </div>
            <h4 className="text-xl font-semibold    ">${member?.amount}</h4>
        </div>
    );
};

export default Member;
