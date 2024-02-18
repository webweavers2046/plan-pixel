import { AuthContext } from "@/Providers/AuthProviders";
import { globalContext } from "@/Providers/globalContext";
import useSingleWorkspace from "@/hooks/useSingleWorkspace";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { LuListTodo } from "react-icons/lu";

const SingleSearchBox = ({ card, setOpenSuggestions , query}) => {
    const {openCardDetails,setOpenCardDetails, cardId, setCardId} = useContext(AuthContext);
    const { handleActiveWorkspace } = useContext(globalContext);
    const pathname = usePathname();
    const router = useRouter();
    const {data : workspace} = useSingleWorkspace(card?.workspace);
    // console.log(workspace);
    // console.log(card);

    const handleOnClick = (e) =>{
        setCardId(card?._id)
        setOpenCardDetails(true);
        setOpenSuggestions(false);
        if(pathname !== "/dashboard/tasks"){
            router.push("/dashboard/tasks");
        }
        handleActiveWorkspace(e, card?.workspace)
    }

    return (
        <div onClick={handleOnClick}
        className="flex items-center pl-4 gap-3 hover:bg-gray-200 py-1">
            <LuListTodo className="text-3xl"></LuListTodo>
            <div className="text-sm">
                <p className="font-semibold">{card?.title}</p>
                <div className="flex gap-[2px] text-xs font-medium">
                    <p>{workspace?.title}</p>
                    <p>: {card?.status}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleSearchBox;