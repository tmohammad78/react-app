import React, { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../Redux/reducers';
import { AuthState } from '../types/index';

interface PrivateRouteProps {
	component: any;
	isSignedIn?: boolean;
	toggleTheme: string | boolean | (() => void);
	children?: React.ReactNode;
	path: string;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ component: Component, toggleTheme, ...props }): JSX.Element => {

	const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
	return (
		<Route
			{...props}
			render={({ location }) => {
				if (auth.logged || auth.logged === 'skipped') {
					return <Component {...props} toggleTheme={toggleTheme} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/auth',
								state: 'd'
							}}
						/>
					);
				}
			}}
		/>
	);
};
export default PrivateRoute;
