import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="container mx-auto ">
                <div className="py-16">
                    <div className="grid md:grid-cols-2 justify-between items-center">
                        <div className="">
                            <Image
                                className="h-12 w-auto"
                                src={logo}
                                alt="plan pixel"
                            ></Image>
                        </div>
                        <div className="flex items-center gap-10 justify-end">
                            <p className="">Ready to get started?</p>
                            <Link
                                className="py-3 px-6 bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold text-base rounded-sm"
                                href="/sign-in"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 items-start justify-between mt-16 gap-6">
                        <div className="opacity-70 space-y-3">
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
                        <div className="opacity-70 space-y-3">
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
                        <div className="opacity-70 space-y-3">
                            <h4 className="text-xl font-semibold">Help</h4>
                            <p className="text-sm ">
                                <Link href={"/"}>FAQs</Link>
                            </p>
                            <p className="text-sm">
                                <Link href={"/"}>Contact Us</Link>
                            </p>
                        </div>
                        <div className="opacity-70 space-y-3">
                            <h4 className="text-2xl font-semibold mb-4">
                                Subscribe to our newsletter
                            </h4>
                            <div className="">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="border-b p-4 placeholder:text-xs"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
