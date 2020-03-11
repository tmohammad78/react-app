// export const AUTH_LOGIN = 'AUTH_LOGIN';
// export const AUTH_ERROR = 'AUTH_ERROR';
// export const AUTH_REGISTER = 'AUTH_REGISTER';
// export const CHECK_LOGIN = 'CHECK_LOGIN';
// export const SKIPAUTH = 'SKIPAUTH';
// export const checkVerfify = 'checkVerfify';
export interface AuthState {
	readonly errorMessage: string,
	readonly token: string,
	readonly refreshToken: string,
	readonly expiresIn: string,
	readonly logged: boolean
}
interface InfoRegister {
	idToken: string;
	refreshToken: string;
	expiresIn: string;
}
export enum authActionTypes {
	AUTH_LOGIN = "AUTH_LOGIN",
	CHECK_LOGIN = "CHECK_LOGIN",
	SKIPAUTH = "SKIPAUTH",
	checkVerfify = "checkVerfify",
	AUTH_REGISTER = "AUTH_REGISTER",
	AUTH_ERROR = "AUTH_ERROR"
}

export interface IAuthcheckLoginAction {
	type: authActionTypes.CHECK_LOGIN,
	payload: AuthState
}

export interface IAuthSkipAction {
	type: authActionTypes.SKIPAUTH,
	payload: AuthState
}
// interface checkVerfify {
// 	type: typeof CHECK_LOGIN,
// 	payload: AuthState
// }

export interface IAuthloginAction {
	type: authActionTypes.AUTH_LOGIN,
	payload: AuthState
}
export interface IAuthRegisterAction {
	type: authActionTypes.AUTH_REGISTER,
	payload: InfoRegister
}
export type AuthSystemAction = IAuthcheckLoginAction | IAuthSkipAction | IAuthloginAction | IAuthRegisterAction;