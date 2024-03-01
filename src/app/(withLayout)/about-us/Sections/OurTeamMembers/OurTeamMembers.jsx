import Image from "next/image";
import React from "react";
import member from "@/assets/team-members/member.png";
import useUser from "@/hooks/useUser";

const OurTeamMembers = () => {
  const members = [1, 2, 3, 4, 5, 6];
  return (
    <div className="">
      <h2 className="text-[30px] md:text-[40px] font-bold mb-10">Our Team Members:</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((mem) => 
          <Image
            key={mem}
            className="lg:mb-0.5  mb-2.5 rounded-xl rounded-br-[100px]"
            src={member}
            alt="Team members image"
          ></Image>
        )}
      </div>
    </div>
  );
};

export default OurTeamMembers;
