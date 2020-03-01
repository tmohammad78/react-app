import React, { useState } from 'react';

import { Button } from '../Buttons/Button';
import Login from '../Login';
import Modal from '../Modal';
import './style.scss';
import Portal from 'component/Portal';

const Header = ({ toggleTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const backgroundLogo =
    'https://static.snapp-food.com/media/cache/vendor_logo/uploads/images/vendors/logos/5807123d25da1.jpg';
  const toggleLoginShow = e => {
    setShowModal(prevState => !prevState);
  };

  return (
    <div className='main-header clearfix'>
      {showModal ? (
        <Portal>
          <Modal
            show={showModal}
            onClose={toggleLoginShow}
            style={{
              height: 300
            }}
          >
            <Login />
          </Modal>
        </Portal>
      ) : null}

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
