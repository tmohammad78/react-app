import { AUTH_LOGIN,SKIPAUTH, AUTH_ERROR, AUTH_REGISTER, CHECK_LOGIN } from './actionType';

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
      const { idToken, refreshToken, expiresIn } = action.payload;
      return {
        ...state,
        ...state.logged,
        token: idToken,
        refreshToken,
        expiresIn,
        logged: true
      };
    case CHECK_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken
      };
    case SKIPAUTH:
      return {
        logged: 'skiped'
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
