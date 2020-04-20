import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
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
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log(formData);
  try {
    const res = await axios.post('api/v1/users/', formData, config);

    dispatch({
      type: SIGNIN_SUCCESS,
      payload: res,
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: err.response.data.detail,
    });
  }
};

//  login user
export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/auth/', formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    loadUser();
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.details,
    });
  }
};

//  logout
export const logout = () => {
  return { type: LOGOUT };
};
