import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from './types';
import axios from 'axios';

//   load user
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/v1/users/me');
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

//  Register user
export const signup = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/v1/users/', formData);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: err.response.data,
    });
  }
};

//  login user
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/', formData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

//  logout
export const logout = () => {
  return { type: LOGOUT };
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
