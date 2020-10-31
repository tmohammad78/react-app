interface InfoRegister {
	idToken: string;
	refreshToken: string;
	expiresIn: string;
}

export enum authActionTypes {
	AUTH_LOGIN = 'AUTH_LOGIN',
	CHECK_LOGIN = 'CHECK_LOGIN',
	SKIPAUTH = 'SKIPAUTH',
	checkVerfify = 'checkVerfify',
	AUTH_REGISTER = 'AUTH_REGISTER',
	AUTH_ERROR = 'AUTH_ERROR'
}

interface Data {
	token: string;
	refreshToken: string;
	expiresIn: string;
	idToken: string;
	logged: boolean
}

export interface IAuthcheckLoginAction {
	type: authActionTypes.CHECK_LOGIN,
}

export interface IAuthSkipAction {
	type: authActionTypes.SKIPAUTH,
	payload: {
		logged: true
	}
}

// interface checkVerfify {
// 	type: typeof CHECK_LOGIN,
// 	payload: AuthState
// }

export interface IAuthloginAction {
	type: authActionTypes.AUTH_LOGIN,
	payload: Data
}

export interface IAuthRegisterAction {
	type: authActionTypes.AUTH_REGISTER,
	payload: Data
}

export type AuthSystemAction = IAuthSkipAction | IAuthloginAction | IAuthRegisterAction;