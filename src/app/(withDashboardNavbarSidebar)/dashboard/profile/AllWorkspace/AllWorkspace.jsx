import { AuthContext } from "@/Providers/AuthProviders";
import DeleteConfirmModal from "@/components/Common/CommonModal/DeleteConfirmModal";
import { ablyContext } from "@/components/ably/AblyProvider";
import useAxios from "@/hooks/useAxios";
import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";

const AllWorkspace = () => {
  const { workspaces,handleDeleteWorkspace } = useGlobalContext();
  const { allWorkspaces } = useContext(ablyContext);
  const displayWorkspaces =
    allWorkspaces?.length > 0 ? allWorkspaces : workspaces;

  const [isDeleteConfirm, setDeleteConfirm] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const xios = useAxios();
  const { user } = useContext(AuthContext);

  

  return (
    <div className="w-full px-10 mt-10">
      <h3 className="text-xl font-semibold mb-5">All workspace</h3>
      {displayWorkspaces?.map((workspace) => {
        return (
          <div
            key={workspace._id}
            className="w-full my-2 h-16 bg-gray-100 rounded-md flex items-center justify-between px-5 py-2"
          >
            <h1 className="text-lg ">{workspace?.title}</h1>
            <div className="flex gap-x-4">
              <Image width={10} height={10} alt="member pic"></Image>
              <BsThreeDotsVertical
                onClick={() => setIsOpenDeleteModal(true)}
                className="cursor-pointer"
              />

              {/* Delete workspace modal */}
              <div className={`${isOpenDeleteModal ? "block" : "hidden"}`}>
                {isOpenDeleteModal && (
                  <div>
                    <DeleteConfirmModal
                      handleDeleteWorkspace={handleDeleteWorkspace}
                      setIsOpenDeleteModal={setIsOpenDeleteModal}
                      isOpenDeleteModal={isOpenDeleteModal}
                      workspace={workspace}
                      setDeleteConfirm={setDeleteConfirm}
                      data={"Workspace"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllWorkspace;
