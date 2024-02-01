import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="border-t xl:px-24  bg-[#E9F5E3]">
            <div className="mx-auto container lg:px-24 px-7">
                <div className="lg:py-32 md:py-24 py-20">
                    <div className="grid md:grid-cols-2 md:justify-between md:items-center">
                        <div className=" md:block w-screen md:w-full">
                            <Image
                                className="h-12 w-auto"
                                src={logo}
                                alt="plan pixel"
                            ></Image>
                        </div>
                        <div className="md:flex items-center gap-5 lg:gap-10 md:justify-end justify-center mt-8 md:mt-0">
                            <p className="md:mb-0 mb-6">
                                Ready to get started?
                            </p>
                            <Link
                                className="py-3 px-6 bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold text-base rounded-sm"
                                href="/sign-in"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="md:grid lg:grid-cols-4 md:grid-cols-3 space-y-4 items-start justify-between mt-16 gap-6 px-3 md:px-0">
                        <div className="opacity-70 space-y-3 mx-auto md:mx-0">
                            <h4 className="text-xl font-semibold">
                                Quick Links
                            </h4>
                            <p className="text-sm ">
                                <Link href={"/"}>Home</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"/"}>About Us</Link>
                            </p>
                            <p className="text-sm ">
                                <Link href={"/"}>Insurance</Link>
                            </p>
                            <p className="text-sm ">
                                <Link href={"/"}>Privacy Policy</Link>
                            </p>
                        </div>
                        <div className="opacity-70 space-y-3 mx-auto md:mx-0">
                            <h4 className="text-xl font-semibold">
                                Our Service
                            </h4>
                            <p className="text-sm ">
                                <Link href={"/"}>Life Insurance</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"/"}>Car Insurance</Link>
                            </p>
                            <p className="text-sm ">
                                <Link href={"/"}>Health Insurance</Link>
                            </p>
                            <p className="text-sm ">
                                <Link href={"/"}>House Insurance</Link>
                            </p>
                        </div>
                        <div className="opacity-70 space-y-3 mx-auto md:mx-0 ">
                            <h4 className="text-xl font-semibold">Help</h4>
                            <p className="text-sm ">
                                <Link href={"/"}>FAQs</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"/"}>Contact Us</Link>
                            </p>
                        </div>
                        <div className="opacity-70 md:mt-5  lg:mt-0 space-y-3 col-span-3 lg:col-span-1 mx-auto md:mx-0 ">
                            <h4 className="text-2xl font-semibold mb-4">
                                Subscribe to our newsletter
                            </h4>
                            <div className="flex items-center justify-between">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className=" border-b border-0 w-full p-4 placeholder:text-xs bg-transparent"
                                />
                                <button className="p-2 bg-gradient-to-br from-[#93C648] to-[#50B577] rounded-full">
                                    <IoIosArrowForward className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
