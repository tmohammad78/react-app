import React, { FunctionComponent } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IApplicationState } from '@Redux/reducers';
import { AuthState } from '@Types/index';

interface PrivateRouteProps {
	component: any;
	isSignedIn?: boolean;
	toggleTheme: string | boolean | (() => void);
	children?: React.ReactNode;
	path: string;
}


const PrivateRoute: React.SFC<PrivateRouteProps> = ({ component: Component, toggleTheme, ...props }): JSX.Element => {
	const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
	return (
		<Route
			{...props}
			render={({ location }) => {
				if (auth.logged || auth.logged == 'skiped') {
					return <Component {...props} toggleTheme={toggleTheme} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/auth',
								state: {
									from: location
								}
							}}
						/>
					);
				}
			}}
		/>
	);
};
export default PrivateRoute;
