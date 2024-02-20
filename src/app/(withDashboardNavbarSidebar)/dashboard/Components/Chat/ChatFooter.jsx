import { AuthContext } from "@/Providers/AuthProviders";
import React, { useContext, useEffect, useState } from "react";

const ChatFooter = ({ socket }) => {
  const {user} = useContext(AuthContext)
  const [message, setMessage] = useState("");
  const [userName,setUserName] = useState('')



  useEffect(()=>{
    if(user){
      setUserName(user?.email)
    }
  },[user])
  const handleTyping = () => {
    socket.emit("typing", `${userName} is typing..`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && userName) {
      socket.emit("message", {
        text: message,
        name: userName,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          //    {/*OnKeyDown function*/}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
