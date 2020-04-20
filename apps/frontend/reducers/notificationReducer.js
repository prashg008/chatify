import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return [...state, action.payload];
    case REMOVE_NOTIFICATION:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
