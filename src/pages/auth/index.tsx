import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';

import { skipAuth } from '../../Redux/auth/action';
import { IApplicationState } from '../../Redux/reducers';
import Register from '../../Components/Register/index';
import MainAuth from './Main';
import { AuthState } from '../../Types/index';

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

	console.log('dddd')

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
