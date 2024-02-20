"use client";

import User from "./User";

const page = () => {
    const newsletterSubscribers = [
        {
            id: 1,
            name: "Alice Smith",
            userEmail: "smd71430@gmail.com",
            createdAt: "2024-02-18T12:00:00Z",
        },
        {
            id: 2,
            name: "Bob Johnson",
            userEmail: "mdmazharulislam2046@gmail.com",
            createdAt: "2024-02-18T12:00:00Z",
        },
        {
            id: 3,
            name: "Emily Brown",
            userEmail: "alamin102410@gmail.com",
            createdAt: "2024-02-18T12:00:00Z",
        },
        {
            id: 4,
            name: "Michael Lee",
            userEmail: "shakilahmmed8882@gmail.com",
            createdAt: "2024-02-18T12:00:00Z",
        },
        {
            id: 5,
            name: "Sarah Wilson",
            userEmail: "forhadairdrop@gmail.com",
            createdAt: "2024-02-18T12:00:00Z",
        },
        {
            id: 6,
            name: "David Jones",
            userEmail: "ahteshamsajid8@gmail.com",
            createdAt: "2024-02-18T12:00:00Z",
        },
    ];

    return (
        <div>
            <h1 className="text-lg font-semibold">Newsletter Subscribers</h1>
            <div className="pt-6">
                {newsletterSubscribers.map((member) => (
                    <User member={member} />
                ))}
            </div>
        </div>
    );
};

export default page;
