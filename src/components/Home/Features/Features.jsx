import featureImage01 from "@/assets/features/f2.png";
import featureImage02 from "@/assets/features/f1.png";
import featureImage03 from "@/assets/features/f3.png";
import Image from "next/image";

const Features = () => {
    return (
        <section className="container mx-auto py-16 md:px-24 px-7">
            <div className="">
                <p className="text- font-semibold mb-2 text-green-500">
                    Key Features
                </p>
                <h2 className="text-6xl font-semibold w-6/12 text- ">
                    A task manager you can trust for teams.
                </h2>
            </div>
            <div className="mt-20 mb-10">
                <div className="bg-[#50B577]/30 rounded-xl px-16 pt-24 pb-14 grid grid-cols-7 justify-between">
                    <div className="col-span-5 px-6 space-y-4">
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-2">
                                    <div className="w-8 h-8 bg-[#50B577] rounded-full"></div>
                                </div>
                                <div className="w-0.5 h-full bg-[#50B577] rounded-full"></div>
                            </div>
                            <div className="">
                                <div className="text-5xl font-semibold ">
                                    <h2 className="">Simple to use,</h2>
                                    <h2 className="">Powerful when need.</h2>
                                </div>
                                <p className="w-7/12 font-medium mt-4">
                                    Drag and drop feature enables users to
                                    intuitively move elements by clicking,
                                    dragging, and releasing them onto a
                                    designated area, streamlining interaction
                                    and enhancing user experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 bg-[#50B577] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#50B577] text-white">
                                    Harness the Power of Drag and Drop
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 bg-[#50B577] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#50B577] text-white">
                                    Master Efficiency
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 me-0 relative">
                        <Image
                            className="-mt-40 me-0"
                            src={featureImage01}
                            alt="Feature Image"
                        ></Image>
                    </div>
                </div>
                <div className="bg-[#FBBC05]/30 rounded-xl px-16 pt-24 pb-14 grid grid-cols-8 justify-between mt-16">
                    <div className="col-span-4 px-6 space-y-4">
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-2">
                                    <div className="w-8 h-8 bg-[#FBBC05] rounded-full"></div>
                                </div>
                                <div className="w-0.5 h-full bg-[#FBBC05] rounded-full"></div>
                            </div>
                            <div className="">
                                <div className="text-5xl font-semibold ">
                                    <h2 className="">
                                        Message Your Team Members Effortlessly!
                                    </h2>
                                </div>
                                <p className=" font-medium mt-4">
                                    Stay in sync with your team by utilizing the
                                    message team member option, facilitating
                                    quick communication and collaboration on
                                    projects, tasks, and ideas.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 bg-[#FBBC05] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className=" px-6 py-2 rounded-full bg-[#FBBC05] text-black font-semibold">
                                    Harness the Power of Drag and Drop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 me-0 relative">
                        <Image
                            className="-mt- me-0"
                            src={featureImage02}
                            alt="Feature Image"
                        ></Image>
                    </div>
                    <div className="">
                        <div className="flex gap-2">
                            <div className="flex flex-col items-center">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 bg-[#FBBC05] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="px-6 py-2 rounded-full bg-[#FBBC05] text-black font-semibold text-xs">
                                    Connect Seamlessly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#93C648]/30 rounded-xl px-16 py-16 grid grid-cols-8 justify-between mt-16">
                    <div className="col-span-3 me-0 relative ms-6">
                        <Image
                            className="-mt- me-0"
                            src={featureImage03}
                            alt="Feature Image"
                        ></Image>
                    </div>
                    <div className=""></div>
                    <div className="col-span-4 px-6 space-y-4 py-10">
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-2">
                                    <div className="w-8 h-8 bg-[#93C648] rounded-full"></div>
                                </div>
                                <div className="w-0.5 h-full bg-[#93C648] rounded-full"></div>
                            </div>
                            <div className="">
                                <div className="text-5xl font-semibold ">
                                    <h2 className="">
                                        Stay on Track: Manage Tasks
                                        Effortlessly!
                                    </h2>
                                </div>
                                <p className=" font-medium mt-4">
                                    Efficiently track your progress with the
                                    user task function, allowing you to view
                                    both completed and incomplete tasks at a
                                    glance.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 bg-[#93C648] rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white">
                                    Time Management
                                </p>
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white">
                                    Task Tracking
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 bg-[#93C648] rounded-full"></div>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white">
                                    Project Organization
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="mt-0.5">
                                    <div className="w-8 h-8 bg-[#93C648] rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white">
                                    Efficiency Enhancement
                                </p>
                                <p className="font-medium px-6 py-2 rounded-full bg-[#93C648] text-white">
                                    Goal Management
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
