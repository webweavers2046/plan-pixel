"use client";

import Image from "next/image";
import userAvatar from "@/assets/person/p1.jpg";
import { RiSendPlaneFill } from "react-icons/ri";
import { useState } from "react";
import Spinner from "@/components/Common/CommonModal/Spinner";
import useAxios from "@/hooks/useAxios";
import useDynamicData from "../Components/Hooks/useDynamicData";

const UserFeedback = () => {
    const [reply, setReply] = useState("");
    const axiosAdmin = useAxios();
    const {
        data: feedbackData,
        isLoading,
        refetch,
    } = useDynamicData("feedbackData", "/api/users-feedback");

    if (isLoading) {
        return <Spinner />;
    }

    const totalCardInRow = Math.ceil(feedbackData.numberOfFeedbacks / 4);
    const row1 = 0 + totalCardInRow;
    const row2 = row1 + row1;
    const row3 = row2 + row1;
    const row4 = row3 + row1;

    const handleReplyChange = (e) => {
        setReply(e.target.value);
    };

    const handleReplyFeedback = async (e, feedbackId) => {
        e.preventDefault();
        console.log(reply, feedbackId);
        try {
            const response = await axiosAdmin.patch(
                `/api/users-feedback/${feedbackId}`,
                {
                    reply: reply,
                }
            );
            refetch();

            console.log("Feedback updated successfully", response.data);
        } catch (error) {
            console.error("Error updating feedback:", error.message);
        }
    };

    return (
        <section>
            <div className="">
                <h2 className="text-lg font-semibold pb-6">Users feedback</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div className="grid gap-6">
                        {feedbackData?.feedbacks
                            ?.slice(0, row1)
                            .map((feedback, idx) => (
                                <div
                                    className="flex flex-col bg-dashboardPrimaryColor/60 h-auto p-8 rounded-lg
                         "
                                >
                                    <p className="leading-6 opacity-90">
                                        {feedback.feedback}
                                    </p>
                                    <div className="flex items-end justify-between mt-2 grow">
                                        <div className="flex gap-4 items-center mt-4">
                                            <div className="">
                                                <Image
                                                    className="rounded-full"
                                                    width={35}
                                                    height={35}
                                                    src={feedback.userImage}
                                                    alt={feedback.name}
                                                />
                                            </div>
                                            <div className="">
                                                <h4 className="font-semibold">
                                                    {feedback.userName}
                                                </h4>
                                                <p className="text-xs">
                                                    {feedback.userEmail}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-xs opacity-70">
                                                Date:{" "}
                                            </p>
                                            <h6 className="text-sm font-semibold">
                                                {feedback.date}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        {feedback.reply.length > 1 ? (
                                            <div className="">
                                                <p className="text-xs">
                                                    Reply:
                                                </p>
                                                <p className="border-0 p-2 rounded-xl placeholder:text-xs w-full bg-gray-300">
                                                    {feedback.reply}
                                                </p>
                                            </div>
                                        ) : (
                                            <form
                                                onSubmit={handleReplyFeedback}
                                                className="flex gap-2 items-center justify-between"
                                            >
                                                <textarea
                                                    name="reply"
                                                    onChange={handleReplyChange}
                                                    id=""
                                                    cols="30"
                                                    rows="1"
                                                    placeholder="Reply..."
                                                    className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                                ></textarea>
                                                <button
                                                    type="submit"
                                                    onClick={(e) =>
                                                        handleReplyFeedback(
                                                            e,
                                                            feedback._id
                                                        )
                                                    }
                                                    className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                                >
                                                    <RiSendPlaneFill />
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="grid gap-6">
                        {feedbackData?.feedbacks
                            ?.slice(row1, row2)
                            .map((feedback, idx) => (
                                <div
                                    className="flex flex-col bg-dashboardPrimaryColor/60 h-auto p-8 rounded-lg
                         "
                                >
                                    <p className="leading-6 opacity-90">
                                        {feedback.feedback}
                                    </p>
                                    <div className="flex items-end justify-between  mt-2 grow">
                                        <div className="flex gap-4 items-center mt-4">
                                            <div className="">
                                                <Image
                                                    className="rounded-full"
                                                    width={35}
                                                    height={35}
                                                    src={userAvatar}
                                                    alt={feedback.name}
                                                />
                                            </div>
                                            <div className="">
                                                <h4 className="font-semibold">
                                                    {feedback.userName}
                                                </h4>
                                                <p className="text-xs">
                                                    {feedback.userEmail}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-xs opacity-70">
                                                Date:{" "}
                                            </p>
                                            <h6 className="text-sm font-semibold">
                                                {feedback.date}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        {feedback.reply.length > 1 ? (
                                            <div className="">
                                                <p className="text-xs">
                                                    Reply:
                                                </p>
                                                <p className="border-0 p-2 rounded-xl placeholder:text-xs w-full bg-gray-300">
                                                    {feedback.reply}
                                                </p>
                                            </div>
                                        ) : (
                                            <form
                                                onSubmit={handleReplyFeedback}
                                                className="flex gap-2 items-center justify-between"
                                            >
                                                <textarea
                                                    name="reply"
                                                    onChange={handleReplyChange}
                                                    id=""
                                                    cols="30"
                                                    rows="1"
                                                    placeholder="Reply..."
                                                    className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                                ></textarea>
                                                <button
                                                    type="submit"
                                                    onClick={(e) =>
                                                        handleReplyFeedback(
                                                            e,
                                                            feedback._id
                                                        )
                                                    }
                                                    className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                                >
                                                    <RiSendPlaneFill />
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="grid gap-6">
                        {feedbackData?.feedbacks
                            ?.slice(row2, row3)
                            .map((feedback, idx) => (
                                <div
                                    className="flex flex-col bg-dashboardPrimaryColor/60 h-auto p-8 rounded-lg
                            "
                                >
                                    <p className="leading-6 opacity-90">
                                        {feedback.feedback}
                                    </p>
                                    <div className="flex items-end justify-between  mt-2 grow">
                                        <div className="flex gap-4 items-center mt-4">
                                            <div className="">
                                                <Image
                                                    className="rounded-full"
                                                    width={35}
                                                    height={35}
                                                    src={userAvatar}
                                                    alt={feedback.name}
                                                />
                                            </div>
                                            <div className="">
                                                <h4 className="font-semibold">
                                                    {feedback.userName}
                                                </h4>
                                                <p className="text-xs">
                                                    {feedback.userEmail}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-xs opacity-70">
                                                Date:{" "}
                                            </p>
                                            <h6 className="text-sm font-semibold">
                                                {feedback.date}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        {feedback.reply.length > 1 ? (
                                            <div className="">
                                                <p className="text-xs">
                                                    Reply:
                                                </p>
                                                <p className="border-0 p-2 rounded-xl placeholder:text-xs w-full bg-gray-300">
                                                    {feedback.reply}
                                                </p>
                                            </div>
                                        ) : (
                                            <form
                                                onSubmit={handleReplyFeedback}
                                                className="flex gap-2 items-center justify-between"
                                            >
                                                <textarea
                                                    name="reply"
                                                    onChange={handleReplyChange}
                                                    id=""
                                                    cols="30"
                                                    rows="1"
                                                    placeholder="Reply..."
                                                    className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                                ></textarea>
                                                <button
                                                    type="submit"
                                                    onClick={(e) =>
                                                        handleReplyFeedback(
                                                            e,
                                                            feedback._id
                                                        )
                                                    }
                                                    className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                                >
                                                    <RiSendPlaneFill />
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="grid gap-6">
                        {feedbackData?.feedbacks
                            ?.slice(row3, row4)
                            .map((feedback, idx) => (
                                <div
                                    className="flex flex-col bg-dashboardPrimaryColor/60 h-auto p-8 rounded-lg
                         "
                                >
                                    <p className="leading-6 opacity-90">
                                        {feedback.feedback}
                                    </p>
                                    <div className="flex items-end justify-between  mt-2 grow">
                                        <div className="flex gap-4 items-center mt-4">
                                            <div className="">
                                                <Image
                                                    className="rounded-full"
                                                    width={35}
                                                    height={35}
                                                    src={userAvatar}
                                                    alt={feedback.name}
                                                />
                                            </div>
                                            <div className="">
                                                <h4 className="font-semibold">
                                                    {feedback.userName}
                                                </h4>
                                                <p className="text-xs">
                                                    {feedback.userEmail}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-xs opacity-70">
                                                Date:{" "}
                                            </p>
                                            <h6 className="text-sm font-semibold">
                                                {feedback.date}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        {feedback.reply.length > 1 ? (
                                            <div className="">
                                                <p className="text-xs">
                                                    Reply:
                                                </p>
                                                <p className="border-0 p-2 rounded-xl placeholder:text-xs w-full bg-gray-300">
                                                    {feedback.reply}
                                                </p>
                                            </div>
                                        ) : (
                                            <form
                                                onSubmit={handleReplyFeedback}
                                                className="flex gap-2 items-center justify-between"
                                            >
                                                <textarea
                                                    name="reply"
                                                    onChange={handleReplyChange}
                                                    id=""
                                                    cols="30"
                                                    rows="1"
                                                    placeholder="Reply..."
                                                    className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                                ></textarea>
                                                <button
                                                    type="submit"
                                                    onClick={(e) =>
                                                        handleReplyFeedback(
                                                            e,
                                                            feedback._id
                                                        )
                                                    }
                                                    className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                                >
                                                    <RiSendPlaneFill />
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserFeedback;
