import { AuthContext } from "@/Providers/AuthProviders";
import CommonModal from "@/components/Common/CommonModal/CommonModal";
import axios from "axios";
import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { MdEdit } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Swal from "sweetalert2";
import Image from "next/image";
import profileAvatar from '@/assets/person/profileAvatar.png'
import useUser from "@/hooks/useUser";
import useAxios from "@/hooks/useAxios";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_key = '74fd00f7dd14dc3be137326f94c849de'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProfile = ({ editProfile, setEditProfile }) => {
    const { user } = useContext(AuthContext)
    const userData = useUser(user?.email);
    const xios = useAxios();
    const inputFile = useRef(null)
    // console.log(image_hosting_key);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data) => {

        const updateInfo = {
            name: data?.firstName + " " + data?.lastName,
            number: data?.number,
            address: data?.address,
            profession: data?.profession,
            facebook: data?.facebook,
            instagram: data?.instagram,
            twitter: data?.twitter,
            linkedin: data?.linkedin
        }

        console.log("update profile data", updateInfo);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, save it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await xios.put(`/users/${user?.email}`, updateInfo);
                console.log(res?.data);
                if (res?.data?.update) {
                    Swal.fire({
                        title: "saved!",
                        text: "Your profile has been updated.",
                        icon: "success"
                    });
                    setEditProfile(false);
                }

            }
        });
    };



    const handleUpdateImage = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
        const imgFile = inputFile.current.files[0]

        // console.log('img file', imgFile);

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
                        const { data } = await xios.put(`/userImage/${user?.email}`, { image })
                        // console.log('image update', data);

                        if (data?.update) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your profile has been updated.",
                                icon: "success"
                            });
                            setEditProfile(false);
                        }

                    }

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
                <Image
                    src={userData?.image ? userData?.image : profileAvatar}
                    alt="member"
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full"
                />
                {/* <img src={user?.photoURL} className="w-32 h-32 rounded-full" alt="" /> */}
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
                        <input type="text" placeholder='First Name' defaultValue={userData?.name?.split(" ")[0]}   {...register("firstName", { required: true })} name="firstName" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                        {errors.firstName && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Last Name</h4>
                        <input type="text" placeholder='Last Name' defaultValue={userData?.name?.split(" ")[1]}   {...register("lastName", { required: true })} name="lastName" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                        {errors.lastName && <span className='text-red-500'>This field is required</span>}
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
                    <input type="text" placeholder='Number' defaultValue={userData?.number}   {...register("number")} name="number" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />

                </div>
                {/* Location */}
                <div className='w-full mt-3'>
                    <h4 className=' font-semibold'>Address</h4>
                    <input type="text" placeholder='Address' defaultValue={userData?.address}  {...register("address")} name="address" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                </div>
                {/* Profession */}
                <div className='w-full mt-3'>
                    <h4 className=' font-semibold'>Profession</h4>
                    <input type="text" placeholder='Profession' defaultValue={userData?.profession}  {...register("profession")} name="profession" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                </div>

                {/* Social Links */}

                <div className="grid grid-cols-2 w-full gap-6 mt-4">
                    <div className='w-full'>
                        <h4 className='font-semibold'>Facebook (optional)</h4>
                        <input type="text" placeholder='url' defaultValue={userData?.facebook}  {...register("facebook")} name="facebook" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Instagram (optional)</h4>
                        <input type="text" placeholder='url' defaultValue={userData?.instagram}  {...register("instagram")} name="instagram" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Twitter (optional)</h4>
                        <input type="text" placeholder='url' defaultValue={userData?.twitter}   {...register("twitter")} name="twitter" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
                    </div>
                    <div className='w-full'>
                        <h4 className=' font-semibold'>Linkedin (optional)</h4>
                        <input type="text" placeholder='url' defaultValue={userData?.linkedin} {...register("linkedin")} name="linkedin" className='py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md' id="" />
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