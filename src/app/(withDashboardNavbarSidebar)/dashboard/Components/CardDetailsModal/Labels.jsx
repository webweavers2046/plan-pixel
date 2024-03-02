import SingleLabel from './SingleLabel';
import { RxCross2 } from "react-icons/rx";

const Labels = ({ setOpenLabels }) => {

    const labelColors = [
        {
            bgColor: "#50B57733",
        },
        {
            bgColor: "#FBBC0540",
        },
        {
            bgColor: "#93C64840",
        },
        {
            bgColor: "#50B57780",
        },
    ]



    return (
        <div className='mt-5 w-full'>
            <div className='flex justify-between items-center mb-3'>
                <h3>Labels</h3>
                <button onClick={() => setOpenLabels(false)} className="ml-3 font-bold text-xs w-fit h-fit p-2 rounded-md bg-[#ECECEC] hover:bg-gray-300  ">
                    <RxCross2 className='text-xl'></RxCross2>
                </button>
            </div>
            <div className='flex flex-col gap-2 h-full mt-2'>
                {
                    labelColors?.map(label =>
                        <SingleLabel key={label} label={label}></SingleLabel>
                    )
                }
            </div>
        </div>
    );
};

export default Labels;