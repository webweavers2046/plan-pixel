"use client";

import { Modal } from "flowbite-react";
import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxios from "@/hooks/useAxios";

const User = ({ member, refetch }) => {
    const { userEmail } = member;
    const [buttonLoading, setButtonLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const messageRef = useRef(null);
    const axiosAdmin = useAxios();
    const serviceId = "service_2whe5f8";
    const publicKey = "0vMK8CqEQPg9bKP9B";
    const templateId = "template_xpon2ll";

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
                    // className: "mt-32",
                });
                setButtonLoading(false);
                setOpenModal(false);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    // delete function
    const deleteNewsletterSubscription = (id) => {
        setIsDeleting(true);
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: "#d63031",
                cancelButtonColor: "#1dbf73",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result?.isConfirmed) {
                    axiosAdmin
                        .delete(`/api/newsletters/${id}`)
                        .then((result) => {
                            if (result?.data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                });
                                toast.error("successfully deleted");
                                refetch();
                                setIsDeleting(false);
                            }
                        });
                }
            });
            setIsDeleting(false);
        } catch (error) {
            console.error("Error deleting user:", error);
            setIsDeleting(false);
        }
    };
    return (
        <div>
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
            <div
                key={member.id}
                className="grid grid-cols-4 items-center justify-between bg-dashboardPrimaryColor/50 mb-3 px-3 py-3 rounded-lg"
            >
                <div className="flex gap-6 items-center">
                    <div className="">
                        <p className="text-xs opacity-70">Name: </p>
                        <h2 className="text-xl font-semibold -mt-0.5">
                            {member.name}
                        </h2>
                    </div>
                </div>

                <div className="">
                    <p className="text-xs opacity-70">Email: </p>
                    <h6 className="font-semibold">{member.userEmail}</h6>
                </div>
                <div className="">
                    <p className="text-xs opacity-70">Create At: </p>
                    <h6 className="font-semibold">{member.createdAt}</h6>
                </div>

                <div className=" text-end space-x-3">
                    <button
                        className="text-sm font-semibold px-3 py-0.5 text-black bg-primary/30  rounded-full"
                        onClick={() => setOpenModal(true)}
                    >
                        Send Message
                    </button>
                    <button
                        className="text-sm font-semibold px-3 py-0.5 text-white bg-rose-600 rounded-full"
                        onClick={() => deleteNewsletterSubscription(member._id)}
                    >
                        {isDeleting ? (
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
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <span>Delete Subscription</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;
