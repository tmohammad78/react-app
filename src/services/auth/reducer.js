import { AUTH_LOGIN, AUTH_ERROR, AUTH_REGISTER, CHECK_LOGIN } from './actionType';

const initialState = {
  authenticated: '',
  errorMessage: '',
  token: '',
  refreshToken: '',
  expiresIn: '',
  logged: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_REGISTER:
      const { idToken, refreshToken, expiresIn, isLogin } = action.payload;
      return {
        ...state,
        token: idToken,
        refreshToken,
        expiresIn,
        logged: isLogin
      };
    case CHECK_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken
      };
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        authenticated: action.payload.authenticated
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
