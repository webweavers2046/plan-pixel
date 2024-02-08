"use client";
import Image from "next/image";
import Calender from "./home/Calender";
import MyTask from "./home/MyTask";
import TeamMembers from "./home/TeamMembers";
import TimeTruck from "./home/TimeTruck";
import dashboardImage from "@/assets/lustrations.png";
import { useContext, useState } from "react";
import { AuthContext } from "@/Providers/AuthProviders";
import useUser from "@/hooks/useUser";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const userData = useUser(user?.email); 
    const [date, setDate] = useState(
      new Date()
    );
    console.log(userData);

    return (
      <div className="p-6">
        <div className="bg-green-500/20 py-10 px-16 rounded-xl mb-6 flex justify-between items-center">
          <div className="">
            <p className="text-lg font-semibold pb-2">Hi! Welcome Back</p>
            <h2 className="text-5xl">{userData?.name}</h2>
          </div>
          <div className="w-[150px]">
            <Image src={dashboardImage} alt="Dashboard home banner"></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6">
          {/* colum 1 */}
          <div>
            <TeamMembers />
          </div>
          {/* colum 2 */}

          <div>
            <MyTask date={date} />
          </div>
          {/* colum 3 */}
          <div>
            <Calender date={date} setDate={setDate} />
            <TimeTruck />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
