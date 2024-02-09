import useGlobalContext from "@/hooks/useGlobalContext";


const WorkSpaceDetails = () => {
    const {activeWrokspace} = useGlobalContext()
    const {_id,title,description,creator,members,tasks,isActive} = activeWrokspace
    
    return (
        <div className="w-full h-fit border-2 border-[#E6E8EC] rounded-lg p-5">
            <div className="min-h-[200px]">
                <div className="flex justify-between items-start">
                    <h4 className="text-sm text-gray-600  leading-7 text-[17px]"><span className="text-white bg-[#50b577c1] py-1 px-3 rounded-lg font-bold">Admin:</span> {creator} -</h4>
                    <button className="text-[#00A13E]">Edit</button>
                </div>
                <h3 className="text-[20px] mt-2 font-bold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default WorkSpaceDetails;