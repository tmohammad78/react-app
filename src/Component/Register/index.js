import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormLogin from 'component/Login/form';
import { registerAction } from 'services/auth/action';
import './style.scss';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAuth = values => {
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
      </div>
    </div>
  );
};
export default Register;
