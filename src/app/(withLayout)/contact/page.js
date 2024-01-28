import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import MessageForm from "./MessageForm/MessageForm";

const page = () => {
    return (
        <div className=" container mx-auto lg:mt-40 mt-16 mb-32 lg:px-24 flex flex-col-reverse lg:flex-row ">
            {/* Contact information */}
            <div className="lg:w-3/5 mx-auto mt-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-16">Contact Us</h2>
                <ul className="text-xl mb-4 md:mb-8 space-y-2 md:space-y-4">
                    <li>Location: Dhaka Bangladesh</li>
                    <li>Email: webweavers2046@gmail.com</li>
                    <li>Phone: +880 197070 6676</li>
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
            {/* Messaging Form */}
            <div className="w-full px-3 md:px-0 md:w-4/5  mx-auto">
                <MessageForm></MessageForm>
            </div>
        </div>
    );
};

export default page;
