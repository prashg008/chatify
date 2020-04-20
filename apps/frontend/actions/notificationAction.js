import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from './types';
import { v4 as uuid } from 'uuid';

export const setNotification = (msg, type) => async (dispatch) => {
  console.log(msg);
  const id = uuid();
  dispach({
    type: SET_NOTIFICATION,
    payload: { msg, type, id },
  });

  setTimeout(
    (dispach) => dispach({ type: REMOVE_NOTIFICATION, payload: id }),
    5000
  );
};
