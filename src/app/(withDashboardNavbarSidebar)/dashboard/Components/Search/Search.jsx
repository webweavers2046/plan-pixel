import useAxios from "@/hooks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "@/Providers/AuthProviders";
import Image from "next/image";
import SingleSearchBox from "./SingleSearchBox";

const Search = () => {
    const [queryResults, setQueryResults] = useState([]);
    const [openSuggestions, setOpenSuggestions] = useState(false)

    const axiosPublic = useAxios();
    const { user } = useContext(AuthContext);

    const handleInputChange = async (e) => {
        let query = e?.target?.value;

        if (query === "") {
            setOpenSuggestions(false);
        }
        if (query) {
            setOpenSuggestions(true);
        }

        const res = await axiosPublic.get(`/api/cards/search?query=${query}&userEmail=${user?.email}`);
        setQueryResults(res.data);
    };


    // console.log(queryResults);

    return (

        <div className="md:w-full z-40 relative">
            {/* search bar */}
            <input
                className="w-full rounded-lg text-sm lg:pl-16 pl-4 md:py-4 py-3 border-0 bg-dashboardPrimaryColor"
                placeholder="Find The task what you’re looking for..."
                type="text"
                required
                onChange={(e) => handleInputChange(e)}
            ></input>

            {/*Searched cards*/}

            {
                openSuggestions &&
                <div>
                    {
                        queryResults?.length > 0 ?
                            < div className="w-full max-h-96 overflow-auto mt-2 rounded-lg absolute bg-[#FFFFFFFF] border shadow-lg text-gray-700 min-h-60">
                                <h4 className="my-2 ml-4 font-semibold">Cards</h4>
                                <div className="flex flex-col gap-2">
                                    {
                                        queryResults?.map(card =>
                                            <SingleSearchBox
                                                key={card?._id}
                                                card={card}
                                                setOpenSuggestions={setOpenSuggestions}
                                            ></SingleSearchBox>
                                        )
                                    }
                                </div>
                            </div>
                            :
                            <div className="w-full max-h-96 overflow-auto mt-2 rounded-lg absolute bg-[#FFFFFFFF] border shadow-lg text-gray-700 min-h-48 flex flex-col justify-center items-center">
                                <Image
                                    className=" opacity-50 mx-auto w-32 h-32   "
                                    src={"https://i.ibb.co/mtGpTfj/icons8-search-250.png"}
                                    height={100}
                                    width={100}
                                />
                                <p className="font-semibold mt-3">We couldn't find anything matching your search</p>
                            </div>

                    }
                </div>


            }


        </div >
    );
};

export default Search;