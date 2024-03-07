"use client";
import useAxios from "@/hooks/useAxios";
import useGetArticle from "@/hooks/useGetArticle";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const page = ({ params }) => {
    // const router = useRouter();
    // const id = router.query.articleId;
    // console.log(params.articleId);
    // const {data: article} = useGetArticle();
    const [articles, setArticles] = useState([]);
    const xios = useAxios();
    useEffect(() => {
        xios.get("/api/articles").then((res) => {
            // console.log(res.data);
            setArticles(res.data);
        });
    }, []);
    // console.log(id);
    // console.log(articles, "article");

    const singleArticle = articles.find(
        (article) => article._id === params.articleId
    );
    // console.log(singleArticle);
    return (
        <div className="max-w-4xl lg:px-0 px-6 mx-auto mt-5">
            <div className="flex items-center gap-x-4 pl-4 mb-5">
                <Image
                    className="w-8 h-8 rounded-full"
                    src={singleArticle?.avatar_url}
                    alt="Author"
                    width={50}
                    height={50}
                />
                <div>
                    <h1 className="font-semibold">{singleArticle?.author}</h1>
                    <p className="text-[#6B6B6B]">{singleArticle?.date}</p>
                </div>
            </div>
            <h1 className="text-4xl font-semibold mt-4 mb-6">
                {singleArticle?.title}
            </h1>
            <Image
                width={500}
                height={500}
                alt="article image"
                src={singleArticle?.articleImage_url}
                style={{ width: "100%" }}
            ></Image>
            <p className="mt-5 mb-20">{singleArticle?.description}</p>
        </div>
    );
};

export default page;
