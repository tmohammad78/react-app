import { AuthSystemAction, authActionTypes } from './actionType';
import { Reducer } from 'redux';
import { AuthState } from '../../../Types/index';
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
				logged: action.payload.logged
			};

		case authActionTypes.AUTH_LOGIN:

			return {
				...state,
				// ...state.logged,
				token: action.payload.idToken,
				refreshToken: action.payload.refreshToken,
				expiresIn: action.payload.expiresIn,
				logged: action.payload.logged
			};
		// case authActionTypes.CHECK_LOGIN:
		// 	return {
		// 		...state,
		// 		// token: action.payload.token,
		// 		// refreshToken: action.payload.refreshToken
		// 	};
		case authActionTypes.SKIPAUTH:
			const { logged } = action.payload;
			return {
				...state,
				logged
			};
		default:
			return state;
	}
}
