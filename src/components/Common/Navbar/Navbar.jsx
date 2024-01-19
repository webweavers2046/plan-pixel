import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="py-11 px-24 grid grid-cols-3">
            <Link href="/">
                <Image
                    width={150}
                    height={90}
                    src="/asset/img/logo1.png"
                    alt="logo"
                />
            </Link>
            <div className="flex justify-center items-center gap-7">
                <Link href="/" className="font-bold">
                    Home
                </Link>
                <Link href="/" className="font-bold">
                    Pricing
                </Link>
                <Link href="/" className="font-bold">
                    About Us
                </Link>
                <Link href="/" className="font-bold">
                    Contact Us
                </Link>
            </div>
            <div className="flex items-center justify-end">
                <Link
                    className="py-2 px-6 bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold text-lg rounded-md"
                    href="/sign-in"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
