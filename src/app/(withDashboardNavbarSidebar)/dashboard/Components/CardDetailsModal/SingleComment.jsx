import useAxios from "@/hooks/useAxios";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRef, useState } from "react";
import Swal from "sweetalert2";


const SingleComment = ({ comment, refetch }) => {
    const [openEditInput, setOpenEditInput] = useState(false);
    const { data: userData } = useUser(comment?.commenterEmail)
    const axiosPublic = useAxios();
    const inputRef = useRef(null);

    let date = new Date(comment?.commentTime);
    const hours = date?.getHours();
    const minutes = date?.getMinutes();
    // const seconds = date?.getSeconds();

    const handleDeleteComment = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic?.delete(`/delete-comment/${comment?._id}`)
                    .then(res => {
                        if (res?.data?.deletedCount) {
                            refetch();
                        }
                    })
            }
        });
    }

    const handleEditComment = () => {
        setOpenEditInput(true);
        setTimeout(() => {
            handleFocus()
        }, 0);
    }

    const handleFocus = () => {
        inputRef.current.focus();
    }

    const handleSaveChanges = () => {
        const updatedComment = inputRef?.current?.value;
        // console.log(updatedComment);

        const newComment = {
            commenterEmail: comment?.commenterEmail,
            comment: updatedComment,
            commentTime: comment?.commentTime,
            cardId: comment?.cardId
        }
        // console.log(newComment);

        axiosPublic.put(`/update-comment/${comment?._id}`, newComment)
            .then(res => {
                // console.log(res?.data);
                if (res?.data?.modifiedCount) {
                    refetch();
                    setOpenEditInput(false);
                }
            })
    }

    return (
        <div className="flex w-full gap-2">
            <Image
                width={30}
                height={30}
                className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                src={userData?.image}
                alt=""
            />
            <div className="w-full">
                <div className="flex items-end gap-3 mb-1">
                    <p className="font-bold">{userData?.name}</p>
                    <p className="text-sm text-gray-600 font-medium">{hours % 12}:{minutes} {hours > 12 ? "pm" : "am"}</p>
                </div>
                {
                    openEditInput ?
                        <div>
                            <input type="text" defaultValue={comment?.comment}
                                ref={inputRef}
                                id="inputBox"
                                className="bg-[#D9D9D980] text-gray-800 w-full py-4 pl-4 border-none rounded-lg" />
                            <div className="mt-2">
                                <button onClick={handleSaveChanges} className="ml-1 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#50B577] text-white rounded-md hover:bg-green-500 ">Save Changes</button>

                                <button onClick={() => setOpenEditInput(false)} className="ml-3 font-semibold text-xs w-fit h-fit px-4 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300  ">Cancel</button>
                            </div>
                        </div>
                        :
                        <p className="bg-[#D9D9D980] text-gray-800 w-full py-2 pl-4 border-none rounded-lg">{comment?.comment}</p>
                }

                {
                    openEditInput ||
                    <div className=" flex gap-3 mt-1 ml-2">
                        <p className="flex items-center gap-[6px]">
                            <div className="w-1 h-1 bg-gray-500 rounded-full -mb-[3px]"></div>
                            <button onClick={handleEditComment} onBlur={() => setOpenEditInput(false)} className="text-gray-600 text-sm underline">Edit</button>
                        </p>
                        <p className="flex items-center gap-[6px]">
                            <div className="w-1 h-1 bg-gray-500 rounded-full -mb-[3px]"></div>
                            <button onClick={handleDeleteComment} className="text-gray-600 text-sm underline">Delete</button>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default SingleComment;