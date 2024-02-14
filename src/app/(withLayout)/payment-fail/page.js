import { MdSmsFailed } from "react-icons/md";

const page = () => {
    return (
      <>
        {/* component */}
        <div className="bg-gray-100">
          <div className="bg-white p-6 text-center md:mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-16 h-16 mx-auto text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-red-900 font-semibold text-center">
                Payment Fail!
              </h3>
              <p className="text-gray-600 my-2">
                Uh oh! It looks like your recent payment didn’t
                work. Don’t panic! Please try again.failed 
              </p>
              <p> Have a great day!</p>
              <div className="py-10 text-center">
                <a
                  href="#"
                  className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3"
                >
                  GO BACK
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default page;