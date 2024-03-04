import { useContext, useRef, useState } from "react";
import SingleComment from "./SingleComment";
import { AuthContext } from "@/Providers/AuthProviders";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import useAxios from "@/hooks/useAxios";
import useComments from "@/hooks/useComments";


const Comments = ({ cardId }) => {
    const { user } = useContext(AuthContext);
    const { data: userData } = useUser(user?.email)
    const [openSave, setOpenSave] = useState(false);
    const axiosPublic = useAxios();
    const { data: comments, refetch } = useComments(cardId);
    // console.log(comments);

    const inputRef = useRef(null);


    const handleInputChange = async (e) => {
        let inputChange = e?.target?.value;
        // console.log(inputChange);

        if (inputChange === "") {
            setOpenSave(false);
        }
        if (inputChange) {
            setOpenSave(true);
        }
    };

    const handleSave = () => {
        let date = new Date();
        const commentValue = inputRef?.current?.value;
        // console.log(commentValue);

        const newComment = {
            commenterEmail: user?.email,
            comment: commentValue,
            commentTime: date,
            cardId: cardId
        }

        axiosPublic.post("/create-comment", newComment)
            .then(res => {
                // console.log(res?.data);
                if (res?.data?.insertedId) {
                    refetch();
                    inputRef.current.value = '';
                    setOpenSave(false);
                }
            })
    }

    return (
        <>
            <div className="flex gap-3 pt-8 pb-6">
                <Image
                    width={30}
                    height={30}
                    className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src={userData?.image}
                    alt=""
                />
                {/* comment area */}
                <div className="w-full">
                    <textarea onChange={(e) => handleInputChange(e)}
                        ref={inputRef}
                        placeholder="Write down your comment here"
                        cols="30" rows="10"
                        className="bg-[#D9D9D980] w-full h-16 p-3 border-none rounded-lg"></textarea>
                    {
                        openSave &&
                        <button onClick={handleSave} className="ml-1 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#50B577] text-white rounded-md hover:bg-green-500 ">Save</button>
                    }
                </div>
            </div>

            {
                comments?.length > 0 &&
                <div className="w-full pb-8">
                    <h3 className="font-semibold">Comments</h3>
                    {/* all comments */}
                    <div className="space-y-4 mt-5">
                        {
                            comments?.map(comment =>
                                <SingleComment
                                    key={comment?._id}
                                    comment={comment}
                                    refetch={refetch}
                                ></SingleComment>
                            )
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Comments;