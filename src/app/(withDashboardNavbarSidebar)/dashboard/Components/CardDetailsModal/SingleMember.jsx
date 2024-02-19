import Image from 'next/image';
import member01Img from "@/assets/team-members/sami.jpg";
import useUser from '@/hooks/useUser';

const SingleMember = ({member}) => {

    const {data : memberData} = useUser(member);
    // console.log(memberData);
    return (
        <Image
            width={30}
            height={30}
            className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
            src={memberData?.image}
            alt=""
        />
    );
};

export default SingleMember;