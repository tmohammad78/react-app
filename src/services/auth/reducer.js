import { AUTH_LOGIN, AUTH_ERROR } from './actionType';

const initialState = {
  authenticated: '',
  errorMessage: '',
  user: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
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
