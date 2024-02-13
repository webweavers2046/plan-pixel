"use client";

import Image from "next/image";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import member01Img from "@/assets/team-members/sami.jpg";
import member02Img from "@/assets/team-members/mazharul.jpg";
import member03Img from "@/assets/team-members/rahim.jpg";
import member04Img from "@/assets/team-members/shakil.jpg";
import member05Img from "@/assets/team-members/sajid.jpg";
import member06Img from "@/assets/team-members/forhad.jpg";

import MassageIcon from "@/assets/dashboard/Message.svg";
import { useContext, useRef, useState } from "react";
import { Modal } from "flowbite-react";
import toast from "react-hot-toast";
import useGlobalContext from "@/hooks/useGlobalContext";
import { ablyContext } from "@/components/ably/AblyProvider";

const TeamMembers = () => {
    const {workspaceBasedMembers,defaultActiveWorkspace} = useGlobalContext()
    const {allWorkspaceMembers,activeWorspace} = useContext(ablyContext)

    const { title,description } = activeWorspace || defaultActiveWorkspace || { title: "Demo title" };
  
    

    const membersInWorkspace = allWorkspaceMembers.length > 0? allWorkspaceMembers : workspaceBasedMembers 
    
    
    return (
        <div className="shadow-md w-full rounded-xl p-6 max-h-dvh overscroll-auto border">
            <h1 className=" flex items-center gap-2 text-2xl font-bold p-4">Team Member <span className="text-[12px] font-normal bg-[#f6866ad1] h-6 px-2 flex items-center rounded-lg text-white">{title}</span></h1>
            {membersInWorkspace?.map((member, index) => (
                <TeamMember
                    key={index}
                    name={member.name}
                    userEmail={member.email}
                    // avatar={member.avatar}
                    avatar={member02Img}
                    
                />
            ))}
        </div>
    );
};

export default TeamMembers;

function TeamMember({ name, userEmail, avatar }) {
    const [buttonLoading, setButtonLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const messageRef = useRef(null);

    const serviceId = "service_2whe5f8";
    const publicKey = "0vMK8CqEQPg9bKP9B";
    const templateId = "template_xpon2ll";

    // send message

    const handleSendMessage = (e) => {
        e.preventDefault();
        setButtonLoading(true);
        const message = messageRef.current.value;
        console.log(message);
        const templateParams = {
            to_email: userEmail,
            subject: "Modern Gym trainer Message",
            message: message,
        };
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully:", response);

                toast.success("Message Sended", {
                    duration: 2000,
                    className: "mt-32",
                });
                setButtonLoading(false);
                setOpenModal(true);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <div className="flex items-center justify-between p-4 rounded-lg bg-[#F9F9F9] mb-3">
            {/* modal  */}
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Send Message</Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                To:{" "}
                                <span className="text-black">{userEmail}</span>
                            </p>
                            <textarea
                                name="message"
                                ref={messageRef}
                                className="w-full border-0 rounded-md bg-gray-400/10"
                                placeholder="Message..."
                                id=""
                                cols="30"
                                rows="8"
                            ></textarea>
                        </div>
                        <div className="text-end">
                            <button
                                className="px-4 py-3 bg-[#94f3b0] rounded-md mt-6"
                                type="submit"
                                onClick={handleSendMessage}
                            >
                                {buttonLoading ? (
                                    <div className="mx-6">
                                        <div role="status">
                                            <svg
                                                aria-hidden="true"
                                                className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <span>
                                        {" "}
                                        Send <IoSend className="inline ms-3" />
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            <div className="flex items-center gap-4">
                <Image
                    width={44}
                    height={44}
                    className="rounded-full object-cover w-10 h-10"
                    src={avatar}
                    alt="timeIcon"
                />

                <div className="">
                    <p className="text- font-semibold">{name}</p>
                    <p className="text-xs font-medium text-black/50">
                        {userEmail}
                    </p>
                </div>
            </div>
            <button onClick={() => setOpenModal(true)} className="">
                <Image className="" src={MassageIcon} alt="team member" />
            </button>
        </div>
    );
}


const teamMemberData = [
    {
        name: "Sabbir Mohammad Sami",
        email: "smd71430@gmail.com",
        avatar: member01Img,
    },
    {
        name: "Mazharul Shishir",
        email: "mdmazharulislam2046@gmail.com",
        avatar: member02Img,
    },
    {
        name: "MD Rahim",
        email: "alamin102410@gmail.com",
        avatar: member03Img,
    },
    {
        name: "Shakil Ahmmed",
        email: "shakilahmmed8882@gmail.com",
        avatar: member04Img,
    },

    {
        name: "Ahetesham Sajid",
        email: "ahteshamsajid8@gmail.com",
        avatar: member05Img,
    },

    {
        name: "Forhad hossain",
        email: "forhadairdrop@gmail.com",
        avatar: member06Img,
    },
];
