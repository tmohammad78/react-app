import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';
import FormLogin from 'component/Login/form';
const Register = () => {
  const history = useHistory();
  return (
    <div className='register_box'>
      <i
        className='fo fo-arrow-left'
        onClick={() => {
          history.goBack();
        }}
      />
      <div>
        <FormLogin />
      </div>
    </div>
  );
};
export default Register;
