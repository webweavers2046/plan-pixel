import CheckBox from "./CheckBox";

const FilterModal = () => {
    return (
        <div className="h-[70vh] top-[80px] p-2 -right-4 z-50 rounded-lg absolute w-[400px] bg-[#FFFFFF] shadow-lg border-t-2 border-gray-50">
            <div className="flex justify-between px-2 items-center">
                <h1 className="text-2xl font-bold ">Filter</h1>
                <span>Clear all</span>
            </div>

            
            <div className="flex gap-2">

    <p>All</p>
    <p>Tags</p>
    <p>calendar</p>
</div>
      <label
        htmlFor="member-name"
        className="text-sm font-medium text-gray-900 block mb-2"
      >
        Search members
      </label>
      <input
        type="text"
        name="product-name"
        id="product-name"
        className="shadow-sm placeholder:text-[#808080a6] bg-gray-50 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:border-none focus-within:outline-none focus:outline-none block w-full p-2.5"
        placeholder="Name,Email,Skills or Location"
        required
        onChange={(e) => handleInputChange(e.target.value)}
      />



        <CheckBox/>
        </div>
    );
};
export default FilterModal;