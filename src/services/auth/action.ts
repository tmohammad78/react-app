import { IAuthRegisterAction, IAuthloginAction, authActionTypes, IAuthcheckLoginAction, IAuthSkipAction } from './actionType';
import axios from '../../gate/api';
import { Dispatch, ActionCreator, AnyAction } from 'redux';
import { browserHistory } from '../../route/history';

interface Props {
	email: string,
	password: string
}

export const checkLogin = () => (dispatch: Dispatch, getState: any) => {
	const auth = getState().auth;
	dispatch({
		type: authActionTypes.CHECK_LOGIN,
		payload: auth
	});
};
// export const checkLogin: ActionCreator<IAuthcheckLoginAction> = (getState) => {
// 	const auth = getState().auth;
// 	return {
// 		type: authActionTypes.CHECK_LOGIN,
// 		payload: auth
// 	}
// }
// const auth = getState().auth;
// dispatch({

// 	payload: auth
// });

// export const skipAuth = () => (dispatch: Dispatch) => {
// 	return dispatch({
// 		type: authActionTypes.SKIPAUTH
// 	});
// };
// export const skipAuth: ActionCreator<IAuthSkipAction> = () => ({
// 	type: authActionTypes.SKIPAUTH
// });
export const checkVerfify = (response: any, values: any) => (dispatch: any) => {
	console.log(response, values);

	if (response.additionalUserInfo.isNewUser) {
		return dispatch(registerAction(values));
	} else {
		return dispatch(loginAction(values));
	}
};



export const loginAction = ({ email, password }: Props) => (dispatch: Dispatch, getState: any) => {
	debugger;
	axios
		.post('/accounts:signInWithCustomToken?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ', {
			email: email,
			password: password,
			returnSecureToken: true
		})
		.then(Response => {
			const data = Response.data;
			browserHistory.push('/');
			console.log(data);
			return dispatch({
				type: authActionTypes.AUTH_LOGIN,
				payload: data
			});
		});
};

export const registerAction = ({ email, password }: Props) => (dispatch: Dispatch) => {
	debugger;
	axios
		.post(
			'/accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ',
			{
				credentials: 'same-origin'
				// set-Cookie:
			},
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
		)
		.then((Response): any => {
			// /accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ
			///accounts:signInWithPassword?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ
			const data = Response.data;
			browserHistory.push('/');
			console.log(data);
			return dispatch({
				type: authActionTypes.AUTH_REGISTER,
				payload: data
			});
		});
};
