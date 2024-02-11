"use client";

import { AuthContext } from "@/Providers/AuthProviders";
import image from "@/assets/person/avatar.jpg";
import Image from "next/image";
import { useContext, useState } from "react";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/useUser";
import useAxios from "@/hooks/useAxios";
import CommonModal from "@/components/Common/CommonModal/CommonModal";
import MiniModal from "@/components/Common/CommonModal/MiniModal";
import toast from "react-hot-toast";
import useGlobalContext from "@/hooks/useGlobalContext";
import PaperPieces from "@/components/Common/CommonModal/paperCutPiece";

const DashboardNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { handleActiveWorkspace, handleDropdownClick, workspaces } =
        useGlobalContext();

    const userData = useUser(user?.email);
    const router = useRouter();
    const [isCreateWokspace, setIsCreateWorkSpace] = useState(false);

    const xios = useAxios();
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

    const handleCreateWorkspace = async (title, description) => {
        const workspace = {
            title: title,
            description: description,
            creator: user?.email,
            members: ["userID2", "userID3"],
            tasks: [],
            isActive: false,
        };

        const response = await xios.post(
            `/create-workspace/${user.email && user.email}`,
            workspace
        );
        if (response.data.insertedId) {
            toast.success("Successfully created a workspace. 🏢");
        }
    };

    const x = workspaces.map((work) =>
        work.isActive == true ? work.title : ""
    );

    console.log(x);
    console.log(workspaces);

    return (
        <div className="flex relative justify-between items-center p-4 gap-6">
            <div
                onClick={handleDropdownClick}
                className=" py-2 px-3 rounded-lg "
            >
                <Dropdown
                    color="white"
                    className="bg-[white] overflow-hidden relative py-2 px-3 rounded-lg mt-4"
                    inline
                    label={
                        <div className="text-start">
                            <p className="text-xs opacity-55">{}</p>
                        </div>
                    }
                >
                    <div className="bg-[#ffc0b052] filter blur-3xl  w-52 h-52 bottom-0 -right-20 -z-10 rounded-full absolute"></div>

                    {workspaces?.map((workspace) => {
                        return (
                            <Dropdown.Item
                                onClick={(e) =>
                                    handleActiveWorkspace(e, workspace._id)
                                }
                            >
                                {workspace.title}
                            </Dropdown.Item>
                        );
                    })}
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <div
                            onClick={() =>
                                setIsCreateWorkSpace(!isCreateWokspace)
                            }
                            className=" py-2 px-4 w-full shadow-sm hover:bg-transparent  rounded-lg"
                        >
                            <p className="w-full">Add New Workspace +</p>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
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
                <input
                    className="w-full rounded-lg text-sm pl-16 py-4 border-0 "
                    placeholder="Find The task what you’re looking for..."
                    type="text"
                ></input>
            </div>
            <div>
                <svg
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
            </div>
            <div className="border py-2 px-3 rounded-lg bg-[white]">
                <Dropdown
                    className="bg-white rounded-lg"
                    inline
                    label={
                        <div className="flex items-center">
                            {userData?.image ? (
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
                    <PaperPieces />
                </Dropdown>
                <div className="">
                    {isCreateWokspace ? (
                        <MiniModal
                            handleCreateWorkspace={handleCreateWorkspace}
                            setIsCreateWorkSpace={setIsCreateWorkSpace}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
