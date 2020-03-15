import { AuthSystemAction, authActionTypes } from './actionType';
import { Reducer } from 'redux';
import { AuthState } from '../../types/index';
const initialState: AuthState = {
	errorMessage: '',
	token: '',
	refreshToken: '',
	expiresIn: '',
	logged: false
};


export const authReducer: Reducer<AuthState, AuthSystemAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case authActionTypes.AUTH_REGISTER:
			const { idToken, refreshToken, expiresIn } = action.payload;
			return {
				...state,
				// ...state.logged,
				token: idToken,
				refreshToken,
				expiresIn,
				logged: true
			};

		case authActionTypes.AUTH_LOGIN:
			return {
				...state,
				// ...state.logged,
				token: idToken,
				refreshToken,
				expiresIn,
				logged: true
			};
		case authActionTypes.CHECK_LOGIN:
			return {
				...state,
				// token: action.payload.token,
				// refreshToken: action.payload.refreshToken
			};
		case authActionTypes.SKIPAUTH:
			return {
				logged: true
			};
		default:
			return state;
	}
}
