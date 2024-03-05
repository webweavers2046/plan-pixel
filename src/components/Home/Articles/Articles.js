"use client";
import SectionTitle from "@/components/Common/sectionTitle/SectionTitle";
import Image from "next/image";
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
  // const {
  //     data: articles,
  //     isLoading,
  //     refetch,
  // } = useDynamicData("articles", "/api/articles");
  // console.log(articles);
  // const {data: articles} = useGetArticle();
  const [articles, setArticles] = useState([]);
  const xios = useAxios();
  useEffect(() => {
    xios.get("/api/articles").then((res) => {
      // console.log(res.data);
      setArticles(res.data);
    });
  }, []);
  const sortedArtiles = [...articles].reverse();

  return (
    <div className="container mx-auto py-4 xl:px-0 lg:px-6 px-2 mb-10 md:my-24">
      <SectionTitle title="Latest Articles" />

      {/* className="flex flex-wrap justify-center gap-6" */}
      <div className="flex flex-wrap justify-center gap-6 ">
        {sortedArtiles.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Articles;

// Articles card
const ArticleCard = ({ post }) => {
  const {
    _id,
    title,
    description,
    author,
    date,
    articleImage_url,
    avatar_url,
  } = post;

  return (
    <div className="lg:max-w-[364px] max-w-[345px] rounded-lg overflow-hidden shadow-md bg-white mb-6">
      <Image
        width={300}
        height={50}
        className="w-full h-48 object-cover"
        src={articleImage_url}
        alt="Illustration"
      />
      <div className="px-5 py-4">
        <h3 className="text-xl font-bold ">{title}</h3>
        <p className="text-sm ">
          {description?.length < 80 ? description : description.slice(0, 80)}
          <Link id={_id} href={`/article-details/${_id}`}>
            {" "}
            <span className="text-red-700 cursor-pointer">
              {" "}
              {description?.length > 80 ? "See More..." : ""}
            </span>
          </Link>
        </p>
      </div>
      <div className="px-6 flex items-center gap-3 pb-8">
        <div className="w-10 h-10 border rounded-full flex items-center justify-center">
          <Image
            className="w-8 h-8 rounded-full"
            src={avatar_url}
            alt="Author"
            width={32}
            height={32}
          />
        </div>
        <h5 className="ml-2 text-sm font-bold">
          {author} <br /> <span className="font-normal text-sm">{date}</span>
        </h5>
      </div>
    </div>
  );
};

// Dummy articles data
// const articlePosts = [
//   // Post 1
//   {
//     id: 1,
//     title: "The Future of Remote Work",
//     description:
//       "Explore effective strategies for prioritizing tasks to maximize productivity.",
//     author: "John Doe",
//     date: "2023-01-15",
//     articleImage_url: articleImg1,
//     avatar_url: avatarImg1,
//   },

//   // Post 2
//   {
//     id: 2,
//     title: "Tips for Healthy Living",
//     description:
//       "Discover simple habits that contribute to a healthier and happier lifestyle.",
//     author: "Jane Smith",
//     date: "2023-02-20",
//     articleImage_url: articleImg2,
//     avatar_url: avatarImg1,
//   },

//   // Post 3
//   {
//     id: 3,
//     title: "Programming Best Practices",
//     description:
//       "Learn about coding practices and techniques to write clean and efficient code.",
//     author: "Alex Johnson",
//     date: "2023-03-10",
//     articleImage_url: articleImg3,
//     avatar_url: avatarImg1,
//   },
// ];
