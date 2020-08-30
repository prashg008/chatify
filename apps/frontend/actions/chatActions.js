import {
  GET_CONVERSATION_LIST,
  GET_CONVERSATION_MESSAGES,
  SEND_NEW_MESSAGE,
  GET_CONVERSATION_LIST_FAIL,
  GET_CONVERSATION_MESSAGES_FAIL,
  SEND_NEW_MESSAGE_FAIL,
} from './types';
import axios from 'axios';

export const loadConversations = () => async (dispatch) => {
  try {
    const res = await axios.get('/v1/rooms/');
    console.log(res);
    dispatch({ type: GET_CONVERSATION_LIST, payload: res.data.results });
  } catch (err) {
    dispatch({ type: GET_CONVERSATION_LIST_FAIL });
  }
};
