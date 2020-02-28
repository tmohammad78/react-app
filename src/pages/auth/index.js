import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Test from './test';
import Register from 'component/Register';
import './style.scss';

const AuthPage = props => {
  //   let history = useHistory();
  //   let location = useLocation();
  //   let { form } = location.state || { form: { pathname: '/' } };
  console.log(props);
  console.log('render');
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
  return (
    <div className={`image-background ${RegisterUi ? 'active' : ''}`}>
      <picture>
        <div className='my_img'></div>
      </picture>
      <Route
        exact
        path={'/auth'}
        component={() => <Test {...props} callBackChangeState={handleShow} />}
      />
      <Route exact path='/auth/test' component={() => <Register logged={logged} />} />
    </div>
  );
};
export default AuthPage;
