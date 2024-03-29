"use client";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";
// import articleImg1 from "@/assets/articles/article1.png";
// import articleImg2 from "@/assets/articles/article2.png";
// import articleImg3 from "@/assets/articles/article3.png";
// import avatarImg1 from "@/assets/articles/avatar1.png";
// import useDynamicData from "@/app/(appAdminDashboard)/admin-dashboard/Components/Hooks/useDynamicData";
// import useGetArticle from "@/hooks/useGetArticle";
import { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import Link from "next/link";

const Articles = () => {
    const [seeMore, setSeeMore] = useState(4);
    const [articles, setArticles] = useState([]);
    const articleAxios = useAxios();
    useEffect(() => {
        articleAxios.get("/api/articles").then((res) => {
            // console.log(res.data);
            setArticles(res.data);
        });
    }, []);
    const sortedArticles = [...articles].reverse();

    return (
        <div className="container mx-auto mb-10  py-4 md:my-24 lg:px-24 md:px-7 px-4">
            <SectionTitle title="Latest Articles" />

            {/* className="flex flex-wrap justify-center gap-6" */}
            <div className="grid grid-cols-4 justify-between gap-6 ">
                {sortedArticles.slice(0, seeMore).map((post, idx) => (
                    <ArticleCard key={post?.id} post={post} idx={idx} />
                ))}
            </div>
            <div
                className={`text-center mt-4 ${sortedArticles.length == seeMore ? "hidden" : ""}`}
            >
                <button
                    onClick={() => setSeeMore(sortedArticles.length)}
                    className="border px-8 py-2.5 rounded-full"
                >
                    See More
                </button>
            </div>
        </div>
    );
};
export default Articles;

// Articles card
const ArticleCard = ({ post, idx }) => {
    const {
        _id,
        title,
        description,
        author,
        date,
        articleImage_url,
        avatar_url,
    } = post;

    const speed = idx * 0.4;
    return (
        <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 + speed }}
            className="mb-6 overflow-hidden rounded-lg bg-white shadow-md flex flex-col"
        >
            <Image
                width={300}
                height={50}
                className="h-48 w-full object-cover"
                src={articleImage_url}
                alt="Illustration"
            />
            <div className="px-5 py-4">
                <h3 className="text-xl font-bold ">{title}</h3>
                <p className="text-sm ">
                    {description?.length < 80
                        ? description
                        : description.slice(0, 80)}
                    <Link id={_id} href={`/article-details/${_id}`}>
                        {" "}
                        <span className="cursor-pointer text-red-700 font-semibold">
                            {" "}
                            {description?.length > 80 ? "See more..." : ""}
                        </span>
                    </Link>
                </p>
            </div>
            <div className="flex items-end gap-3 px-6 pb-8 grow">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                    <Image
                        className="h-8 w-8 rounded-full"
                        src={avatar_url}
                        alt="Author"
                        width={32}
                        height={32}
                    />
                </div>
                <h5 className="ml-2 text-sm font-bold">
                    {author} <br />{" "}
                    <span className="text-sm font-normal">{date}</span>
                </h5>
            </div>
        </motion.div>
    );
};

