"use client";

import { useState } from "react";
import DashboardNavbar from "./dashboard/Components/DashboardNavbar";
import DashboardSidebar from "./dashboard/Components/DashboardSidebar";
import "@/styles/globals.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const [openDashboard, setOpenDashboard] = useState(false);

  return (
    <section>
      <div className="grid lg:grid-cols-12 h-screen">
      <div
    className={`transform duration-1000 transition-transform ${
      openDashboard
        ? "block w-[300px] sm:w-72 md:w-60 z-50 fixed top-0 left-0 bg-[#D1D5DB]"
        : "hidden lg:block"
    } lg:col-span-2`}
  >
    <DashboardSidebar openDashboard={openDashboard} setOpenDashboard={setOpenDashboard} />
  </div>

        <div className="col-span-9">
          <div className={`${openDashboard?"filter blur-[3px]":""}`}>
            <DashboardNavbar
              openDashboard={openDashboard}
              setOpenDashboard={setOpenDashboard}
            />
          </div>
          <div className={`${openDashboard?"filter blur-[3px]":""}`}>
          {children}

          </div>
        </div>
      </div>
    </section>
  );
}
