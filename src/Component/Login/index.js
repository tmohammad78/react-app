import React, { useState } from 'react';
import Button from '../Buttons/Button';
import Input from '../Input';

const LoginModal = () => {
  const [mobile, setMobile] = useState('');
  const handleChange = e => {
    setMobile(e.target.value);
  };
  return (
    <div className='login-content'>
      <div className='new-user'>
        <div className='new-user-content'>
          <h4>برای ورود یا عضویت شماره موبایلت رو وارد کن</h4>
          <form className='login-form'>
            <div className='field-group'>
              <Input
                value={mobile}
                onChange={handleChange}
                label='شماره موبایل'
                type='Tel'
                autoComplete='off'
              />
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
