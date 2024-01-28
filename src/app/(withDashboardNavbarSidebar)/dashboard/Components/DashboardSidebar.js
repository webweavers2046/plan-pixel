"use client";
import { AuthContext } from "@/Providers/AuthProviders";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
const DashboardSidebar = ({ openDashboard,setOpenDashboard }) => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire({
          title: "Logged Out",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className={` bg-gray-300/20 mr-2 h-screen  relative `}>
      <IoClose
        className={`${!openDashboard&&"hidden"} text-2xl text-primary absolute top-3 right-5 text-[22px] cursor-pointer `}
        onClick={() => setOpenDashboard(false)}
      />

      <div className="py-4 px-3">
        <div>
          <Image
            className="w-auto max-h-9 lg:mb-0.5  mb-2.5"
            src={logo}
            alt="Plan Pixel"></Image>
        </div>
        <ul className="mt-12 text-black space-y-4">
          <li>
            <Link
              className="flex items-center  gap-x-4 bg-gray-100 px-4 py-2 rounded-md cursor-pointer font-semibold"
              href="/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 26"
                fill="none"
                style={{ minWidth: "22px" }}>
                <rect
                  x="-0.00390625"
                  width="12"
                  height="11.5"
                  rx="3"
                  fill="black"
                />
                <rect
                  x="15.459"
                  width="12.2637"
                  height="11.5"
                  rx="3"
                  fill="black"
                />
                <rect
                  x="15.459"
                  y="14.5"
                  width="12.2637"
                  height="11.5"
                  rx="3"
                  fill="black"
                />
                <rect
                  x="-0.00390625"
                  y="14.5"
                  width="12.2637"
                  height="11.5"
                  rx="3"
                  fill="black"
                />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-x-4 bg-gray-100 px-4 py-2 rounded-md cursor-pointer font-semibold"
              href="/dashboard/tasks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                style={{ minWidth: "22px" }}>
                <path
                  d="M14.7778 9.72222C14.7778 9.0779 15.3001 8.55556 15.9444 8.55556H21.3889C22.0332 8.55556 22.5556 9.0779 22.5556 9.72222C22.5556 10.3665 22.0332 10.8889 21.3889 10.8889H15.9444C15.3001 10.8889 14.7778 10.3665 14.7778 9.72222ZM15.9446 17.1111C15.3001 17.1111 14.7779 17.6335 14.7779 18.2778C14.7779 18.9221 15.3001 19.4444 15.9446 19.4444H21.3887C22.0332 19.4444 22.5554 18.9221 22.5554 18.2778C22.5554 17.6335 22.0332 17.1111 21.3887 17.1111H15.9446ZM12.1027 8.99162C12.5583 8.53602 12.5583 7.79732 12.1027 7.34171C11.6471 6.8861 10.9085 6.8861 10.4528 7.34171L8.16667 9.62786L7.43607 8.89727C6.98046 8.44166 6.24176 8.44166 5.78615 8.89727C5.33055 9.35287 5.33055 10.0916 5.78615 10.5472L7.34171 12.1027C7.79732 12.5583 8.53602 12.5583 8.99162 12.1027L12.1027 8.99162ZM12.1027 15.8973C12.5583 16.3529 12.5583 17.0915 12.1027 17.5471L8.99162 20.6582C8.53602 21.1139 7.79732 21.1139 7.34171 20.6582L5.78615 19.1027C5.33055 18.6471 5.33055 17.9085 5.78615 17.4529C6.24176 16.9972 6.98046 16.9972 7.43607 17.4529L8.16667 18.1834L10.4528 15.8973C10.9085 15.4417 11.6471 15.4417 12.1027 15.8973ZM5.05556 0C2.26344 0 0 2.26344 0 5.05556V22.9444C0 25.7365 2.26344 28 5.05556 28H22.9444C25.7365 28 28 25.7365 28 22.9444V5.05556C28 2.26344 25.7365 0 22.9444 0H5.05556ZM2.33333 5.05556C2.33333 3.55211 3.55211 2.33333 5.05556 2.33333H22.9444C24.4479 2.33333 25.6667 3.55211 25.6667 5.05556V22.9444C25.6667 24.4479 24.4479 25.6667 22.9444 25.6667H5.05556C3.55211 25.6667 2.33333 24.4479 2.33333 22.9444V5.05556Z"
                  fill="#212121"
                />
              </svg>
              Tasks
            </Link>
          </li>
          <li className="flex w-full justify-center  ">
            <button
              onClick={() => handleLogOut()}
              className="bg-red-600 text-white lg:text-[14px] w-full py-2 font-bold rounded-lg">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;