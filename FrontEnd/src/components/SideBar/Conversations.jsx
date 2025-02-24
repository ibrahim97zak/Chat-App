import { lazy, Suspense, useEffect, useState } from "react";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons

const Conversation = lazy(() => import("./Conversation"));

const Conversations = () => {
    const [page, setPage] = useState(1);
    const { loading, conversations } = useGetConversation(page, 5); // Fetch only 5 per page

    return (
        <div className="py-2 flex flex-col overflow-auto relative">
            <Suspense fallback={<span className="loading loading-spinner mx-auto"></span>}>
                {conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIdx={idx === conversations.length - 1}
                    />
                ))}
            </Suspense>

            {loading && <span className="loading loading-spinner mx-auto"></span>}

            {/* Pagination Controls (Arrow Icons) */}
            <div className="flex justify-between items-center mt-4">
                {/* Left Arrow (Previous Page) */}
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className={`p-2 text-2xl ${
                        page === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-500 hover:text-blue-700"
                    }`}
                >
                    <FaArrowLeft />
                </button>

                {/* Right Arrow (Next Page) */}
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={conversations.length < 5} // Disable if less than 5 conversations are loaded
                    className={`p-2 text-2xl ${
                        conversations.length < 5 ? "text-gray-400 cursor-not-allowed" : "text-blue-500 hover:text-blue-700"
                    }`}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Conversations;
