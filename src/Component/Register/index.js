import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormLogin from 'component/Login/form';
import { registerAction } from 'services/auth/action';
import firebase from '../../../firebaseconfig';
import './style.scss';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });
  }, []);
  const onClick = () => {
    const phoneNumber = '+989375050156';
    const applicationVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, applicationVerifier)
      .then(confirmationResult => {
        const verificationCode = window.prompt(
          'Please enter the verification ' + 'code that was sent to your mobile device.'
        );
        return confirmationResult.confirm(verificationCode);
      })
      .catch(error => {
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
