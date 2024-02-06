'use client'
import Profile from './Profile/Profile';
import AllWorkspace from './AllWorkspace/AllWorkspace';
import { useState } from 'react';
import UpdateProfile from './UpdateProfile/UpdateProfile';

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
            <AllWorkspace></AllWorkspace>
        </div>
    );
};

export default page;