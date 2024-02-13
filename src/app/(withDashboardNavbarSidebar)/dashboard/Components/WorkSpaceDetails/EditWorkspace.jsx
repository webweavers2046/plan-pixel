import { ablyContext } from "@/components/ably/AblyProvider";
import useAxios from "@/hooks/useAxios";
import useGlobalContext from "@/hooks/useGlobalContext";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const EditWorkspace = ({setEdit,isEdit}) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [creator, setCreator] = useState("");
  const [description, setDescription] = useState("");
  const xios = useAxios()
  const { defaultActiveWorkspace } = useGlobalContext();
  const { activeWorkspace} = useContext(ablyContext);
  const activeWorkspaceId = activeWorkspace?.propertyToCheck || defaultActiveWorkspace


  const handleSave = async() => {
   
    if(workspaceName === "") return toast.error("Please fill the name filed")
    if(creator === "") return toast.error("Please fill the creator filed")
    if(description === "") return toast.error("Please fill the description filed")
    
    setEdit(false)

    const updatedWorkspace = {
        title:workspaceName,
        description,
        creator
    }

    const response = await xios.put(`/updateWorkspace/${activeWorkspaceId}`,updatedWorkspace)
    if(response.data.modifiedCount > 0) {
        return toast.success(`${activeWorspace.title} is updated`)
    }



    setWorkspaceName("");
    setCreator("");
    setDescription("");
  };

  return (
    <div className={`${isEdit?"block":"hidden"}`}>
      <div className="bg-white fixed inset-0 left-1/3  w-[460px]  rounded-lg shadow-lg m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit Workspace</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
            onClick={()=> setEdit(false)}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Workspace Name
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:border-none focus-within:outline-none focus:outline-none block w-full p-2.5"
                  placeholder="Technology revolution”"
                  required
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Creator
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:border-none focus-within:outline-none focus:outline-none block w-full p-2.5"
                  placeholder="Apple Imac 27”"
                  required
                  value={creator}
                  onChange={(e) => setCreator(e.target.value)}
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Description
                </label>
                <textarea
                  id="product-details"
                  rows="6"
                  className="bg-gray-50 border border-gray-200  focus:border-none focus-within:outline-none focus:outline-none text-gray-900 sm:text-sm rounded-lg  block w-full p-4"
                  placeholder="Project managemet steps"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className=" w-full bg-gradient-to-br from-[#93C648] to-[#50B577] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            onClick={handleSave}
          >
            Save all
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWorkspace;
