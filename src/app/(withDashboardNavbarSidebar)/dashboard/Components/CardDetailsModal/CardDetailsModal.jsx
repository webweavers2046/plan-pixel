import Image from "next/image";
import CardMembers from "./CardMembers";
import IndividualCardTasks from "./IndividualCardTasks";
import member03Img from "@/assets/team-members/rahim.jpg";
import useCardTasks from "@/hooks/useCardTasks";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useContext, useState } from "react";
import { ablyContext } from "@/components/ably/AblyProvider";
import { AuthContext } from "@/Providers/AuthProviders";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import useUser from "@/hooks/useUser";
import useSingleTask from "@/hooks/useSingleTask";
import Comments from "./Comments";
import Labels from "./Labels";

const CardDetailsModal = () => {
    const [openLabels, setOpenLabels] = useState(false)

    const { user, openCardDetails, setOpenCardDetails, cardId } = useContext(AuthContext);
    const { data: cardTasks, refetch } = useCardTasks(cardId);
    const { data: card, refetch: taskRefetch } = useSingleTask(cardId);
    // console.log(card);
    // console.log(cardTasks);
    const labels = card?.labels;
    const checkedLabels = labels?.filter(label => label?.labelCheck)
    // console.log(labels);
    // console.log(checkedLabels);


    const { activeWorkspace } = useGlobalContext()
    const { title, description, members } = activeWorkspace || { title: "", description: "", members: [] }
    // console.log(activeWorkspace);




    return (
        <div
            className={`${openCardDetails ? "block" : "hidden"} 
        bg-[#02001A33] backdrop-blur-[9px] text-black w-screen h-screen top-0 left-0 z-50 fixed xl:px-40 xl:py-16  lg:px-16 lg:py-10 md:px-10 md:py-10 p-7`}
        >
            <div className=" bg-[#FFFFFF] lg:w-[900px]  mx-auto h-full rounded-2xl overflow-auto ">
                <div className="flex justify-end mt-2 mr-4">
                    <button onClick={() => setOpenCardDetails(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                        >
                            <path
                                d="M10.5578 10.7232L10.6354 10.636C10.998 10.2734 11.5699 10.2475 11.9625 10.5583L12.0497 10.636L16.9994 15.5858L21.9492 10.636C22.3118 10.2734 22.8836 10.2475 23.2762 10.5583L23.3634 10.636C23.726 10.9986 23.7519 11.5705 23.4411 11.9631L23.3634 12.0503L18.4136 17L23.3634 21.9497C23.726 22.3124 23.7519 22.8842 23.4411 23.2768L23.3634 23.364C23.0008 23.7266 22.4289 23.7525 22.0363 23.4417L21.9492 23.364L16.9994 18.4142L12.0497 23.364C11.687 23.7266 11.1152 23.7525 10.7227 23.4417L10.6354 23.364C10.2728 23.0014 10.2469 22.4295 10.5577 22.0369L10.6354 21.9497L15.5852 17L10.6354 12.0503C10.2728 11.6876 10.2469 11.1158 10.5578 10.7232Z"
                                fill="#212121"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full  h-full py-4 md:pl-12 md:pr-8 px-5 gap-6">
                    <div className="space-y-3 w-full">
                        {/* card name, description and other info */}
                        <p className="text-2xl font-semibold">{card?.title}</p>
                        <p>{card?.description}</p>
                        <div className="flex gap-1">
                            {
                                checkedLabels?.map(label => <p key={label}
                                    style={{backgroundColor: label?.bgColor}}
                                    className={`text-[10px] font-semibold px-3 py-2  rounded-md`}>
                                    {label?.labelTitle}
                                </p>
                                )
                            }

                        </div>
                        {/* members */}
                        <div className="pt-1">
                            <p className="text-xs font-semibold">Members</p>
                            <CardMembers members={members}></CardMembers>
                        </div>

                        {/* Individual Tasks */}
                        <div className="pt-8 flex flex-col gap-10">
                            {
                                members?.map(member =>
                                    <IndividualCardTasks
                                        key={member?.email}
                                        member={member}
                                        cardTasks={cardTasks}
                                        cardId={cardId}
                                        refetch={refetch}
                                    ></IndividualCardTasks>)
                            }
                        </div>

                        {/* comment section */}
                        <Comments cardId={cardId}></Comments>
                    </div>


                    {/* Date Time */}
                    <div className="h-full md:w-[350px] pb-5 md:pb-0 font-semibold">
                        <div className="bg-[#D9D9D966] h-fit w-full  px-4 py-2 rounded-lg">
                            <button className=" w-full flex items-center gap-2 bg-[#D9D9D9] rounded-lg p-3 mt-5">
                                <RxAvatar className="text-2xl"></RxAvatar>
                                <span>Join</span>
                            </button>
                            <button className=" w-full flex items-center gap-2 bg-[#D9D9D9] rounded-lg p-3 mt-5">
                                <IoIosPeople className="text-2xl"></IoIosPeople>
                                <span>Members</span>
                            </button>
                            <div className="border-2 mt-6 border-[#D9D9D9]"></div>
                            {/* dates */}
                            <div className=" mt-4">
                                <p className="">Assign Date:</p>
                                <h4 className="text-xl mt-2">{card?.dates?.startDate}</h4>
                            </div>
                            <div className=" mt-4">
                                <p className="">Deadline:</p>
                                <h4 className="text-xl mt-2">{card?.dates?.dueDate}</h4>
                            </div>

                            {/* Labels */}

                            {
                                openLabels ?
                                    <Labels setOpenLabels={setOpenLabels} card={card} taskRefetch={taskRefetch}></Labels>
                                    :
                                    <button onClick={() => setOpenLabels(!openLabels)} className=" w-full flex items-center gap-2 bg-[#D9D9D9] rounded-lg p-3 mt-5">
                                        <RiCompassDiscoverLine className="text-2xl"></RiCompassDiscoverLine>
                                        <span>Add Labels</span>
                                    </button>
                            }


                        </div>
                        {/* <button className="w-full bg-[#50B577] rounded-lg py-3 text-white mt-6">Save Task</button> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetailsModal;

