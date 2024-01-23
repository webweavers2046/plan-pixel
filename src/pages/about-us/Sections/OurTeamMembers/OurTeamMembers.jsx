import Image from "next/image";
import React from "react";
import member from "@/assets/team-members/member.png";

const OurTeamMembers = () => {
  const members = [1, 2, 3, 4, 5, 6];
  return (
    <div className="px-24">
      <h2 className="text-[40px] font-bold mb-10">Our Team Members:</h2>
      <div className="grid grid-cols-3 gap-10">
        {members.map((mem) => 
          <Image
            key={mem}
            className="h-full w-auto lg:mb-0.5  mb-2.5 rounded-br-[80px]"
            src={member}
            alt="heartbeat givers' logo"
          ></Image>
        )}
      </div>
    </div>
  );
};

export default OurTeamMembers;
