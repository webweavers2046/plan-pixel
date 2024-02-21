"use client";
import Spinner from "@/components/Common/CommonModal/Spinner";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const page = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // fetch data from backend
    useEffect(() => {
        setIsLoading(true);
        const fetchArticles = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/articles"
                );
                setArticles(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log("Error to get Article data");
                setIsLoading(false);
            }
        };
        fetchArticles();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    console.log(articles);
    return (
        <div className="">
            <div className="">
                <p className="text-lg font-semibold">All article</p>
                <div className="grid grid-cols-4 items-start justify-between pt-6 gap-6">
                    {articles.map((post) => (
                        <ArticleCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default page;

const ArticleCard = ({ post }) => {
    const { title, description, author, date, articleImage_url, avatar_url } =
        post;

    return (
        <div className="lg:max-w-[364px] max-w-[345px] rounded-lg overflow-hidden border-2 bg-white mb-6 relative">
            <button className=" bg-rose-500 border-4 border-white rounded-lg p-2 flex items-center justify-center absolute -top-2 -right-2 text-2xl text-white">
                <RiCloseLine />
            </button>
            <img
                className="w-full h-48 object-cover"
                src={articleImage_url}
                alt="Illustration"
            />
            <div className="px-5 py-4">
                <h3 className="text-xl font-bold ">{title}</h3>
                <p className="text-sm ">{description}</p>
            </div>
            <div className="px-6 flex items-center gap-3 pb-8">
                <div className="w-10 h-10 border rounded-full flex items-center justify-center">
                    <Image
                        className="w-8 h-8 rounded-full object-cover"
                        src={avatar_url}
                        alt="Author"
                        width={32}
                        height={32}
                    />
                </div>
                <h5 className="ml-2 text-sm font-bold">
                    {author} <br />{" "}
                    <span className="font-normal text-sm">{date}</span>
                </h5>
            </div>
        </div>
    );
};
