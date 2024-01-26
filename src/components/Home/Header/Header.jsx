import Image from "next/image";

const Header = () => {
    return (
        <div className="pt-11 md:px-24 px-6 text-center border-t-2 border-b-2">
            <div className="flex flex-col items-center">
                <h4 className="py-2 px-5 bg-[#E9F5E3] rounded-md mb-10">
                    Version 2.4 Released
                </h4>
                <h1 className="font-extrabold md:text-6xl text-2xl md:leading-[76px]">
                    Manage all of your <br /> task activities in one place
                </h1>
                <p className="mt-5 mb-14 leading-relaxed md:text-base text-sm">
                    Boost productivity with TaskTo., the ultimate task
                    management solution. <br /> Effortlessly organize,
                    prioritize, and track tasks for seamless project success.{" "}
                    <br /> Try it now for streamlined efficiency!
                </p>
                <button className="py-4 px-8 rounded-md bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-bold">
                    Get Started Today
                </button>
            </div>
            <div className="flex justify-center gap-10 mt-20">
                <div className="flex items-center justify-center mb-8">
                    <Image
                        width={120}
                        height={90}
                        src="/asset/img/pic1.png"
                        alt="pic1"
                    />
                </div>
                <div className="flex items-end">
                    <Image
                        width={260}
                        height={120}
                        src="/asset/img/pic2.png"
                        alt="pic2"
                    />
                </div>
                <div className="flex items-end justify-center">
                    <Image
                        width={260}
                        height={120}
                        src="/asset/img/pic3.png"
                        alt="pic3"
                    />
                </div>
                <div className="flex items-end justify-center mb-6">
                    <Image
                        width={120}
                        height={90}
                        src="/asset/img/pic4.png"
                        alt="pic4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
