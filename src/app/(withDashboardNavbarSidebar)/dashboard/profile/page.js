'use client'

import { useState } from "react";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Profile from "./Profile/Profile";
import TaskStats from "./TaskStats/TaskStats";
import AllWorkspace from "./AllWorkspace/AllWorkspace";


const page = () => {
    const [editProfile, setEditProfile] = useState(false)
    return (
        <div className=' mt-10 flex flex-col md:flex-row justify-between gap-5 w-full'>
            {
                editProfile ?
                    <UpdateProfile editProfile={editProfile} setEditProfile={setEditProfile}></UpdateProfile>
                    :
                    <Profile editProfile={editProfile} setEditProfile={setEditProfile}></Profile>
            }
            <div className='w-full xl:pl-8'>
                <TaskStats></TaskStats>
                <AllWorkspace></AllWorkspace>
            </div>
        </div>
    );
};

export default page;