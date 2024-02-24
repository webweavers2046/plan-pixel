"use client";
import { useContext, useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";
import { AuthContext } from "@/Providers/AuthProviders";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import useTranstackData from "@/hooks/useTanstack/useTranstackData";
const socket = socketIO.connect("http://localhost:5000");
// import "./chat.css";

const ChatPopUp = ({ isOpenPopUp, setIsOpenPopUp }) => {
  const router = useRouter();
  const xios = useAxios();
  const { activeWorkspaceMembers, activeWorkspace } = useGlobalContext();
  const { user, loading } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  const [userName, setUserName] = useState("");
  const { data, refetch } = useTranstackData("/message", "message");
  const [users, setUsers] = useState([]);

  if (loading) {
    return <p>Loading....</p>;
  }

  useEffect(() => {
    if (user) {
      setUserName(user?.email);
      socket.emit("newUser", { userName: user?.email, socketID: socket.id });
    }
  }, [user]);

  useEffect(() => {
    const messageListener = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      // console.table(data);
      saveMessage(data)
    };

    socket.on("messageResponse", messageListener);

    return () => {
      socket.off("messageResponse", messageListener);
    };
  }, []);

  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      setUsers(data);
    });
  }, []);


  useEffect(() => {
    if (data) {
      // If data contains messages, set them as the component's messages state
      setMessages(data);
    }
  }, [data]);

async function saveMessage(data) {
  try {
    if (data) {
      const res = await xios.post(`/message`, data);
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div
      className={`h-[85vh] rounded-xl z-50 shadow-2xl bg-green-100 fixed top-20 ${
        isOpenPopUp ? " ml-5 right-1 " : "-right-full"
      }   w-[400px] flex flex-col`}
    >
      <div className=" flex-1 overflow-y-scroll">
        {messages?.map((message) => (
          <div className="px-4 py-2">
            {message?.name !== user?.email && (
              <>
                <p className="font-medium italic text-xs mb-1">
                  {message.name}
                </p>
                <div className="flex items-center mb-2">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://picsum.photos/50/50"
                    alt="User Avatar"
                  />
                  <div className="bg-red-200 rounded-lg p-2 shadow mb-2  px-4 py-2 max-w-[80%]">
                    {message?.name !== user?.email && message?.text}
                  </div>
                </div>
              </>
            )}

            {message?.name === user?.email && (
              <>
                <p className="font-medium italic text-xs mb-1  text-right">
                  You
                </p>
                <div className="flex items-center justify-end">
                  <div className="bg-[#50B577] text-white rounded-lg p-2 shadow mr-2  px-4 py-2 max-w-[80%]">
                    {message?.name === user?.email && message?.text}
                  </div>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://picsum.photos/50/50"
                    alt="User Avatar"
                  />
                </div>
              </>
            )}
          </div>
        ))}

        <div ref={lastMessageRef} />
      </div>
      <ChatPopFooter />
      <p>user count: {users?.length}</p>
      {users?.map((user) => (
        <p>{user.userName}</p>
      ))}
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
    <div className=" px-4 py-4">
      <form onSubmit={handleSendMessage} className="flex items-center">
        <input
          className="w-full border rounded-full py-2 px-4 mr-2"
          type="text"
          placeholder="Write message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          // {/*OnKeyDown function*/}
          // onKeyDown={handleTyping}
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-[#93C648] to-[#50B577] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};


