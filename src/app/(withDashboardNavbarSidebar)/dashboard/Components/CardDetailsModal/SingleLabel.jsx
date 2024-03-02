import { useRef, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const SingleLabel = ({ label}) => {
    const [openEdit, setOpenEdit] = useState(false)
    const inputRef = useRef(null);

    const handleSave = () => {
        const labelValue = inputRef?.current?.value;
        // console.log(commentValue);

        // const newComment = {
        //     commenterEmail: user?.email,
        //     comment: commentValue,
        //     commentTime: date,
        //     cardId: cardId
        // }

        // axiosPublic.post("/create-comment", newComment)
        //     .then(res => {
        //         // console.log(res?.data);
        //         if (res?.data?.insertedId) {
        //             refetch();
        //             inputRef.current.value = '';
        //             setOpenSave(false);
        //         }
        //     })
    }

    const handleEditLabel = () => {
        setOpenEdit(true);
        setTimeout(() => {
            handleFocus()
        }, 0);
    }

    const handleFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div >
            {
                openEdit ?
                    <div>
                        <input type="text"
                            ref={inputRef}
                            id="inputBox"
                            className={`w-full h-8 text-sm border-none rounded-md bg-[${label?.bgColor}]`} />
                        <div className="mt-2">
                            <button onClick={handleSave} className="ml-1 font-semibold text-xs w-fit h-fit px-3 py-1 bg-[#50B577] text-white rounded-md hover:bg-green-500 ">
                                <FaCheck></FaCheck>
                            </button>

                            <button onClick={() => setOpenEdit(false)} className="ml-3 font-semibold text-xs w-fit h-fit px-3 py-1 bg-[#ECECEC] rounded-md hover:bg-gray-300  ">Cancel</button>
                        </div>
                    </div>
                    :
                    <div className="flex w-full items-center gap-2">
                        <input type="checkbox" className='rounded-sm' />
                        <p className={`w-full py-2 pl-2 h-8 text-sm border-none rounded-md bg-[${label?.bgColor}]`}>Label</p>
                        <button onClick={handleEditLabel}>
                            <MdOutlineModeEdit></MdOutlineModeEdit>
                        </button>
                    </div>
            }


        </div>
    );
};

export default SingleLabel;