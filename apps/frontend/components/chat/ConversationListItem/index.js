import React from 'react';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  const { photo, name } = props.data;

  return (
    <div className='conversation-list-item'>
      {photo ? (
        <img className='conversation-photo' src={photo} alt='conversation' />
      ) : (
        <i className='fa fa-hashtag' aria-hidden='true'></i>
      )}
      <div className='conversation-info'>
        <h1 className='conversation-title'>{name}</h1>
      </div>
    </div>
  );
}
