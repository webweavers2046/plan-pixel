"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const MessageForm = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const serviceId = "service_2whe5f8";
    const publicKey = "0vMK8CqEQPg9bKP9B";
    const templateId = "template_xpon2ll";

    // send message

    const onSubmit = (data) => {
        setButtonLoading(true);
        const templateParams = {
            to_email: "webweavers2046@gmail.com",
            subject: "Modern Gym trainer Message",
            message: data.message,
        };
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully:", response);
                reset();
                toast.success("Message Sended", {
                    duration: 2000,
                    // className: "mt-32",
                });
                setButtonLoading(false);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setButtonLoading(false);
            });
    };

    return (
        <div className="w-full bg-[#F9F9F9] rounded-br-3xl placeholder:text-xs placeholder:opacity-55  md:px-12 px-6 md:py-14 pb-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                    <h4 className="md:text-lg mb-2">Your Name</h4>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        name="name"
                        placeholder="Please type your name here.."
                        className="pl-6 rounded-br-2xl border-b border-black/25 w-full h-16 bg-[#F9F9F9] placeholder:text-xs placeholder:opacity-55"
                    />
                    {errors.name && (
                        <span className="text-red-500">Name is required</span>
                    )}
                </div>
                <div className="mt-6">
                    <h4 className="md:text-lg mb-2">Your Email</h4>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        name="email"
                        placeholder="Please type your email here.."
                        className="pl-6 border-b rounded-br-2xl border-black/25 w-full h-16 bg-[#F9F9F9] placeholder:text-xs placeholder:opacity-55"
                    />
                    {errors.email && (
                        <span className="text-red-500">Email is required</span>
                    )}
                </div>
                <div className="mt-6">
                    <h4 className="md:text-lg mb-2">Your Message</h4>
                    <textarea
                        type="text"
                        {...register("message", { required: true })}
                        name="message"
                        placeholder="Please type your message here.."
                        className="pl-6 pt-4 border-b rounded-br-2xl border-black/25 w-full h-32 bg-[#F9F9F9] placeholder:text-xs placeholder:opacity-55"
                    />
                    {errors.message && (
                        <span className="text-red-500">
                            Message is required
                        </span>
                    )}
                </div>

                <div className="text-center mt-6">
                    <button className="bg-gradient-to-br from-[#50B577] to-[#93C648] text-white w-full py-3 md:py-5  font-bold text-xl rounded-br-2xl">
                        {buttonLoading ? (
                            <div className="mx-6">
                                <div role="status">
                                    <svg
                                        aria-hidden="true"
                                        className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <span> Submit</span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;
