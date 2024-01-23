import signInBg from "@/assets/sign-bg.jpg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";


const SignIn = () => {
    return (
        <section
            className="
        grid md:grid-cols-9 h-screen"
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
                        <h2 className="text-4xl font-bold">Sign In</h2>
                        <p className="text-sm ">
                            Hey welcome to PlanPixel.io Please sign in your
                            account.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <button className="py-4 w-full  border rounded-lg">
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
                        <form>
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="placeholder:text-black/25 placeholder:text-sm w-full border p-3.5 rounded-lg mt-2"
                                />
                            </div>
                            <div className="mt-3">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="email"
                                    placeholder="Enter your password"
                                    className="placeholder:text-black/25 placeholder:text-sm w-full border p-3.5 rounded-lg mt-2"
                                />
                            </div>
                            <button className="py-4 rounded-lg text-white font-medium mt-4 w-full bg-primary">
                                Sign In
                            </button>
                        </form>
                    </div>
                    <div className="">
                        <p className="text-sm mt-6">
                            Don&#39;t have any account?{" "}
                            <Link href={"/register"}>
                                <span className="text-primary font-medium">
                                    Register
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
