import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = (page, limit = 5) => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const result = await fetch(`/api/users?page=${page}&limit=${limit}`);
                const data = await result.json();
                if (data.error) throw new Error(data.error);

                setConversations(data); // Only show the latest fetched conversations
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, [page]); // Fetch new users when the page changes

    return { loading, conversations };
};

export default useGetConversation;
