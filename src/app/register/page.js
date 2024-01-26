"use client";

import signInBg from "@/assets/sign-bg.jpg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import "@/styles/globals.css";
import { AuthContext } from "@/Providers/AuthProviders";

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleRegister = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(data);

        createUser(email, password).then((res) => {
            if (res) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registredted Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                reset();
            }
        });
    };

    const handleGoogleSignIn = () => {
        googleSignIn().then((res) => {
            Swal.fire({
                title: "User Login Successful.",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });
        });
    };

    return (
        <section
            className="
            grid md:grid-cols-9 md:gap-6 h-screen max-w-screen-2xl mx-auto"
        >
            <div className="col-span-3 md:block hidden relative">
                <Image
                    className="w-full h-full object-cover"
                    src={signInBg}
                    alt="sign in background"
                ></Image>
                <div className="absolute top-20 right-0">
                    <Link href={"/"}>
                        <span className=" bg-white py-3 px-6 text-sm font-medium">
                            <IoArrowBackOutline className="inline mb-0.5" />{" "}
                            Back to Home
                        </span>
                    </Link>
                </div>
            </div>
            <div className="col-span-6 flex justify-center items-center px-3">
                <div className="text-start">
                    <div className="space-y-2 mb-6">
                        <h2 className="text-4xl font-bold">Register</h2>
                    </div>
                    <div className="space-y-3">
                        <button
                            onClick={handleGoogleSignIn}
                            className="py-4 w-full  border rounded-lg"
                        >
                            <p className="flex items-center justify-center">
                                <FcGoogle className="inline w-6 h-6 me-3" />{" "}
                                <span className="text-sm font-semibold">
                                    Sign in with Google
                                </span>
                            </p>
                        </button>
                        <button className="py-4 w-full  border rounded-lg">
                            <p className="flex items-center justify-center">
                                <FaGithub className="inline w-5 h-5 me-3" />{" "}
                                <span className="text-sm font-semibold">
                                    Sign in with Github
                                </span>
                            </p>
                        </button>
                    </div>
                    <div className="flex justify-between items-center my-6">
                        <div className="h-0.5 w-20 bg-black/25 "></div>
                        <div className="">
                            <p className="font-medium text-sm text-black/50">
                                Or Sign In with Email
                            </p>
                        </div>
                        <div className="h-0.5 w-20 bg-black/25"></div>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="md:flex items-center justify-between gap-3 pb-2">
                                <div className="mt-3">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter your first name"
                                        className="placeholder:text-black/25 placeholder:text-sm w-full border p-3.5 rounded-lg mt-2"
                                    />
                                </div>
                                <div className="mt-3">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Enter your last name"
                                        className="placeholder:text-black/25 placeholder:text-sm w-full border p-3.5 rounded-lg mt-2"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    {...register("email", {
                                        required: true,
                                    })}
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="placeholder:text-black/25 placeholder:text-sm w-full border p-3.5 rounded-lg mt-2"
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">
                                        Email is required
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="placeholder:text-black/25 placeholder:text-sm w-full border p-3.5 rounded-lg mt-2"
                                />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">
                                        Password is required
                                    </p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">
                                        Password must be 6 characters
                                    </p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">
                                        Password must be less than 20 characters
                                    </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">
                                        Password must have one Uppercase one
                                        lower case, one number and one special
                                        character.
                                    </p>
                                )}
                            </div>
                            <button className="py-4 rounded-lg text-white font-medium mt-4 w-full bg-primary">
                                Register
                            </button>
                        </form>
                    </div>
                    <div className="">
                        <p className="text-sm mt-6">
                            Don&#39;t have any account?{" "}
                            <Link href={"/sign-in"}>
                                <span className="text-primary font-medium">
                                    Sign In
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
