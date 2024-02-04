import { AuthContext } from "@/Providers/AuthProviders";
import CommonModal from "@/components/Common/CommonModal/CommonModal";
import axios from "axios";
import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_key = '74fd00f7dd14dc3be137326f94c849de'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProfile = ({ editProfile, setEditProfile }) => {
    const { user } = useContext(AuthContext)
    const inputFile = useRef(null)
    console.log(image_hosting_key);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data) => {
        console.log("update profile data", data);

    };

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

    const handleUpdateImage = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
        const imgFile = inputFile.current.files[0]

        console.log('img file', imgFile);

        if (imgFile) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, save image!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    if (imgFile) {
                        const imageFile = { image: imgFile }
                        const res = await axios.post(image_hosting_api, imageFile, {
                            headers: {
                                'content-type': 'multipart/form-data'
                            }
                        })
                        const image = res?.data?.data?.url;
                        console.log(image);
                    }
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                }
            });
        }

    };


    return (

        <div className="w-full p-4">
            <div className="flex justify-between">
                <h4 className="text-2xl font-bold">Edit Profile</h4>
                <button className="flex items-center justify-center text-[#00A13E] ">
                    <IoIosArrowBack className="text-xl"></IoIosArrowBack>
                    <span onClick={() => setEditProfile(!editProfile)}
                        className=" text-sm font-semibold">Go back</span>
                </button>
            </div>

            {/* Image */}
            <div className="flex flex-col items-center justify-center mt-6">
                <img src={user?.photoURL} className="w-32 h-32 rounded-full" alt="" />
                <button onClick={handleUpdateImage}
                    className="bg-blue-600 text-white p-2 rounded-full ml-24 -mt-10">
                    <MdEdit className="text-xl"></MdEdit>
                    <input type='file' id='file'
                        ref={inputFile}
                        style={{ display: 'none' }}
                        onChange={handleUpdateImage} />
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full gap-6 mt-8">
                    {/* name */}
                    <div className='w-full'>
                        <h4 className='font-semibold'>First Name</h4>
                        <input type="text" placeholder='First Name'   {...register("firstName", { required: true })} name="firstName" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                        {errors.firstName && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Last Name</h4>
                        <input type="text" placeholder='Last Name'   {...register("lastName", { required: true })} name="lastName" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />

                    </div>
                </div>
                {/* email */}
                <div className='w-full mt-3'>
                    <h4 className='font-semibold'>Email</h4>
                    <input type="email" readOnly value={user?.email} name="email"
                        className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                </div>

                {/* Phone Number */}
                <div className='w-full mt-3'>
                    <h4 className=' font-semibold'>Contact Number</h4>
                    <input type="text" placeholder='Number'   {...register("number", { required: true })} name="number" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />

                </div>
                {/* Location */}
                <div className='w-full mt-3'>
                    <h4 className=' font-semibold'>Address</h4>
                    <input type="text" placeholder='Location'   {...register("location", { required: true })} name="location" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />

                </div>

                {/* Social Links */}

                <div className="grid grid-cols-2 w-full gap-6 mt-4">
                    <div className='w-full'>
                        <h4 className='font-semibold'>Facebook (optional)</h4>
                        <input type="text" placeholder='url'   {...register("facebook", { required: true })} name="facebook" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Instagram (optional)</h4>
                        <input type="text" placeholder='url'   {...register("instagram", { required: true })} name="instagram" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Twitter (optional)</h4>
                        <input type="text" placeholder='url'   {...register("twitter", { required: true })} name="twitter" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Linkedin (optional)</h4>
                        <input type="text" placeholder='url'   {...register("linkedin", { required: true })} name="linkedin" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-blue-600 rounded-lg px-8 py-3 text-white font-bold ">Save</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateProfile;