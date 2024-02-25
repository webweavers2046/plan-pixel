import AutoCompleteSearch from "./AutoComplete";

const TittleAndDescripton = ({handleSearchArchiveTasks}) => {
    return (
        <div className="flex flex-col justify-center relative items-start md:items-center pt-11 pb-6">
        <h1 className="text-[20px] sm:text-2xl md:text-3xl font-bold">All you archives tasks are here</h1>
        <p className="text-[#6E6D7A] text-left md:text-center text-[15px] md:text-16 my-2 relative">
          Are you looking for the files were archived? Don't worry we store all of your files with great details. 
        <AutoCompleteSearch handleSearchArchiveTasks={handleSearchArchiveTasks} />
        </p>
      </div>

    );
};
export default TittleAndDescripton;