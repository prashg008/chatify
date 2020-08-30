import React from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';

const Messenger = () => {
  return (
    <div className='messenger'>
      <div className='scrollable sidebar'>
        <ConversationList />
      </div>
      <div className='scrollable content'>
        <MessageList />
      </div>
    </div>
  );
};

export default Messenger;
