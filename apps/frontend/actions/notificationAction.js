import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from './types';
import { v4 as uuid } from 'uuid';

export const setNotification = ({ msg, type }) => async (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_NOTIFICATION,
    payload: { msg, type, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, payload: id }), 5000);
};

export const CloseNotification = ({ id }) => async (dispatch) => {
  dispatch({ type: REMOVE_NOTIFICATION, payload: id });
};
