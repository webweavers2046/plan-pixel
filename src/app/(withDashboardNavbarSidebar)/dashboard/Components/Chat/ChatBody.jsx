import { AuthContext } from "@/Providers/AuthProviders";
import useTranstackData from "@/hooks/useTanstack/useTranstackData";
import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const ChatBody = ({messages, typingStatus, lastMessageRef }) => {
//   const navigate = useNavigate();
const {user} = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (user) {
      setUserName(user?.email);
    }
  }, [user]);

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
      </header>

      <div className="message__container">
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
      <div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
