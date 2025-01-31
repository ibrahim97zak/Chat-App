import React, { lazy, Suspense } from 'react';
import useGetConversation from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emojis';

const Conversation = lazy(() => import('./Conversation'));

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Suspense fallback={<span className='loading loading-spinner mx-auto'></span>}>
        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))}
      </Suspense>
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
