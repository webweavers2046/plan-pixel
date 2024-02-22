"use client";
import { useContext, useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { AuthContext } from "@/Providers/AuthProviders";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import useTranstackData from "@/hooks/useTanstack/useTranstackData";
const socket = socketIO.connect("http://localhost:5000");

const ChatPopUp = ({ isOpenPopUp, setIsOpenPopUp }) => {
  const router = useRouter();
  const xios = useAxios();
  const { activeWorkspaceMembers, activeWorkspace } = useGlobalContext();
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  const [userName, setUserName] = useState("");
  const { data, refetch } = useTranstackData("/message", "message");
  if (!user) {
    router.push("/register");
  }

  useEffect(() => {
    if (data) {
      setMessages(data);
      refetch();
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
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="h-[70vh] bg-green-200 absolute  right-0 top-20 w-[500px] flex flex-col">
      <div className=" flex-1 overflow-y-scroll">
        {messages?.map((message) => (
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
              {/* Hi, how can I help you? */}
              {message?.name !== user?.email && message?.text}
            </div>
            <div className="flex items-center justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                {/* Sure, I can help with that. */}
                {message?.name === user?.email && message?.text}
              </div>
              <img
                className="w-8 h-8 rounded-full"
                src="https://picsum.photos/50/50"
                alt="User Avatar"
              />
            </div>
          </div>
        ))}
      </div>
      <ChatPopFooter/>
    </div>
  );
};

export default ChatPopUp;

const ChatPopFooter = () => {
  const xios = useAxios();
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const { activeWorkspace } = useGlobalContext();
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
    <div className="bg-green-100 px-4 py-2">
      <form onSubmit={handleSendMessage} className="flex items-center">
        <input
          className="w-full border rounded-full py-2 px-4 mr-2"
          type="text"
          placeholder="Write message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          //    {/*OnKeyDown function*/}
          onKeyDown={handleTyping}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};
