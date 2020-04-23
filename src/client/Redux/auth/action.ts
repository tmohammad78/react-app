import { IAuthRegisterAction, IAuthloginAction, authActionTypes, IAuthcheckLoginAction, IAuthSkipAction } from './actionType';
import axios from '../../../API/api';
import { AxiosResponse } from 'axios';
import { Dispatch, ActionCreator, AnyAction } from 'redux';
import { browserHistory } from '../../Route/history';
import { ThunkAction } from 'redux-thunk';
import { IApplicationState } from '../reducers';

interface Props {
	email: string,
	password: string
}
interface IPost {
	email: string,
	password: string,
	returnSecureToken: boolean
}

export const checkLogin: ActionCreator<ThunkAction<AnyAction, IApplicationState, undefined, IAuthcheckLoginAction>> = () => (dispatch: Dispatch, getState: () => IApplicationState) => {
	const auth = getState().auth;
	return dispatch({
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

export const skipAuth: ActionCreator<IAuthSkipAction> = () => ({
	type: authActionTypes.SKIPAUTH,
	payload: {
		logged: true
	}
})

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



export const loginAction: ActionCreator<ThunkAction<Promise<AnyAction>, IApplicationState, undefined, IAuthloginAction>> = ({ email, password }: Props) => (dispatch: Dispatch, getState: () => IApplicationState) => {
	debugger;

	return axios
		.post('/accounts:signInWithCustomToken?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ', {
			email: email,
			password: password,
			returnSecureToken: true
		})
		.then((Response: AxiosResponse) => {
			const data = Response.data;
			browserHistory.push('/');
			console.log(data);
			return dispatch({
				type: authActionTypes.AUTH_LOGIN,
				payload: {
					...data,
					logged: true
				}
			});
		});
};

export const registerAction: ActionCreator<ThunkAction<Promise<AnyAction>, IApplicationState, undefined, IAuthRegisterAction>> = ({ email, password }: Props) => (dispatch: Dispatch) => {
	debugger;
	return axios
		.post<IPost>(
			'/accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ',
			{
				credentials: 'same-origin'
			},
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
		)
		.then((Response: AxiosResponse) => {
			// /accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ
			///accounts:signInWithPassword?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ
			const data = Response.data;
			browserHistory.push('/');
			console.log(data);


			return dispatch({
				type: authActionTypes.AUTH_REGISTER,
				payload: {
					...data,
					logged: true
				}
			});
		});
};
