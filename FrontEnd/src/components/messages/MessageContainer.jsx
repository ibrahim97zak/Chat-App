import { lazy, Suspense, useEffect } from "react";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Messages = lazy(() => import("./Messages"));
const MessageInput = lazy(() => import("./MessageInput"));

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const navigate = useNavigate();

  const handelClikeNav = () => {
    console.log("Clicked navigation button");
    navigate("/");
    setSelectedConversation(null);
  };

  useEffect(() => {}, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] small-screen flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 flex items-center justify-between px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold ">
              {selectedConversation.fullName}
            </span>
            <button
              onClick={handelClikeNav}
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Suspense fallback={<div>Loading Messages...</div>}>
            <Messages />
            <MessageInput />
          </Suspense>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋{authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
