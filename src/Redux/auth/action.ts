import {
	IAuthRegisterAction,
	IAuthloginAction,
	authActionTypes,
	IAuthcheckLoginAction,
	IAuthSkipAction
} from './actionType';
import axios from '../../API/api';
import { AxiosResponse } from 'axios';
import { Dispatch, ActionCreator, AnyAction } from 'redux';
import browserHistory from '../../route/history';
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

export const skipAuth: ActionCreator<IAuthSkipAction> = () => ({
	type: authActionTypes.SKIPAUTH,
	payload: {
		logged: true
	}
});

export const checkVerfify = (response: any, values: any) => (dispatch: any) => {

	if (response.additionalUserInfo.isNewUser) {
		return dispatch(registerAction(values));
	} else {
		return dispatch(loginAction(values));
	}
};


export const loginAction: ActionCreator<ThunkAction<Promise<AnyAction>, IApplicationState, undefined, IAuthloginAction>> = ({ email, password }: Props) => (dispatch: Dispatch, getState: () => IApplicationState) => {
	return axios
		.post('/accounts:signInWithCustomToken?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ', {
			email,
			password,
			returnSecureToken: true
		})
		.then((Response: AxiosResponse) => {
			const data = Response.data;
			browserHistory.push('/');
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
	return axios
		.post<IPost>(
			'/accounts:signUp?key=AIzaSyDa29GWAYmBAuPEE7gxgVepxYYr6JAyfMQ',
			{
				credentials: 'same-origin'
			},
			{
				email,
				password,
				returnSecureToken: true
			}
		)
		.then((Response: AxiosResponse) => {
			const data = Response.data;
			browserHistory.push('/');
			return dispatch({
				type: authActionTypes.AUTH_REGISTER,
				payload: {
					...data,
					logged: true
				}
			});
		});
};
