import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

import { setNotification } from '../actions/notificationAction';

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      localStorage.setItem('access', action.payload.access);
      localStorage.setItem('refresh', action.payload.refresh);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNIN_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      setNotification(action.payload);
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case AUTH_ERROR:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('access', action.payload.token);
      localStorage.setItem('refresh', action.payload.refresh);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
