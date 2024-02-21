import React, { useState, useEffect } from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);
// console.log(users);
  return (
    <div className="p-5 bg-green-200 rounded-xl rounded-r-none ">
      <h2 className="text-xl font-bold underline p-5 bg-green-400 text-white rounded">
        Workspace open Chat
      </h2>
      <div className="">
        <h4 className="bg-green-300 px-5 mt-5 rounded border-b">
          ACTIVE USERS
        </h4>
        <div className="p-5 bg-green-300 rounded">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
