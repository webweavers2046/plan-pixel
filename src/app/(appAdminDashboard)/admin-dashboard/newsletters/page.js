"use client";

import { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import Spinner from "@/components/Common/CommonModal/Spinner";

const page = () => {
    const [loading, setLoading] = useState(false);
    const [newsletterSubscribers, setNewsletterSubscribers] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/newsletters"
                );
                setNewsletterSubscribers(response.data);
            } catch (error) {
                console.log("error to get newsletters", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <Spinner />;
    }

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
