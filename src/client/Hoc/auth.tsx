import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../Redux/reducers';
import { AuthState } from '../../types/index';

const RequireAuth = (ComposedComponent: any) => {
	return (props: any) => {
		console.log(props);
		const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
		if (auth.logged) {
			return <ComposedComponent {...props} />
		}
		return <Redirect to={{
			pathname: '/auth',
			state: props.location
		}} />
	}

}
export default RequireAuth;