const Search = () => {
  return (
    <div>
      <label
        htmlFor="member-name"
        className="text-sm mt-5 font-medium text-gray-500 block mb-2"
      >
        Filter your tasks
      </label>
      <input
        type="text"
        name="product-name"
        id="product-name"
        className="block w-full p-2.5 placeholder:text-[#808080a6] bg-gray-50 border border-gray-100 text-gray-900 sm:text-sm rounded-lg focus:border-none focus-within:outline-none focus:outline-none shadow-sm"
        placeholder="Name, Email, Skills, or Location"
        required
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};
export default Search;
