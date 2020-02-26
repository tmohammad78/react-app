import React, { useState, useEffect, lazy, Suspense } from 'react';
import LoginModal from 'component/Login/index';
import './style.scss';
import { Route } from 'react-router-dom';

import Test from './test';
import Spinner from 'component/Spinner';

import Register from 'component/Register';

const AuthPage = props => {
  console.log(props);

  const [RegisterUi, setRegisterUi] = useState(false);
  useEffect(() => {
    if (props.location.pathname == '/auth/test') {
      setRegisterUi(true);
    } else {
      setRegisterUi(false);
    }
  });
  const handleShow = () => {
    setRegisterUi(false);
  };
  return (
    // <div
    //   style={{
    //     margin: '20% 0px'
    //   }}
    // >
    //   <LoginModal />
    // </div>

    <div className={`image-background ${RegisterUi ? 'active' : ''}`}>
      <picture>
        <div className='my_img'></div>
      </picture>
      <Route
        exact
        path={'/auth'}
        component={() => <Test {...props} callBackChangeState={handleShow} />}
      />
      <Route exact path='/auth/test' component={Register} />
    </div>
  );
};
export default AuthPage;
