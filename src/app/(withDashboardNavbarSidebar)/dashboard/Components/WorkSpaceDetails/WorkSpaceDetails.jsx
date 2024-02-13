import { ablyContext } from "@/components/ably/AblyProvider";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useContext, useState } from "react";
import EditWorkspace from "./EditWorkspace";


const WorkSpaceDetails = () => {
    const {defaultActiveWorkspace} = useGlobalContext()
    
  const {activeWorkspace} = useContext(ablyContext)
  const Wspace = activeWorkspace?.propertyToCheck || defaultActiveWorkspace

  const [isEdit,setEdit] = useState(false)

    return (
        <div className="w-full h-fit border-2 border-[#E6E8EC] rounded-lg p-5">
            <div className="min-h-[200px]">
                <div className="flex justify-between items-start">
                    <h4 className=" text-sm text-gray-600  leading-7 text-[17px]"><span className="text-white font-normal flex items-center h-6 px-2 w-16 bg-[#50b577c1]  rounded-md ">Admin:</span> {Wspace?.creator} -</h4>
                    <button onClick={()=> setEdit(true)} className="text-[#00A13E]">Edit</button>
                </div>
                <h3 className="text-[20px] mt-2 font-bold">{Wspace?.title}</h3>
                <p className="text-gray-600">{Wspace?.description}</p>
            </div>
            <EditWorkspace isEdit={isEdit} setEdit={setEdit}/>
        </div>
    );
};

export default WorkSpaceDetails;