import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';

import { skipAuth } from 'services/auth/action';
import { IApplicationState } from 'services/reducers';
import Register from 'component/Register';
import MainAuth from './Main';
import { AuthState } from 'types';

import './style.scss';

const AuthPage: React.SFC<any> = (props) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const logged = useSelector<IApplicationState, AuthState>(state => state.auth);
	const [RegisterUi, setRegisterUi] = useState(false);

	useEffect(() => {
		if (location.pathname == '/' && logged) {
			props.redirect('/');
		}
		if (location.pathname == '/auth/test') {
			setRegisterUi(true);
		} else {
			setRegisterUi(false);
		}
	});
	const handleShow = () => {
		setRegisterUi(false);
	};

	const handleSkipAuth = () => {
		dispatch(skipAuth());
	};

	return (
		<div>
			<div className={`image-background ${RegisterUi ? 'active' : ''}`}>
				<picture>
					<div className='my_img'></div>
				</picture>
				<Route
					exact
					path={'/auth'}
					component={() => (
						<MainAuth {...props} callBackChangeState={handleShow} handleSkipAuth={handleSkipAuth} />
					)}
				/>
				<Route exact path='/auth/test' component={Register} />
			</div>
		</div>
	);
};

export default AuthPage;
