
"use client"
import { io } from "socket.io-client";
import { useEffect } from "react";

// export const socket = io("http://localhost:5000/"); 
export const socket = io("https://plan-pixel-backend-jet.vercel.app/"); 

const SocketComponent = ({ children }) => {
  useEffect(() => {
    // Connect to the socket
    socket.connect();
    // Listen for the "connect" event, indicating that the connection is established
    socket.on("connect", () => {
      console.log("Socket connected!");

      // Example: Emitting data to the server after the connection is established
      socket.emit("client-event", { message: "Hello from client!" });
    });

    // Example: Listening to a server event
    socket.on("server-event", (data) => {
      console.log("Received data from server:", data);
    });

    return () => {
        // Cleanup if needed
        socket.disconnect();
      };
    }, []);


  return <>{children}</>;
};

export default SocketComponent;
