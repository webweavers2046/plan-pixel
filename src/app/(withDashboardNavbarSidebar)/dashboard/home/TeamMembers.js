import Image from "next/image";
import memberImg from '@/assets/team-members/member.png'
import MassageIcon from '@/assets/dashboard/Message.svg'
const TeamMembers = () => {
    return (
      <div className="shadow-md rounded-xl p-6 max-h-dvh overscroll-auto">
        <h1 className=" text-2xl font-bold p-4">TeamMember</h1>
        {teamMemberData.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
          />
        ))}
      </div>
    );
};
export default TeamMembers;



function TeamMember({ name, role, avatar }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-[#F9F9F9] mb-3">
      <div className="flex items-center gap-2">
        <Image
        width={44}
        height={44}
          className="rounded-full"
          src={avatar}
          alt="timeIcon"
        />

        <p className="text-sm font-semibold">{name} <br/> <span className="text-xs font-medium">{role}</span></p>
      </div>
      <Image
        className=""
        src={MassageIcon}
        alt="team member"
      />
    </div>
  );
}














const teamMemberData =[
  {
    name: "Abdul Hamid",
    role: "Member",
    avatar: memberImg
  },
  {
    name: "Shakil Ahmed",
    role: "Admin",
    avatar: memberImg
  },
  {
    name: "MD Rahim",
    role: "Moderator",
    avatar: memberImg
  },
  {
    name: "Ahetesham Sajid",
    role: "Admin",
    avatar: memberImg
  },
  {
    name: "Mazharul Shishir",
    role: "Member",
    avatar: memberImg
  },
];
