'use client'

import { useForm } from "react-hook-form";


const MessageForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="w-full bg-[#F9F9F9]  md:px-12 px-6 md:py-14 py-10 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-4'>
                    <h4 className='text-xl mb-2'>Your Name</h4>
                    <input type="text" {...register("name", { required: true })} name="name" className="pl-6 border-b border-black w-full h-16 bg-[#F9F9F9]" />
                    {errors.name && <span className='text-red-500'>Name is required</span>}
                </div>
                <div className='mt-10'>
                    <h4 className='text-xl mb-2'>Email</h4>
                    <input type="email" {...register("email", { required: true })} name="email"
                        className="pl-6 border-b border-black w-full h-16 bg-[#F9F9F9]" />
                    {errors.email && <span className='text-red-500'>Email is required</span>}
                </div>
                <div className='mt-10'>
                    <h4 className='text-xl mb-2'>Message</h4>
                    <textarea type="text" {...register("message", { required: true })} name="message"
                        className="pl-6 pt-4 border-b border-black w-full h-32 bg-[#F9F9F9]" />
                    {errors.message && <span className='text-red-500'>Message is required</span>}
                </div>

                <div className='text-center mt-10'>
                    <button className='bg-gradient-to-br  from-[#50B577] to-[#93C648] text-white w-full py-5  font-bold text-xl rounded-br-2xl'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;