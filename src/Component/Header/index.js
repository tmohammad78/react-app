import React, { useState, Suspense, lazy } from 'react';

import { Button } from '../Buttons/Button';
import Login from '../Login';
const Modal = lazy(() => import('../Modal'));

import './style.scss';

const Header = ({ toggleTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const backgroundLogo = 'https://static.delino.com/Image/Default/logo/2yujoehm.rrz_180x180.png';
  const toggleLoginShow = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <div className='main-header clearfix'>
      <Suspense fallback={<div>...loading</div>}>
        <Modal
          show={showModal}
          onClose={toggleLoginShow}
          style={{
            height: 300
          }}
        >
          <Login />
        </Modal>
      </Suspense>

      <div className='wrapper clearfix'>
        <div className='right'>
          <div className='rest-logo-holder'>
            <figure className='logo-holder'>
              <img alt='logo' src={backgroundLogo} />
            </figure>
          </div>
        </div>
        <div className='left'>
          <div className='user-login-holder'>
            <div className='user-holder'>
              <Button
                bgcolor='black'
                style={{
                  marginLeft: '20px',
                  marginRight: '20px'
                }}
                onClick={toggleTheme}
              >
                darkModa
              </Button>
              <Button onClick={toggleLoginShow} type='submit'>
                ورود / عضویت
                <i className='fo fo-user' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
