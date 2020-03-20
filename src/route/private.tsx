import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IApplicationState } from 'services/reducers';
import { AuthState } from 'src/types';

interface PrivateRouteProps extends RouteProps {
	component: any;
	isSignedIn: boolean;
}


const PrivateRoute: React.SFC<PrivateRouteProps> = ({ component: Component, ...props }, toggleTheme: () => void) => {
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
