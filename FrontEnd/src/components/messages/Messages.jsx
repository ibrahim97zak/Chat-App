import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* Show loading spinner when messages are loading */}
      {loading && <span className="loading loading-spinner mx-auto block my-4"></span>}

      {/* Render messages when loading is done */}
      {!loading && messages.length > 0 && (
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))
      )}

      {/* Show message skeletons while loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Show prompt if no messages exist */}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
