import Image from "next/image";
import bannerPie from "@/assets/banner/bannerPie.png";
import bannerPic2 from "@/assets/banner/pic1.png";
import bannerPic3 from "@/assets/banner/pic2.png";
import bannerPic4 from "@/assets/banner/pic3.png";
import bannerPic5 from "@/assets/banner/pic4.png";
import bg from "@/assets/bg.png";
import "@/styles/globals.css";

const Header = () => {
    return (
        <div
            className="pt-14 md:px-24 px-6 text-center border-t-2 border-b-2 banner-bg"
            // style={{
            //     backgroundImage: `url(${bg.src})`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundSize: "contain",
            // }}
        >
            <div className="flex flex-col items-center">
                <h4 className="py-2 px-5 bg-[#E9F5E3] rounded-md mb-8 text-xs font-medium">
                    Version 2.4 Released
                </h4>
                <h1 className="font-extrabold xl:text-7xl lg:text-6xl md:text-5xl text-2xl md:leading-[76px]">
                    Manage all of your <br /> task activities in one place
                </h1>
                <p className="mt-5 mb-12 leading-relaxed md:text-base text-sm">
                    Boost productivity with TaskTo., the ultimate task
                    management solution. <br /> Effortlessly organize,
                    prioritize, and track tasks for seamless project success.{" "}
                    <br /> Try it now for streamlined efficiency!
                </p>
                <button className="py-4 px-8 rounded-md bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold">
                    Get Started Today
                </button>
            </div>
            <div className="flex justify-center gap-8 mt-20">
                <div className="flex items-center justify-center mb-8">
                    <Image
                        className="w-32 rounded-t-3xl"
                        src={bannerPic2}
                        alt="pic1"
                    />
                </div>
                <div className="flex items-end">
                    <Image
                        className="w-80 rounded-t-3xl"
                        src={bannerPic3}
                        alt="pic2"
                    />
                </div>
                <div className="flex items-end justify-center">
                    <Image
                        className="w-80 rounded-t-3xl"
                        src={bannerPic4}
                        alt="pic3"
                    />
                </div>
                <div className="flex items-end justify-center mb-6">
                    <Image
                        className="w-32 rounded-t-3xl"
                        src={bannerPic5}
                        alt="pic4"
                    />
                </div>
                <div className="flex items-end justify-end">
                    <Image
                        src={bannerPie}
                        alt="pic4"
                        className="w-72 rounded-t-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
