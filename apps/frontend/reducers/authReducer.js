import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from '../actions/types';

import _ from 'lodash';

const initialState = {
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: false,
  loading: true,
  user: null,
  error: [],
};

export default (state = initialState, action) => {
  let er = [];
  switch (action.type) {
    case SIGNIN_SUCCESS:
      localStorage.setItem('access', action.payload.access);
      localStorage.setItem('refresh', action.payload.refresh);
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNIN_FAIL:
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      er = [];
      _.values(action.payload).map((e) => {
        er = _.concat(er, e);
      });
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: _.concat(er, state.error),
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
      er = [];
      _.values(action.payload).map((e) => {
        er = _.concat(er, e);
      });
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: _.concat(er, state.error),
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('access', action.payload.access);
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
      er = [];
      _.values(action.payload).map((e) => {
        er = _.concat(er, e);
      });
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: _.concat(er, state.error),
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
    case CLEAR_ERROR:
      return {
        ...state,
        error: [],
      };
    default:
      return state;
  }
};
