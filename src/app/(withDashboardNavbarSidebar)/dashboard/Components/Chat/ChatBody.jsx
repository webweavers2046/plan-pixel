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

      <div className="h-screen flex flex-col">
        <div className="bg-gray-200 flex-1 overflow-y-scroll">
          <div className="px-4 py-2">
            <div className="flex items-center mb-2">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://picsum.photos/50/50"
                alt="User Avatar"
              />
              <div className="font-medium">John Doe</div>
            </div>
            <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
              Hi, how can I help you?
            </div>
            <div className="flex items-center justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                Sure, I can help with that.
              </div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://picsum.photos/50/50"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-2">
          <div className="flex items-center">
            <input
              className="w-full border rounded-full py-2 px-4 mr-2"
              type="text"
              placeholder="Type your message..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>

      <div>
        <div ref={lastMessageRef} />
      </div>

      {/* <div className="flex flex-col max-w-sm">
        <div className="flex-grow overflow-y-auto">
          <div className="flex flex-col mb-4 gap-4 py-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                <p className="text-gray-900 text-sm">Hey, how are you?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 rounded-lg px-4 py-2 max-w-[80%]">
                <p className="text-white text-sm">
                  I'm good, thanks! How about you?
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%]">
                <p className="text-gray-900 text-sm">
                  I'm doing great, thanks for asking!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-16">

          <input
            type="text"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-lg mr-4"
            placeholder="Type a message..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </div>
      </div> */}
    </>
  );
};

export default ChatBody;
