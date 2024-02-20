'use client'
import { useContext, useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import './chat.css'
import { AuthContext } from "@/Providers/AuthProviders";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";
const socket = socketIO.connect("http://localhost:5000");
const Chat = () => {
  const router = useRouter()
  const { activeWorkspaceMembers } = useGlobalContext();
const {user} = useContext(AuthContext)
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  const [userName, setUserName] = useState(user?.displayName);
  console.log(activeWorkspaceMembers);
// if(!user) {
//     router.push('/register')
// }
  useEffect(() => {
    socket.emit("newUser", { userName, socketID: socket.id });
  }, [userName]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default Chat;
