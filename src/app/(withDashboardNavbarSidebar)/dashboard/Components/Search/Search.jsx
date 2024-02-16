import useAxios from "@/hooks/useAxios";
import { LuListTodo } from "react-icons/lu";
import { useState } from "react";

const Search = () => {
    const axiosPublic = useAxios();

    const [queryResults, setQueryResults] = useState([]);
    const [openSuggestions, setOpenSuggestions] = useState(false)

    const arr = [
        {
            cardName: "ABC",
            workspaceName: "Dablu",
            status: "doing",
        },
        {
            cardName: "ABC",
            workspaceName: "Dablu",
            status: "doing",
        },
        {
            cardName: "ABC",
            workspaceName: "Dablu",
            status: "doing",
        },
    ]

    const handleInputChange = async (e) => {
        const searchQuery = e?.target?.value;
        console.log(searchQuery);

        const res = await axiosPublic.get(`/api/members/search?query=${searchQuery}`);
        setQueryResults(res.data);

        if (searchQuery === "") {
            setOpenSuggestions(false);
            console.log(openSuggestions);
        }
        if (searchQuery) {
            setOpenSuggestions(true);
            console.log(openSuggestions);
        }
    };


    console.log(queryResults);

    return (

        <div className="w-full">
            {/* search bar */}
            <input
                className="w-full rounded-lg text-sm pl-16 py-4 border-0 bg-dashboardPrimaryColor"
                placeholder="Find The task what you’re looking for..."
                type="text"
                required
                onChange={(e) => handleInputChange(e)}
            ></input>

            {/**/}
            {
                openSuggestions &&

                <div className="w-[57.5%] mt-2 rounded-lg absolute bg-[#FFFFFFFF] border shadow-lg text-gray-700 min-h-60">
                    <h4 className="my-2 ml-4 font-semibold">Cards</h4>
                    <div className="flex flex-col gap-2">
                        {
                            arr?.map(box => <div
                                key={box}
                                className="flex items-center pl-4 gap-3 hover:bg-gray-200 py-1">
                                <LuListTodo className="text-3xl"></LuListTodo>
                                <div className="text-sm">
                                    <p className="font-semibold">Card Name</p>
                                    <div className="flex gap-[2px] text-xs font-medium">
                                        <p>Workspace Name</p>
                                        <p>: Status</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            }


        </div>
    );
};

export default Search;