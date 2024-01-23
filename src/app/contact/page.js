import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const page = () => {
    return (
        <div className="mt-40 mb-32 lg:px-24">
            {/* Contact information */}
            <div>
                <h2 className="text-5xl font-bold mb-16">Contact Us</h2>
                <ul className="text-xl mb-8 space-y-4">
                    <li>
                        Location: Dhaka Bangladesh
                    </li>
                    <li>
                        Email: webweavers2046@gmail.com
                    </li>
                    <li>
                        Phone: +880 197070 6676
                    </li>
                </ul>
                <div className="flex gap-6 ">
                    <a href="">
                        <FaLinkedinIn className="text-4xl"></FaLinkedinIn>
                    </a>
                    <a href="">
                        <FaFacebookF className="text-4xl"></FaFacebookF>
                    </a>
                    <a href="">
                        <FaTwitter className="text-4xl"></FaTwitter>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default page;