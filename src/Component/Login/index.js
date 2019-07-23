import React from 'react';
import Button from '../Buttons/Button';

const LoginModal = () => {
  return (
    <div className='login-content'>
      <div className='new-user'>
        <div className='new-user-content'>
          <h4>برای ورود یا عضویت شماره موبایلت رو وارد کن</h4>
          <form className='login-form'>
            <div className='field-group'>
              <input type='Tel' autoComplete='off' />
              <span>شماره موبایل</span>
            </div>
            <div className='button-holder' style={{ textAlign: 'center' }}>
              <Button
                disabled
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 45
                }}
                onKeyPress={() => {
                  alert('fff');
                }}
              >
                <i className='fo fo-angle-left' />
                <span>ادامه</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
