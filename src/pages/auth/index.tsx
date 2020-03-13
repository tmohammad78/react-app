import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { skipAuth } from 'services/auth/action';
import './style.scss';
import MainAuth from './Main';
import Register from 'component/Register';

const AuthPage = props => {
	const dispatch = useDispatch();
	const logged = useSelector(state => state.auth);
	const [RegisterUi, setRegisterUi] = useState(false);

	useEffect(() => {
		if (props.location.pathname == '/' && logged) {
			props.redirect('/');
		}
		if (props.location.pathname == '/auth/test') {
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
				<Route exact path='/auth/test' component={() => <Register />} />
			</div>
		</div>
	);
};

export default AuthPage;
