import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormLogin from 'component/Login/form';
import { registerAction } from 'services/auth/action';
import firebase from '../../../firebaseconfig';
import './style.scss';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const test = useRef(null);
  useEffect(() => {
    debugger;
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });
  }, []);
  const onClick = () => {
    const phoneNumber = '+989375050156'; // for US number (123) 456-7899
    const applicationVerifier = window.recaptchaVerifier;
    debugger;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, applicationVerifier)
      .then(confirmationResult => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        debugger;
        const verificationCode = window.prompt(
          'Please enter the verification ' + 'code that was sent to your mobile device.'
        );
        return confirmationResult.confirm(verificationCode);
      })
      .catch(error => {
        // Error; SMS not sent
        // Handle Errors Here
        return Promise.reject(error);
      });
  };
  const handleAuth = values => {
    // console.log(firebase);
    // const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    dispatch(registerAction(values));
  };
  return (
    <div className='register_box'>
      <i
        className='fo fo-arrow-left'
        onClick={() => {
          history.goBack();
        }}
      />
      <div>
        <FormLogin submitAction={handleAuth} />
        <input id='recaptcha-container' type='button' onClick={onClick} />
        <div id='recaptcha-container' className='recaptcha' />
      </div>
    </div>
  );
};
export default Register;
