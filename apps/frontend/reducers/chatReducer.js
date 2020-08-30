import {
  GET_CONVERSATION_LIST,
  GET_CONVERSATION_MESSAGES,
  SEND_NEW_MESSAGE,
  GET_CONVERSATION_LIST_FAIL,
  GET_CONVERSATION_MESSAGES_FAIL,
  SEND_NEW_MESSAGE_FAIL,
  CLEAR_ERROR
} from '../actions/types';

import _ from 'lodash';

const initialState = {
  conversationlist: [],
  conversation: [],
  loading: true,
  error: [],
};

export default (state = initialState, action) => {
  let er = [];
  switch (action.type) {
    case GET_CONVERSATION_LIST:
      return {
        conversationlist: [...action.payload],
        loading: false,
      };
    case GET_CONVERSATION_LIST_FAIL:
      er = [];
      _.values(action.payload).map((e) => {
        er = _.concat(er, e);
      });
      return {
        ...state,
        loading: false,
        error: _.concat(er, state.error),
      };
    case GET_CONVERSATION_MESSAGES:
      return {
        conversation: [...action.payload],
        loading: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: [],
      };
    default:
      return state;
  }
};
