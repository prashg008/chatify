import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ConversationListItem from '../ConversationListItem';
import { loadConversations } from '../../../actions/chatActions';

import './ConversationList.css';

const ConversationList = ({ conversations, loadConversations }) => {
  useEffect(() => {
    loadConversations();
  }, []);
  return (
    <div className='conversation-list'>
      {conversations.map((conversation) => (
        <ConversationListItem key={conversation.name} data={conversation} />
      ))}
    </div>
  );
};

const mapStateToProp = (state) => ({
  conversations: state.chat.conversationlist,
});

export default connect(mapStateToProp, { loadConversations })(ConversationList);
