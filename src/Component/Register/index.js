import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormLogin from 'component/Login/form';
import { registerAction, loginAction, checkVerfify } from 'services/auth/action';
import firebase from '../../../firebaseconfig';
import './style.scss';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(true);
  const [values, setValues] = useState();
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });
  }, []);
  const getVerifyCode = values => {
    const phoneNumber = values.phonenumber.replace('0', '+98');
    console.log(phoneNumber);
    console.log(values);
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
      .then(response => {
        console.log(response);
        setNewUser(response.additionalUserInfo.isNewUser);
        dispatch(checkVerfify(response, values));
      })
      .catch(error => {
        return Promise.reject(error);
      });
  };
  const handleAuth = async values => {
    setValues(values);
    getVerifyCode(values);
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
        <input
          type='button'
          value='دریافت کد'
          id='recaptcha-container'
          type='button'
          onClick={getVerifyCode}
        />
        <div id='recaptcha-container' className='recaptcha' />
      </div>
    </div>
  );
};
export default Register;
