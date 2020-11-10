import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormLogin from '../../Components/Login/form';
import { registerAction, loginAction, checkVerfify } from '../../Redux/auth/action';
import firebase from '../../Config/firebaseconfig';
import { MyFormValues } from '../../types';

import './style.scss';

declare global {
	interface Window {
		recaptchaVerifier: any,
		prompt: (message?: string, _default?: string) => string | null
	}
}
const initialState = {
	email: '',
	phonenumber: '',
	password: ''
};
const Register: FunctionComponent = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [newUser, setNewUser] = useState(true);
	const [value, setValues] = useState<MyFormValues>(initialState);
	useEffect(() => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
			size: 'invisible'
		});
	}, []);

	const getVerifyCode = (values: MyFormValues) => {
		const phoneNumber = values.phonenumber.replace('0', '+98');
		const template_params = {
			message_html: values.phonenumber
		};

		const service_id = 'default_service';
		const template_id = 'template_ob6Oo6gP';
		const applicationVerifier = window.recaptchaVerifier;
		firebase
			.auth()
			.signInWithPhoneNumber(phoneNumber, applicationVerifier)
			.then((confirmationResult: any) => {
				const verificationCode = window.prompt(
					'Please enter the verification ' + 'code that was sent to your mobile device.'
				);
				return verificationCode ? confirmationResult.confirm(verificationCode) : null;
			})
			.then((response: any) => {
				// setNewUser(response.additionalUserInfo.isNewUser);
				dispatch(checkVerfify(response, values));
			})
			.catch((error: any) => {
				return Promise.reject(error);
			});
	};

	const handleAuth = async (values: MyFormValues) => {
		setValues(values);
		getVerifyCode(values);
	};
	return (
		<>
			<div className='register_box'>
				<i
					className='fo fo-arrow-left'
					onClick={() => {
						console.log('dscsdc');
					}}
				/>
				<div>
					<FormLogin submitAction={handleAuth} />
					<input
						type='button'
						value='دریافت کد'
						id='recaptcha-container'
						onClick={() => getVerifyCode}
						style={{
							opacity: 0
						}}
					/>
					<div id='recaptcha-container' className='recaptcha' />
				</div>
			</div>
		</>
	);
};
export default Register;
