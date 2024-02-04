import CommonModal from "@/components/Common/CommonModal/CommonModal";
import { useForm } from "react-hook-form";


const UpdateProfile = ({edit, setEdit}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data) => {
        console.log("update profile data", data);
     
    };
    
    return (
        <CommonModal openModal={edit} setOpenModal={setEdit} heading={'Update your profile'}>
            <form onSubmit={handleSubmit(onSubmit)} className=" mt-8 px-4">
                {/* form info */}
                <div className=" grid grid-cols-2 gap-5">
                    {/* task name */}
                    <div className="">
                        <h4 className="text-lg font-semibold">Your Name</h4>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("profileName", { required: true })}
                            name="profileName"
                            className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.profileName && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    {/* Phone Number */}
                    <div className="">
                        <h4 className="text-lg font-semibold">Contact Number</h4>
                        <input
                            type="text"
                            placeholder="Number"
                            {...register("number", { required: true })}
                            name="number"
                            className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.number && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    {/* Gender */}
                    <div className="">
                        <h4 className="text-lg font-semibold">Gender</h4>
                        <select
                            name="gender"
                            defaultValue={'Male'}
                            className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                            {...register("gender", { required: true })}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    {/* Age */}
                     <div className="">
                        <h4 className="text-lg font-semibold">Age</h4>
                        <input
                            type="number"
                            placeholder="Age"
                            {...register("age", { required: true })}
                            name="age"
                            className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.age && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    {/* Address */}
                     <div className="">
                        <h4 className="text-lg font-semibold">Address</h4>
                        <input
                            type="text"
                            placeholder="Address"
                            {...register("address", { required: true })}
                            name="address"
                            className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.age && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                    {/* Profession */}
                     <div className="">
                        <h4 className="text-lg font-semibold">Profession</h4>
                        <input
                            type="text"
                            placeholder="Profession"
                            {...register("profession", { required: true })}
                            name="profession"
                            className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.profession && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
               
                </div>
                {/* submit button */}
                <div className="flex justify-end items-end mt-4">
                    <button className="bg-[#50B577] p-4 text-white rounded-lg">
                        Save
                    </button>
                </div>
            </form>
        </CommonModal>
    );
};

export default UpdateProfile;