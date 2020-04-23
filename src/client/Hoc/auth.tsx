import React, { useEffect } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../Redux/reducers';
import { AuthState } from '../../../types/index';
import { renderRoutes } from 'react-router-config';
import AuthPage from '../Pages/auth/index';

const RequireAuth = (ComposedComponent) => {
	return (props) => {
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