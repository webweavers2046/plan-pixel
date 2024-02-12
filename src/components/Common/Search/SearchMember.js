const SearchMember = ({handleInputChange}) => {
  return (
    <div>
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
        placeholder="forhadhossain@gmail.com"
        required
        // value={}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};
export default SearchMember;
