"use client";
import { useContext, useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import "./chat.css";
import { AuthContext } from "@/Providers/AuthProviders";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import useTranstackData from "@/hooks/useTanstack/useTranstackData";
const socket = socketIO.connect("http://localhost:5000");
const Chat = () => {
  const router = useRouter();
  const xios = useAxios();
  const { activeWorkspaceMembers, activeWorkspace } = useGlobalContext();
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  const [userName, setUserName] = useState("");
  const {data,refetch} = useTranstackData('/message','message')
  if (!user) {
    router.push("/register");
  }

  useEffect(() => {
    if (data) {
      setMessages(data)
      refetch()
    }
  }, [data]);

  useEffect(() => {
    if (user) {
      setUserName(user?.email);
    }
  }, [user]);
  useEffect(() => {
    socket.emit("newUser", { userName, socketID: socket.id });
  }, [userName]);

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function saveMessage(data) {
    try {
      if (data && activeWorkspace._id) {
        const newMessage = {
          text: data.text,
          name: data.name,
          activeWorkspaceId: activeWorkspace._id,
        };
        const res = await xios.post(`/message`, newMessage);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
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
