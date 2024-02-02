/*


"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";

// export const socket = io("http://localhost:5000/",);
export const socket = io("https://plan-pixel-backend-jet.vercel.app/", {
// export const socket = io("http://localhost:5000/", {
  withCredentials: true,
  path:"/socket",
  transports: ["websocket", "polling"], 
});

const SocketComponent = ({ children }) => {
  useEffect(() => {
    // Connect to the socket
    socket.connect();
    // Listen for the "connect" event, indicating that the connection is established
    socket.on("connect", () => {
      console.log("Socket connected!");
    });

    return () => {
      // Cleanup if needed
      socket.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default SocketComponent;



*/