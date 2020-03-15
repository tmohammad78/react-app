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
}

export interface IAuthSkipAction {
	type: authActionTypes.SKIPAUTH
}
// interface checkVerfify {
// 	type: typeof CHECK_LOGIN,
// 	payload: AuthState
// }

export interface IAuthloginAction {
	type: authActionTypes.AUTH_LOGIN,
	payload: any
}
export interface IAuthRegisterAction {
	type: authActionTypes.AUTH_REGISTER,
	payload: any
}
export type AuthSystemAction = IAuthcheckLoginAction | IAuthSkipAction | IAuthloginAction | IAuthRegisterAction;