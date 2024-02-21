import { AuthContext } from "@/Providers/AuthProviders";
import useTranstackData from "@/hooks/useTanstack/useTranstackData";
import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import avatar from "../../../../../assets/icons/person.png";
import { BiMessage } from "react-icons/bi";

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  //   const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (user) {
      setUserName(user?.email);
    }
  }, [user]);

  return (
    <>
      <header className="bg-green-200 p-8 text-right rounded-r-xl">
        <p className="text-md font-medium">Hangout with Colleagues</p>
      </header>

      <div className="h-[500px] overflow-scroll">
        {messages?.map((message) =>
          message.name === userName ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>

            // <div className="flex items-start gap-2.5 mb-4" key={message.id}>
            //   <BiMessage className="w-10 h-10" />
            //   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            //     <div className="flex items-center space-x-2 rtl:space-x-reverse">
            //       <span className="text-sm font-semibold text-gray-900 dark:text-white">
            //         {/* {message.name} */}
            //       </span>
            //       <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            //         11:46
            //       </span>
            //     </div>
            //     <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            //       {message.text}
            //     </p>
            //     <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            //       Delivered
            //     </span>
            //   </div>
            //   <button
            //     id="dropdownMenuIconButton"
            //     data-dropdown-toggle="dropdownDots"
            //     data-dropdown-placement="bottom-start"
            //     className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
            //     type="button"
            //   >
            //     <svg
            //       className="w-4 h-4 text-gray-500 dark:text-gray-400"
            //       aria-hidden="true"
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="currentColor"
            //       viewBox="0 0 4 15"
            //     >
            //       <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            //     </svg>
            //   </button>
            //   <div
            //     id="dropdownDots"
            //     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
            //   >
            //     <ul
            //       className="py-2 text-sm text-gray-700 dark:text-gray-200"
            //       aria-labelledby="dropdownMenuIconButton"
            //     >
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Reply
            //         </a>
            //       </li>
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Forward
            //         </a>
            //       </li>
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Copy
            //         </a>
            //       </li>
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Report
            //         </a>
            //       </li>
            //       <li>
            //         <a
            //           href="#"
            //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            //         >
            //           Delete
            //         </a>
            //       </li>
            //     </ul>
            //   </div>
            // </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
      </div>
      <div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
