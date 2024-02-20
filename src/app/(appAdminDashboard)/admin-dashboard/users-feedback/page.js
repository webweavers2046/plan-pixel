import Image from "next/image";
import userAvatar from "@/assets/person/p1.jpg";
import { RiSendPlaneFill } from "react-icons/ri";

const UserFeedback = () => {
    const totalNumberOfFeedback = 18;
    const feedbackData = [
        {
            userName: "Alice Johnson",
            userEmail: "alice@example.com",
            date: "2024-02-14",
            feedback:
                "I've been using the task management site for a while now, and I must say, it's been an absolute game-changer for me! It's incredibly intuitive and user-friendly. ",
            userImage: "https://example.com/alice-johnson.jpg",
        },
        {
            userName: "Bob Smith",
            userEmail: "bob@example.com",
            date: "2024-02-13",
            feedback:
                "I've been pleasantly surprised by the task management site. As someone who's not very tech-savvy, I was initially hesitant to try it out, but I'm glad I did! The site's simplicity is its greatest strength. ",
            userImage: "https://example.com/bob-smith.jpg",
        },
        {
            userName: "Emily Brown",
            userEmail: "emily@example.com",
            date: "2024-02-12",
            feedback:
                "I've tried numerous task management tools in the past, but none of them have quite met my expectations!",
            userImage: "https://example.com/emily-brown.jpg",
        },
        {
            userName: "Michael Wilson",
            userEmail: "michael@example.com",
            date: "2024-02-11",
            feedback:
                "Overall, I've had a positive experience with the task management site. It's helped me stay organized and on top of my tasks, which is crucial in my line of work. I've had with the site. I look forward to seeing how it evolves in the future.",
            userImage: "https://example.com/michael-wilson.jpg",
        },
        {
            userName: "Sarah Martinez",
            userEmail: "sarah@example.com",
            date: "2024-02-10",
            feedback:
                "I've been using the task management site primarily on my mobile device, and while it's functional, there's room for improvement in the mobile experience. Navigating through the site on a smaller screen can be a bit cumbersome at times, especially when dealing with multiple tasks. Some elements seem to overlap or get cut off, making it difficult to interact with them smoothly. I believe optimizing the mobile interface would greatly enhance the user experience for those who prefer to use the site on their smartphones or tablets.",
            userImage: "https://example.com/sarah-martinez.jpg",
        },
        {
            userName: "Alice Johnson",
            userEmail: "alice@example.com",
            date: "2024-02-14",
            feedback:
                "I particularly appreciate the ability to set deadlines, prioritize tasks, and collaborate with my team seamlessly. Overall, I'm extremely satisfied with the site, and I highly recommend it to anyone looking to boost their productivity.",
            userImage: "https://example.com/alice-johnson.jpg",
        },
        {
            userName: "Michael Wilson",
            userEmail: "michael@example.com",
            date: "2024-02-11",
            feedback:
                "Overall, I've had a positive experience with the task management site. It's helped me stay organized and on top of my tasks, which is crucial in my line of work. However, I did encounter a minor issue with one of the features not working as expected. Thankfully, the support team was quick to respond and provided a solution promptly.",
            userImage: "https://example.com/michael-wilson.jpg",
        },
        {
            userName: "Bob Smith",
            userEmail: "bob@example.com",
            date: "2024-02-13",
            feedback:
                "The customer support team has been incredibly helpful whenever I've had questions or encountered any issues. Overall, it's been a positive experience, and I plan to continue using it in the future.",
            userImage: "https://example.com/bob-smith.jpg",
        },
        {
            userName: "Emily Brown",
            userEmail: "emily@example.com",
            date: "2024-02-12",
            feedback:
                "Additionally, the site's performance has been exceptional; it's fast, reliable, and doesn't lag even when handling large volumes of data. Kudos to the development team for creating such a fantastic tool!",
            userImage: "https://example.com/emily-brown.jpg",
        },
        {
            userName: "Sarah Martinez",
            userEmail: "sarah@example.com",
            date: "2024-02-10",
            feedback:
                "I've been using the task management site primarily on my mobile device, and while it's functional, there's room for improvement in the mobile experience. Navigating through the site on a smaller screen can be a bit cumbersome at times, especially when dealing with multiple tasks. ",
            userImage: "https://example.com/sarah-martinez.jpg",
        },
        {
            userName: "Alice Johnson",
            userEmail: "alice@example.com",
            date: "2024-02-14",
            feedback:
                "The features are robust, and it helps me stay organized like never before. I particularly appreciate the ability to set deadlines, prioritize tasks, and collaborate with my team seamlessly. Overall, I'm extremely satisfied with the site, and I highly recommend it to anyone looking to boost their productivity.",
            userImage: "https://example.com/alice-johnson.jpg",
        },
        {
            userName: "Bob Smith",
            userEmail: "bob@example.com",
            date: "2024-02-13",
            feedback: "I plan to continue using it in the future.",
            userImage: "https://example.com/bob-smith.jpg",
        },
        {
            userName: "Emily Brown",
            userEmail: "emily@example.com",
            date: "2024-02-12",
            feedback:
                "Additionally, the site's performance has been exceptional; it's fast, reliable, and doesn't lag even when handling large volumes of data. Kudos to the development team for creating such a fantastic tool!",
            userImage: "https://example.com/emily-brown.jpg",
        },
        {
            userName: "Michael Wilson",
            userEmail: "michael@example.com",
            date: "2024-02-11",
            feedback:
                "I've had with the site. I look forward to seeing how it evolves in the future.",
            userImage: "https://example.com/michael-wilson.jpg",
        },
        {
            userName: "Sarah Martinez",
            userEmail: "sarah@example.com",
            date: "2024-02-10",
            feedback:
                "I've been using the task management site primarily on my mobile device, and while it's functional, there's room for improvement in the mobile experience. Navigating through the site on a smaller screen can be a bit cumbersome at times, especially when dealing with multiple tasks.",
            userImage: "https://example.com/sarah-martinez.jpg",
        },
        {
            userName: "Emily Brown",
            userEmail: "emily@example.com",
            date: "2024-02-12",
            feedback:
                "Additionally, the site's performance has been exceptional; it's fast, reliable, and doesn't lag even when handling large volumes of data. Kudos to the development team for creating such a fantastic tool!",
            userImage: "https://example.com/emily-brown.jpg",
        },
        {
            userName: "Sarah Martinez",
            userEmail: "sarah@example.com",
            date: "2024-02-10",
            feedback:
                "I've been using the task management site primarily on my mobile device, and while it's functional, there's room for improvement in the mobile experience. Navigating through the site on a smaller screen can be a bit cumbersome at times, especially when dealing with multiple tasks. ",
            userImage: "https://example.com/sarah-martinez.jpg",
        },
        {
            userName: "Alice Johnson",
            userEmail: "alice@example.com",
            date: "2024-02-14",
            feedback:
                "The features are robust, and it helps me stay organized like never before. I particularly appreciate the ability to set deadlines, prioritize tasks, and collaborate with my team seamlessly. Overall, I'm extremely satisfied with the site, and I highly recommend it to anyone looking to boost their productivity.",
            userImage: "https://example.com/alice-johnson.jpg",
        },
        {
            userName: "Bob Smith",
            userEmail: "bob@example.com",
            date: "2024-02-13",
            feedback: "I plan to continue using it in the future.",
            userImage: "https://example.com/bob-smith.jpg",
        },
        {
            userName: "Emily Brown",
            userEmail: "emily@example.com",
            date: "2024-02-12",
            feedback:
                "Additionally, the site's performance has been exceptional; it's fast, reliable, and doesn't lag even when handling large volumes of data. Kudos to the development team for creating such a fantastic tool!",
            userImage: "https://example.com/emily-brown.jpg",
        },
        {
            userName: "Michael Wilson",
            userEmail: "michael@example.com",
            date: "2024-02-11",
            feedback:
                "I've had with the site. I look forward to seeing how it evolves in the future.",
            userImage: "https://example.com/michael-wilson.jpg",
        },
        {
            userName: "Sarah Martinez",
            userEmail: "sarah@example.com",
            date: "2024-02-10",
            feedback:
                "I've been using the task management site primarily on my mobile device, and while it's functional, there's room for improvement in the mobile experience. Navigating through the site on a smaller screen can be a bit cumbersome at times, especially when dealing with multiple tasks.",
            userImage: "https://example.com/sarah-martinez.jpg",
        },
    ];

    const totalCardInRow = Math.ceil(totalNumberOfFeedback / 4);
    const row1 = 0 + totalCardInRow;
    const row2 = row1 + row1;
    const row3 = row2 + row1;
    const row4 = row3 + row1;

    console.log(totalCardInRow);

    return (
        <section>
            <div className="">
                <h2 className="text-lg font-semibold pb-6">Users feedback</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div className="grid gap-6">
                        {feedbackData.slice(0, row1).map((feedback, idx) => (
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
                                    <form className="flex gap-2 items-center justify-between">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="1"
                                            placeholder="Reply..."
                                            className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                        >
                                            <RiSendPlaneFill />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-6">
                        {feedbackData.slice(row1, row2).map((feedback, idx) => (
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
                                    <form className="flex gap-2 items-center justify-between">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="1"
                                            placeholder="Reply..."
                                            className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                        >
                                            <RiSendPlaneFill />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-6">
                        {feedbackData.slice(row2, row3).map((feedback, idx) => (
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
                                    <form className="flex gap-2 items-center justify-between">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="1"
                                            placeholder="Reply..."
                                            className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                        >
                                            <RiSendPlaneFill />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-6">
                        {feedbackData.slice(row3, row4).map((feedback, idx) => (
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
                                    <form className="flex gap-2 items-center justify-between">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="1"
                                            placeholder="Reply..."
                                            className="placeholder:opacity-50 border-0 rounded-xl placeholder:text-xs w-full bg-gray-300"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="p-3 rounded-t-xl rounded-br-xl bg-gradient-to-r from-primary/70 to-secondary/70 "
                                        >
                                            <RiSendPlaneFill />
                                        </button>
                                    </form>
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
