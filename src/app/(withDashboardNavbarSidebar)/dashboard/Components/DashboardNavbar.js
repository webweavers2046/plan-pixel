"use client";
// workspace list
import image from "@/assets/person/avatar.jpg";
import Image from "next/image";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import Link from "next/link";
import Swal from "sweetalert2";
import MiniModal from "@/components/Common/CommonModal/MiniModal";
import toast from "react-hot-toast";
import { AddMemberModal } from "@/components/Common/CommonModal/AddMemberModal";
import { IoIosArrowDown } from "react-icons/io";
import { globalContext } from "@/Providers/globalContext";
import Search from "./Search/Search";

//hook
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";

//context provider
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "@/Providers/AuthProviders";
import useGlobalContext from "@/hooks/useGlobalContext";

const DashboardNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const {
    handleActiveWorkspace,
    handleDropdownClick,
    userWokspaceList,
    activeWorkspace,
    WillAddMember,
    setWillAddMember,
    notifications, // Updated for notifications

  } = useGlobalContext();
  const { data: userData } = useUser(user?.email);
  const router = useRouter();
  const [isCreateWokspace, setIsCreateWorkSpace] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const xios = useAxios();
  const { fetchLatestData } = useContext(globalContext);
  const [notification, setNotification] = useState(true); // Keep this for the original notification

  // Notification Modal State
  const [isOpen, setIsOpen] = useState(false);

  // Notification Modal Function
  const handleNotificationClick = () => {
    setIsOpen(!isOpen);
  };

  // notification Sorting
  const [yourNotifications, setYourNotifications] = useState([]);
  useEffect(() => {
    if (notifications?.data) {
      const newNotifications = notifications?.data?.filter(
        (notification) => {
          return (
            notification.user === "all" ||
            notification.user === user?.email
          );
        }
      );

      setYourNotifications(newNotifications);
    }
  }, [notifications, user]);

  // console.log(yourNotifications);
  // console.log(notifications);

  // =======================================================


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
      if (result?.isConfirmed) {
        logOut();
        router.push("/dashboard");
        Swal.fire({
          title: "Logged Out",
          icon: "success",
        });
      }
    });
  };


  // close the workspace list dropdwon in onBlur
  const workspaceListRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        workspaceListRef?.current &&
        !workspaceListRef?.current?.contains(event.target)
      ) {
        // Clicked outside of the modal, close the filter & remove the highlighted id
        setDropdownOpen(false);
        setIsCreateWorkSpace(false);
      }
    };

    // ======================================== seconde conflict
    // Add event listener to the document body
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isCreateWokspace]);
  // console.log(user?.email);

  const handleCreateWorkspace = async (title, description) => {
    const workspace = {
      title: title,
      description: description,
      creator: user?.email,
      members: [user?.email],
      tasks: [],
      isActive: true,
      lastModifiedBy: "",
      tags: [],
    };

    const response = await xios.post(
      `/create-workspace/${user && user.email}`,
      workspace
    );
    if (response.data.insertedId) {
      fetchLatestData();
      toast.success("Successfully created a workspace. 🏢");
    }
  };


  const handleAddMember = async (workspaceId, memberEmail, memberName) => {
    const workspaceAndUserEmail = {
      workspaceId,
      userEmail: memberEmail,
      memberName: memberName,
    };

    const isAddedMember = await xios.post(
      "/add-member-to-workspace",
      workspaceAndUserEmail
    );


    if (isAddedMember.data.message) {
      fetchLatestData();
      return toast.success(`${memberName} is added to this workspace`);
    }

    toast.error(isAddedMember.data.error);
  };

  const handleClose = () => {
    // Close the modal
    setIsCreateWorkSpace(false);
  };


  return (
    <div className="flex relative justify-between items-center p-4 gap-6">
      <div
        onClick={handleDropdownClick}
        className="py-2 px-3 relative rounded-lg"
      >
        <div
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="text-start flex gap-2 items-center w-32"
        >
          <p className=" cursor-pointer opacity-55 text-[15px] ">
            {activeWorkspace?.title?.length > 12
              ? activeWorkspace?.title?.slice(0, 11) + ".."
              : activeWorkspace?.title || "Workspace"}
          </p>
          <IoIosArrowDown
            className={` cursor-pointer ${isDropdownOpen ? "rotate-180" : "rotate-0"
              } transition-all duration-300`}
          />
        </div>


        <div
          ref={workspaceListRef}
          className={`  transition-all duration-200 bg-[white] min-h-36 grid items-end ${isDropdownOpen ? "visible opacity-100" : "invisible opacity-0"
            } absolute z-50 shadow-lg list-none  w-60 overflow-hidden  py-4 rounded-lg mt-4`}
        >
          {userWokspaceList?.map((workspace, index) => {
            return (
              <li
                key={workspace?._id}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={(e) => handleActiveWorkspace(e, workspace?._id)}
                className="flex hover:bg-[#8091670c] px-4 transition-all cursor-pointer duration-300 items-center gap-2 py-4 relative"
              >
                {workspace?.title}


                <span className="block border border-b-1 w-full -bottom-0 absolute border-[#8080801a]"></span>
                <span
                  onClick={() => setWillAddMember(!WillAddMember)}
                  className={`ml-auto z-50 w-4 h-4 items-center justify-center border p-1 border-black flex rounded-full transition-all duration-300 opacity-0 ${isHovered === index ? "opacity-100" : ""
                    }`}
                >
                  +
                </span>
              </li>
            );
          })}
          <li>
            <div className="w-full text-center flex justify-center  shadow-s mt-auto px-2  hover:bg-transparen rounded-lg">

              <div className="bg-gray-100 p-2 mt-3 w-11 h-11 rounded-full flex items-center justify-center">
                <p
                  onClick={() => setIsCreateWorkSpace(!isCreateWokspace)}
                  className=" w-full h-full rounded-full items-center text-white text-center  cursor-pointer flex justify-center bg-gradient-to-br from-[#93C648] to-[#50B577] p-1 shadow-sm   "
                >
                  +
                </p>

              </div>
            </div>
          </li>
          {userWokspaceList?.length <= 0 && (
            <div className="absolute -z-20 bottom-[70px] left-24">
              <Image
                className=" opacity-50 mx-auto w-11 h-11 left-1/2"
                src={"https://i.ibb.co/mtGpTfj/icons8-search-250.png"}
                height={100}
                width={100}
              />
            </div>
          )}
        </div>
        {/* Add member modal */}
        <AddMemberModal
          handleAddMember={handleAddMember}
          WillAddMember={WillAddMember}
          setWillAddMember={setWillAddMember}
        />
      </div>
      <div className="grow">
        <div className="absolute ml-[20px] mt-[17px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M18 18L13.9865 13.9795M16.2105 8.60526C16.2105 12.8055 12.8055 16.2105 8.60526 16.2105C4.40499 16.2105 1 12.8055 1 8.60526C1 4.40499 4.40499 1 8.60526 1C12.8055 1 16.2105 4.40499 16.2105 8.60526Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* search component */}
        <Search></Search>
      </div>

      {/* ==================== Notification ===================== */}
      {/* Notification */}
      <div className="relative">
        <svg
          onClick={handleNotificationClick}
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
        >
          <rect width="52" height="52" rx="10" fill="#ECECEC" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.001 28.5606V28.29C16.0407 27.4897 16.2972 26.7143 16.7441 26.0436C17.4879 25.238 17.9971 24.2508 18.2182 23.1856C18.2182 22.3623 18.2182 21.5273 18.2901 20.704C18.6617 16.7404 22.5808 14 26.4519 14H26.5478C30.4189 14 34.338 16.7404 34.7215 20.704C34.7934 21.5273 34.7215 22.3623 34.7814 23.1856C35.0055 24.2533 35.5142 25.2436 36.2556 26.0554C36.7058 26.7201 36.9627 27.4927 36.9986 28.29V28.5488C37.0254 29.6241 36.6551 30.6725 35.956 31.5009C35.0321 32.4695 33.7785 33.072 32.4324 33.1945C28.4851 33.618 24.5026 33.618 20.5553 33.1945C19.2107 33.0668 17.9589 32.4651 17.0317 31.5009C16.3434 30.6719 15.9781 29.6297 16.001 28.5606ZM23.4796 37.2875C24.0964 38.0616 25.0021 38.5626 25.9963 38.6796C26.9905 38.7966 27.9912 38.5199 28.777 37.9108C29.0186 37.7307 29.2361 37.5212 29.4242 37.2875"
            fill="#ECECEC"
          />
          <path
            d="M23.4796 37.2875C24.0964 38.0616 25.0021 38.5626 25.9963 38.6796C26.9905 38.7966 27.9912 38.5199 28.777 37.9108C29.0186 37.7307 29.2361 37.5212 29.4242 37.2875M16.001 28.5606V28.29C16.0407 27.4897 16.2972 26.7143 16.7441 26.0436C17.4879 25.238 17.9971 24.2508 18.2182 23.1856C18.2182 22.3623 18.2182 21.5273 18.2901 20.704C18.6617 16.7404 22.5808 14 26.4519 14H26.5478C30.4189 14 34.338 16.7404 34.7215 20.704C34.7934 21.5273 34.7215 22.3623 34.7814 23.1856C35.0055 24.2533 35.5142 25.2436 36.2556 26.0554C36.7058 26.7201 36.9627 27.4927 36.9986 28.29V28.5488C37.0254 29.6241 36.6551 30.6725 35.956 31.5009C35.0321 32.4695 33.7785 33.072 32.4324 33.1945C28.4851 33.618 24.5026 33.618 20.5553 33.1945C19.2107 33.0668 17.9589 32.4651 17.0317 31.5009C16.3434 30.6719 15.9781 29.6297 16.001 28.5606Z"
            stroke="#200E32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Number of Notifications */}

        {
          <p className="absolute -right-1 -top-3 font-bold text-2xl text-green-400">
            {yourNotifications?.data?.length}
          </p>
        }

        {/* Modal Of Notification */}
        <div
          className={`${!isOpen && "hidden"
            } w-96 absolute top-16 right-0 rounded-xl grid grid-cols-1 gap-y-3 shadow-lg bg-gray-100 py-2 px-2`}
        >
          {yourNotifications?.data?.map((notification) => (
            <div>
              <p className="text-xl px-4 py-4 bg-white rounded-md">
                {notification?.message}
              </p>
            </div>
          ))}
        </div>
      </div>


      {/* ==================== Notification ===================== */}



      // {/* <div>
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="52"
      //     height="52"
      //     viewBox="0 0 52 52"
      //     fill="none"
      //   >
      //     <rect width="52" height="52" rx="10" fill="#ECECEC" />
      //     <path
      //       fillRule="evenodd"
      //       clipRule="evenodd"
      //       d="M16.001 28.5606V28.29C16.0407 27.4897 16.2972 26.7143 16.7441 26.0436C17.4879 25.238 17.9971 24.2508 18.2182 23.1856C18.2182 22.3623 18.2182 21.5273 18.2901 20.704C18.6617 16.7404 22.5808 14 26.4519 14H26.5478C30.4189 14 34.338 16.7404 34.7215 20.704C34.7934 21.5273 34.7215 22.3623 34.7814 23.1856C35.0055 24.2533 35.5142 25.2436 36.2556 26.0554C36.7058 26.7201 36.9627 27.4927 36.9986 28.29V28.5488C37.0254 29.6241 36.6551 30.6725 35.956 31.5009C35.0321 32.4695 33.7785 33.072 32.4324 33.1945C28.4851 33.618 24.5026 33.618 20.5553 33.1945C19.2107 33.0668 17.9589 32.4651 17.0317 31.5009C16.3434 30.6719 15.9781 29.6297 16.001 28.5606ZM23.4796 37.2875C24.0964 38.0616 25.0021 38.5626 25.9963 38.6796C26.9905 38.7966 27.9912 38.5199 28.777 37.9108C29.0186 37.7307 29.2361 37.5212 29.4242 37.2875"
      //       fill="#ECECEC"
      //     />
      //     <path
      //       d="M23.4796 37.2875C24.0964 38.0616 25.0021 38.5626 25.9963 38.6796C26.9905 38.7966 27.9912 38.5199 28.777 37.9108C29.0186 37.7307 29.2361 37.5212 29.4242 37.2875M16.001 28.5606V28.29C16.0407 27.4897 16.2972 26.7143 16.7441 26.0436C17.4879 25.238 17.9971 24.2508 18.2182 23.1856C18.2182 22.3623 18.2182 21.5273 18.2901 20.704C18.6617 16.7404 22.5808 14 26.4519 14H26.5478C30.4189 14 34.338 16.7404 34.7215 20.704C34.7934 21.5273 34.7215 22.3623 34.7814 23.1856C35.0055 24.2533 35.5142 25.2436 36.2556 26.0554C36.7058 26.7201 36.9627 27.4927 36.9986 28.29V28.5488C37.0254 29.6241 36.6551 30.6725 35.956 31.5009C35.0321 32.4695 33.7785 33.072 32.4324 33.1945C28.4851 33.618 24.5026 33.618 20.5553 33.1945C19.2107 33.0668 17.9589 32.4651 17.0317 31.5009C16.3434 30.6719 15.9781 29.6297 16.001 28.5606Z"
      //       stroke="#200E32"
      //       strokeWidth="1.5"
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //     />
      //   </svg>
      // </div> */}

      <div className="border md:flex hidden py-2 px-3 rounded-lg bg-[white]">
        <Dropdown
          className="bg-white rounded-lg"
          inline
          label={
            <div className="flex items-center">
              {userData?.image 
                ? (
                  <Image
                    src={userData?.image}
                    alt="member"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                ) : (
                  <Image
                    src={image}
                    alt="member"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
              <div>
                <h2 className="text-sm font-semibold">
                  {userData?.name?.split(" ")[0]}
                </h2>
                <span className="block truncate text-xs">
                  {userData?.email}
                </span>
              </div>
            </div>
          }
        >
          <Dropdown.Item className="mt-2" icon={HiViewGrid}>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item icon={HiCog}>
            <Link href={"/dashboard/setting"}>Settings</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <button
              onClick={() => handleLogOut()}
              className="bg-red-600 text-white lg:text-[14px] w-full py-2 font-bold rounded-lg"
            >
              Log Out
            </button>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="translate-x-0 duration-200 absolute z-50 left-0">
        {isCreateWokspace ? (
          <MiniModal
            workspaceListRef={workspaceListRef}
            handleClose={handleClose}
            setDropdownOpen={setDropdownOpen}
            handleCreateWorkspace={handleCreateWorkspace}
            setIsCreateWorkSpace={setIsCreateWorkSpace}
            isCreateWokspace={isCreateWokspace}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
