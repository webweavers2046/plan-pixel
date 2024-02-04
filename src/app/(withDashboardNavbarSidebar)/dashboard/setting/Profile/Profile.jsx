'use client'
import { AuthContext } from "@/Providers/AuthProviders";
import CommonModal from "@/components/Common/CommonModal/CommonModal";
import { useContext, useState } from "react";
import UpdateProfile from "../UpdateProfile/UpdateProfile";



const Profile = () => {
    const { user } = useContext(AuthContext)
    const [edit, setEdit] = useState(false);

    const socialLinks = [
        {
            platform: "Linkedin"
        },
        {
            platform: "Facebook"
        },
        {
            platform: "Portfolio"
        },
        {
            platform: "Resume"
        },
    ]

    return (
        <div className="w-full p-4">
            {/* image */}
            <div className="flex justify-between">
                <div className="flex items-end">
                    <img src={user?.photoURL}
                        className="w-48 h-48 rounded-lg"
                        alt="profile picture" />
                    <div className="p-5">
                        <h4 className="text-3xl font-semibold">{user?.displayName}</h4>
                        <p className="text-sm mt-1 font-semibold text-[#00000080]">{user?.email}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => setEdit(!edit)} className="text-[#00A13E] text-sm font-semibold">Edit</button>
                </div>
            </div>
            {/* info */}
            <div className="mt-9">
                <div className="border-b-2 border-[#00000033] p-3">
                    <p className="text-xs mb-3 font-semibold">Phone Number:</p>
                    <p>0123654899</p>
                </div>
                <div className="border-b-2 border-[#00000033] p-3 mt-1">
                    <p className="text-xs mb-3 font-semibold">Email Address:</p>
                    <p>{user?.email}</p>
                </div>
                <div className="border-b-2 border-[#00000033] p-3 mt-1">
                    <p className="text-xs mb-3 font-semibold">Password:</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="134" height="8" viewBox="0 0 134 8" fill="none">
                            <rect width="8" height="8" rx="4" fill="black" />
                            <rect x="14" width="8" height="8" rx="4" fill="black" />
                            <rect x="28" width="8" height="8" rx="4" fill="black" />
                            <rect x="42" width="8" height="8" rx="4" fill="black" />
                            <rect x="56" width="8" height="8" rx="4" fill="black" />
                            <rect x="70" width="8" height="8" rx="4" fill="black" />
                            <rect x="84" width="8" height="8" rx="4" fill="black" />
                            <rect x="98" width="8" height="8" rx="4" fill="black" />
                            <rect x="112" width="8" height="8" rx="4" fill="black" />
                            <rect x="126" width="8" height="8" rx="4" fill="black" />
                        </svg>
                    </p>
                </div>
                <div className="border-b-2 border-[#00000033] p-3 mt-1">
                    <p className="text-xs mb-3 font-semibold">Address:</p>
                    <p>7/265, Shohid sharak, Zindapark, Chattagram</p>
                </div>
                <div className="border-b-2 border-[#00000033] p-3 mt-1">
                    <p className="text-xs mb-3 font-semibold">Profession:</p>
                    <p>Back-end developer, Plan Pixel.io</p>
                </div>
                <div className="flex gap-8">
                    <div className="border-b-2 border-[#00000033] p-3 mt-1 w-full">
                        <p className="text-xs mb-3 font-semibold">Gender:</p>
                        <p>Male</p>
                    </div>
                    <div className="border-b-2 border-[#00000033] p-3 mt-1 w-full">
                        <p className="text-xs mb-3 font-semibold">Age:</p>
                        <p>18 Years</p>
                    </div>
                </div>
                <div className=" p-3 mt-1 w-full">
                    <p className="text-xs mb-3 font-semibold">Important Links: </p>
                    <div className="flex gap-6">
                        {
                            socialLinks?.map(link => <div key={link?.platform} className="flex gap-2">
                                <p>{link?.platform}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M9.358 7.58443C8.9517 7.58744 8.62479 7.91923 8.62781 8.32552C8.63078 8.73187 8.9626 9.05881 9.3689 9.0558L14.9154 9.01469L7.80334 16.1267C7.51603 16.414 7.51602 16.8799 7.80334 17.1672C8.09066 17.4545 8.55647 17.4545 8.84378 17.1672L15.9524 10.0586L15.9113 15.5982C15.9083 16.0045 16.2353 16.3364 16.6416 16.3393C17.0479 16.3424 17.3797 16.0155 17.3827 15.6092L17.4357 8.4579C17.4395 7.9447 17.0225 7.52769 16.5093 7.53149L9.358 7.58443Z" fill="#212121" />
                                </svg>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <UpdateProfile edit={edit} setEdit={setEdit}></UpdateProfile>
        </div>
    );
};

export default Profile;