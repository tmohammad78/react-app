import { SKIPAUTH, AUTH_REGISTER, CHECK_LOGIN, AUTH_LOGIN } from './actionType';
import axios from '../../gate/api';
import { browserHistory } from '../../route/history';

export const checkLogin = () => (dispatch, getState) => {
  const auth = getState().auth;
  dispatch({
    type: CHECK_LOGIN,
    payload: auth
  });
};

export const skipAuth = () => dispatch => {
  return dispatch({
    type: SKIPAUTH
  });
};

export const loginAction = ({ email, password }) => (dispatch, getState) => {
  axios
    .post('/accounts:signInWithPassword?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ', {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .then(Response => {
      const data = Response.data;
      browserHistory.push('/');
      console.log(data);
      return dispatch({
        type: AUTH_LOGIN,
        payload: data
      });
    });
};

export const registerAction = ({ email, password }) => (dispatch, getState) => {
  debugger;
  axios
    .post('/accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ', {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .then(Response => {
      // /accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ
      ///accounts:signInWithPassword?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ
      const data = Response.data;
      browserHistory.push('/');
      console.log(data);
      return dispatch({
        type: AUTH_REGISTER,
        payload: data
      });
    });
};
