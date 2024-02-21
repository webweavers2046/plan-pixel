import { AuthContext } from "@/Providers/AuthProviders";
import useAxios from "@/hooks/useAxios";
import useGlobalContext from "@/hooks/useGlobalContext";
import React, { useContext, useEffect, useState } from "react";

const ChatFooter = ({ socket }) => {
  const xios = useAxios();
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const {  activeWorkspace } = useGlobalContext();
  useEffect(() => {
    if (user) {
      setUserName(user?.email);
    }
  }, [user]);
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
      saveMessage({
        text: message,
        name: userName,
        activeWorkspaceId: activeWorkspace._id,
      });
    }
    setMessage("");
  };

  async function saveMessage(data) {
    try {
      if (data && activeWorkspace._id) {
        const res = await xios.post(`/message`, data);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
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
