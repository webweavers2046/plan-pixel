const MiniModal = ({setIsCreateWorkSpace,handleCreateWorkspace}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get input values
    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value; // Updated from 'twitter'

    handleCreateWorkspace(name,description)

    setIsCreateWorkSpace(false)
    e.target.reset()
  };

  return (
    <div className="relative">
      <>
        {/* https://codepen.io/simonwpt-the-typescripter/embed/RwGrRXq */}
        <div className="flex items-center relative">
          <div className="bg-white h-[250px] rounded-lg p-10 z-40 fixed inset-0 w-[400px]  top-3 left-0 mx-auto shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex w-full items-center mb-5">
                <input
                  name="title"
                  id="name"
                  type="text"
                  placeholder="Workspace title"
                  className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                />
              </div>
              <div className="flex items-center mb-10">
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="workspace description"
                  className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 justify-between">
                <button 
                onClick={() => setIsCreateWorkSpace(false)}
                className="py-3 px-8 bg-red-400 text-green-100 font-bold rounded">
                  close
                </button>
                <button className="py-3 px-8 bg-primary text-green-100 font-bold rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};
export default MiniModal;
