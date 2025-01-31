import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SoketContext = createContext();

export const useSocketContext = () => {
  return useContext(SoketContext); //created hook to use this  context in other components
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-app-hyl9.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]); //when change  happen in authUser run this effect
  return (
    <SoketContext.Provider value={{ socket, onlineUsers }}>
      {children}{" "}
    </SoketContext.Provider>
  );
};
