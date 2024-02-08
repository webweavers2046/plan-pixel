'use client'

import { useState } from "react";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Profile from "./Profile/Profile";
import TaskStats from "./TaskStats/TaskStats";
import AllWorkspace from "./AllWorkspace/AllWorkspace";


const page = () => {
    const [editProfile, setEditProfile] = useState(false)
    return (
        <div className='p-4 mt-10 flex gap-12'>
            {
                editProfile ?
                    <UpdateProfile editProfile={editProfile} setEditProfile={setEditProfile}></UpdateProfile>
                    :
                    <Profile editProfile={editProfile} setEditProfile={setEditProfile}></Profile>
            }
            <div className='w-full'>
                <TaskStats></TaskStats>
                <AllWorkspace></AllWorkspace>
            </div>
        </div>
    );
};

export default page;