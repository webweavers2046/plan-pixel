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
import WorkSpaceDetails from "./Components/WorkSpaceDetails/WorkSpaceDetails";
import TaskBarGraph from "./Components/TaskBarGraph/TaskBarGraph";
import OverviewWidgetBg03 from "@/assets/pattern/admin-info-pattern03copy.png";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: userData } = useUser(user?.email);
  const [date, setDate] = useState(new Date());


  return (
    <div className="py-6 w-full">
      <div
        className="border-2 border-secondary md:py-10 md:px-16 p-4 rounded-xl mb-6 flex justify-between items-center"
        style={{
          backgroundImage: `url(${OverviewWidgetBg03.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="">
          <p className="md:text-lg font-semibold pb-2">Hi! Welcome Back</p>
          <h2 className="md:text-5xl text-3xl">{userData?.name}</h2>
        </div>
        <div className="w-[150px]">
          <Image src={dashboardImage} alt="Dashboard home banner"></Image>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
        <div className="h-fit ">
          <WorkSpaceDetails></WorkSpaceDetails>
        </div>
        <div className="h-fit ">
          <TaskBarGraph></TaskBarGraph>
        </div>
        <div className="h-fit ">
          <Calender date={date} setDate={setDate}></Calender>
        </div>
        <div className="h-fit hidden lg:block">
          <TeamMembers></TeamMembers>
        </div>
        <div className="h-fit">
          <TimeTruck></TimeTruck>
        </div>
        <div className="h-fit">
          <MyTask date={date.toISOString().substring(0, 10)} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
