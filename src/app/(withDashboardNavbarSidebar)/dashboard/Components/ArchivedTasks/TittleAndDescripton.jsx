import AutoCompleteSearch from "./AutoComplete";

const TittleAndDescripton = () => {
    return (
        <div className="flex flex-col justify-center relative items-center pt-11 pb-6">
        <h1 className="text-3xl font-bold">All you archives tasks are here</h1>
        <p className="text-[#6E6D7A] my-2">
          Are you looking for the files were archived? Don't worry we store all of your files with great details. 
        </p>
        <AutoCompleteSearch />
      </div>

    );
};
export default TittleAndDescripton;