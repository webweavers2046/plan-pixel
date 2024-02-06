const CommonModal = ({ openModal, setOpenModal, heading, children }) => {


    return (
        <div
            className={`${openModal ? "block" : "hidden"} 
        bg-[#02001A33] backdrop-blur-[9px] text-black w-screen h-screen top-0 left-0 z-30 fixed lg:px-40 px-24 lg:py-24 py-16`}
        >
            <div className=" bg-[#FFFFFF] w-full h-full rounded-2xl overflow-auto p-6">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold ">{heading}</p>
                    <button onClick={() => setOpenModal(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                        >
                            <path
                                d="M10.5578 10.7232L10.6354 10.636C10.998 10.2734 11.5699 10.2475 11.9625 10.5583L12.0497 10.636L16.9994 15.5858L21.9492 10.636C22.3118 10.2734 22.8836 10.2475 23.2762 10.5583L23.3634 10.636C23.726 10.9986 23.7519 11.5705 23.4411 11.9631L23.3634 12.0503L18.4136 17L23.3634 21.9497C23.726 22.3124 23.7519 22.8842 23.4411 23.2768L23.3634 23.364C23.0008 23.7266 22.4289 23.7525 22.0363 23.4417L21.9492 23.364L16.9994 18.4142L12.0497 23.364C11.687 23.7266 11.1152 23.7525 10.7227 23.4417L10.6354 23.364C10.2728 23.0014 10.2469 22.4295 10.5577 22.0369L10.6354 21.9497L15.5852 17L10.6354 12.0503C10.2728 11.6876 10.2469 11.1158 10.5578 10.7232Z"
                                fill="#212121"
                            />
                        </svg>
                    </button>
                </div>
                {/* write your content here */}
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CommonModal;