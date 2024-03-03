import { useRef, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import useAxios from "@/hooks/useAxios";

const SingleLabel = ({ label, card, index, taskRefetch}) => {

    const [openEdit, setOpenEdit] = useState(false)
    const inputRef = useRef(null);
    const axiosPublic = useAxios();
    const labels = card?.labels;
    const SingleLabel = labels?.find(lab => lab?.index === index);
    const isChecked = SingleLabel?.labelCheck;
    // console.log(card);
    // console.log(SingleLabel);
    // console.log(isChecked);

    const handleSave = () => {
        const labelValue = inputRef?.current?.value;
        // console.log(labelValue);

        const newLabel = {
            index : index,
            labelTitle : labelValue,
            bgColor : label?.bgColor,
            labelCheck : false
        }

        axiosPublic.put(`/create-label/${card?._id}`, newLabel)
            .then(res => {
                // console.log(res?.data);
                if (res?.data?.modifiedCount) {
                    taskRefetch();
                    // inputRef.current.value = '';
                    setOpenEdit(false);
                }
            })
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

    const handleCheckboxChange = (e) => {
        const checked = e?.target?.checked;
        console.log('value of checkbox :', e.target.checked);

        axiosPublic.put(`/check-label/${card?._id}`, {checked, index})
        .then(res => {
            console.log(res?.data);
            // if (res?.data?.modifiedCount) {
            //     taskRefetch();
            //     // inputRef.current.value = '';
            //     setOpenEdit(false);
            // }
        })
    }

    return (
        <div >
            {
                openEdit ?
                    <div>
                        <input type="text"
                            defaultValue={SingleLabel?.labelTitle}
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
                        <input type="checkbox"
                        defaultChecked={isChecked}
                         onChange={handleCheckboxChange}
                         className='rounded-sm' />
                        <p className={`w-full py-2 pl-2 h-8 text-gray-700 text-sm border-none rounded-md bg-[${label?.bgColor}]`}>{SingleLabel?.labelTitle}</p>
                        <button onClick={handleEditLabel}>
                            <MdOutlineModeEdit></MdOutlineModeEdit>
                        </button>
                    </div>
            }


        </div>
    );
};

export default SingleLabel;