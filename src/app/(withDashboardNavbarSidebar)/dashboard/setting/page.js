import Profile from './Profile/Profile';
import AllWorkspace from './AllWorkspace/AllWorkspace';

const page = () => {
    return (
        <div className='p-4 mt-10 flex gap-12'>
            <Profile></Profile>
            <AllWorkspace></AllWorkspace>
        </div>
    );
};

export default page;