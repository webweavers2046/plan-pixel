"use client";

import { AuthContext } from "@/Providers/AuthProviders";
import Image from "next/image";
import { useContext, useState } from "react"; // Import useState
import { useForm } from "react-hook-form";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import useDateTime from "../Components/Hooks/useDateTime";
import axios from "axios";
import toast from "react-hot-toast";

const page = () => {
    const image_hosting_key = "7e12ab75560d62e6ad9d88e0d09f9e38";
    const { currentDate } = useDateTime();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { user } = useContext(AuthContext);
    const [uploadFile, setFile] = useState(null); // Initialize state with null
    const [buttonLoading, setButtonLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null); // Initialize state with null
    const [uploadedImageError, setUploadedImageError] = useState("");

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(URL.createObjectURL(file));
            setUploadedImage(file);
        }
    };

    const onSubmit = (data) => {
        if (!uploadedImage) {
            setUploadedImageError("Please upload article image");
        } else {
            setButtonLoading(true);
            const formData = new FormData();
            formData.append("image", uploadedImage);
            const url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`; // Removed extra question mark
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.data.url);
                    const newArticle = {
                        title: data.title,
                        description: data.description,
                        author: user.displayName,
                        date: currentDate,
                        articleImage_url: result.data.url,
                        avatar_url: user.photoURL,
                    };
                    axios
                        .post("http://localhost:5000/api/articles", newArticle)
                        .then((res) => {
                            console.log(res.data);
                            toast.success("Add Successfully", {
                                duration: 2000,
                                className: "mt-32",
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    console.log(newArticle);
                })
                .finally(() => {
                    setButtonLoading(false);
                    reset();
                });
        }
    };

    return (
        <section>
            <h1 className="text-lg font-semibold">Add Article</h1>
            <div className="md:border-2 rounded-md md:p-8 mt-6">
                <div className="grid md:grid-cols-10 gap-10">
                    <div className="xl:col-span-3 md:col-span-4">
                        <div className="border-2 border-dashed rounded-md w-full h-80 flex items-center justify-center text-center bg-dashboardPrimaryColor/60 relative">
                            {uploadFile ? (
                                <img
                                    src={uploadFile}
                                    alt="Uploaded"
                                    className="w-full h-full rounded-md m-2"
                                />
                            ) : (
                                <div className="w-full h-full absolute top-0 left-0">
                                    <label
                                        htmlFor="imageUpload"
                                        className="flex flex-col items-center justify-center gap-3 opacity-50 hover:opacity-100 w-full h-full"
                                    >
                                        Article Image
                                    </label>
                                </div>
                            )}
                        </div>
                        <label className="block md:w-64 w-full  text-sm text-[#d63031] pt-1">
                            {uploadedImageError}
                        </label>
                        <div className="mt-4">
                            <label
                                htmlFor="files"
                                className="block cursor-pointer bg-dashboardPrimaryColor  w-full rounded-lg py-3 text-center font-semibold"
                            >
                                Upload Photo{" "}
                                <HiOutlineArrowUpTray className="inline text-lg ms-2 font-semibold" />
                            </label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleChange}
                                id="files"
                                className="bg-dashboardPrimaryColor hidden w-full rounded-lg py-3 text-center font-semibold"
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-7 md:col-span-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* task name */}
                            <div className="">
                                <h4 className="text-sm font-semibold">
                                    Task title{" "}
                                    {errors.title && (
                                        <span className="text-red-500 text-xs ms-2">
                                            (Article title is required)
                                        </span>
                                    )}
                                </h4>
                                <input
                                    type="text"
                                    placeholder="Please type your article title here..."
                                    {...register("title", { required: true })}
                                    name="title"
                                    className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                                    id=""
                                />
                            </div>
                            {/* Description */}
                            <div className="mt-3.5">
                                <h4 className="text-sm font-semibold">
                                    Description{" "}
                                    {errors.description && (
                                        <span className="text-red-500 text-xs ms-2">
                                            This field is required
                                        </span>
                                    )}
                                </h4>

                                <textarea
                                    type="text"
                                    {...register("description", {
                                        required: true,
                                    })}
                                    cols="30"
                                    rows="7"
                                    name="description"
                                    placeholder="Please write task description here..."
                                    className="py-3 pl-4 w-full placeholder:text-sx placeholder:opacity-45 bg-dashboardPrimaryColor/50 border-0 mt-3 rounded-md"
                                    id=""
                                />
                            </div>
                            <button
                                type="submit"
                                className="block cursor-pointer mt-4 bg-gradient-to-r from-primary to-secondary  w-full rounded-lg py-3 text-center font-semibold"
                            >
                                {buttonLoading ? (
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                ) : (
                                    <span>Add article</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
