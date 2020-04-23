import React, { useEffect } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../Redux/reducers';
import { AuthState } from '../../../types/index';
import { renderRoutes } from 'react-router-config';

const App = (props) => {
	const auth = useSelector<IApplicationState, AuthState>(state => state.auth);
	console.log(props);
	return (
		<div>
			App
		</div>
	)
}
export default App;