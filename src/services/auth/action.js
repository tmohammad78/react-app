import { AUTH_LOGIN, AUTH_ERROR, AUTH_REGISTER, CHECK_LOGIN } from './actionType';
import axios from '../../gate/api';
export const checkLogin = () => (dispatch, getState) => {
  const auth = getState().auth;
  console.log(auth);
  dispatch({
    type: CHECK_LOGIN,
    payload: auth
  });
};

export const register = ({ email, password }) => (dispatch, getState) => {
  axios
    .post('/accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ', {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .then(Response => {
      console.log(Response.data);
      const data = Response.data;
      return dispatch({
        type: AUTH_REGISTER,
        payload: data
      });
    });
};
