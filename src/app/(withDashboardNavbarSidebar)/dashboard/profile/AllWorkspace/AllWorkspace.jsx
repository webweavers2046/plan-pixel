import { AuthContext } from "@/Providers/AuthProviders";
import DeleteConfirmModal from "@/components/Common/CommonModal/DeleteConfirmModal";
import { ablyContext } from "@/components/ably/AblyProvider";
import useAxios from "@/hooks/useAxios";
import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import CardMembers from "../../Components/CardDetailsModal/CardMembers";

const AllWorkspace = () => {

  const xios = useAxios();
  const { user } = useContext(AuthContext);

  const { userWokspaceList } = useGlobalContext();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null); // Add state to store selected workspace
  
  const {activeWorkspace} = useGlobalContext()
  const { title,description, members } = activeWorkspace || {title:"",description:"",members:[]}
  console.log(members);

  

  return (
    <div className="w-full px-10 mt-10">
    <h3 className="text-xl font-semibold mb-5">All workspace</h3>
    {userWokspaceList?.map((workspace) => {
      return (
        <div
          key={workspace._id}
          className="w-full my-2 h-16 bg-gray-100 rounded-md flex items-center justify-between px-5 py-2"
        >
          <h1 className="text-lg ">{workspace?.title}</h1>
          <div className="flex gap-x-4 items-center">
            {/* <Image width={10} height={10} alt="member pic"></Image> */}
            {/* <CardMembers members={members}></CardMembers> */}
            
            <BsThreeDotsVertical
              onClick={() => {
                setSelectedWorkspace(workspace); // Set the selected workspace
                setIsOpenDeleteModal(true);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      );
    })}

    {/* Delete workspace modal */}
    <div className={`${isOpenDeleteModal ? "block" : "hidden"}`}>
      {isOpenDeleteModal && (
        <div>
          <DeleteConfirmModal
            type={"workspace"}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
            isOpenDeleteModal={isOpenDeleteModal}
            filter={selectedWorkspace}
            data={"Workspace"}
          />
        </div>
      )}
    </div>
  </div>
);
};

export default AllWorkspace;
